import "dotenv/config";
import express from "express";
import cors from "cors";
import prisma from "./db";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- ROUTES ---

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Sultan Top Up API is running" });
});

// GET all games
app.get("/api/games", async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: { products: true }
    });
    res.json(games);
  } catch (error) {
    console.error("Games API Error:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

// GET popular games
app.get("/api/games/popular", async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      where: { isPopular: true }
    });
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch popular games" });
  }
});

// GET single game by ID
app.get("/api/games/:id", async (req, res) => {
  try {
    const game = await prisma.game.findUnique({
      where: { id: req.params.id },
      include: { products: true }
    });
    if (!game) return res.status(404).json({ error: "Game not found" });
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch game" });
  }
});

// POST transaction (Top Up)
app.post("/api/transactions", async (req, res) => {
  const { gameId, productId, gameUserId, gameZoneId, paymentMethod } = req.body;
  
  try {
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Generate a mock Virtual Account / Payment Code based on method
    let paymentCode = "";
    const methodUpper = paymentMethod.toUpperCase();
    if (methodUpper.includes('BCA')) paymentCode = "8077" + Math.floor(10000000 + Math.random() * 90000000).toString();
    else if (methodUpper.includes('GOPAY')) paymentCode = "08" + Math.floor(1000000000 + Math.random() * 9000000000).toString();
    else if (methodUpper.includes('OVO')) paymentCode = "08" + Math.floor(1000000000 + Math.random() * 9000000000).toString();
    else if (methodUpper.includes('DANA')) paymentCode = "08" + Math.floor(1000000000 + Math.random() * 9000000000).toString();
    else paymentCode = "PAY-" + Math.floor(10000000 + Math.random() * 90000000).toString();

    const transaction = await prisma.transaction.create({
      data: {
        gameId,
        productId,
        gameUserId,
        gameZoneId,
        amount: product.price,
        paymentMethod,
        paymentCode,
        status: "PENDING" // Starts as pending now!
      }
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

// GET single transaction
app.get("/api/transactions/:id", async (req, res) => {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id: req.params.id },
      include: {
        game: true,
        product: true
      }
    });
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transaction" });
  }
});

// POST simulate payment (Admin / Demo only)
app.post("/api/transactions/:id/pay", async (req, res) => {
  try {
    const transaction = await prisma.transaction.update({
      where: { id: req.params.id },
      data: { status: "SUCCESS" }
    });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to update payment status" });
  }
});

// GET admin stats
app.get("/api/admin/stats", async (req, res) => {
  try {
    const totalRevenueResult = await prisma.transaction.aggregate({
      _sum: { amount: true },
      where: { status: "SUCCESS" }
    });
    
    const countPendingResult = await prisma.transaction.count({
      where: { status: "PENDING" }
    });

    const countSuccessResult = await prisma.transaction.count({
      where: { status: "SUCCESS" }
    });

    res.json({
      totalRevenue: totalRevenueResult._sum.amount || 0,
      totalPending: countPendingResult,
      totalSuccess: countSuccessResult
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// GET admin recent transactions
app.get("/api/admin/transactions", async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: {
        game: { select: { name: true } },
        product: { select: { name: true, price: true } }
      }
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recent transactions" });
  }
});

// START SERVER
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
