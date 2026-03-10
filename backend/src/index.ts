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

    const transaction = await prisma.transaction.create({
      data: {
        gameId,
        productId,
        gameUserId,
        gameZoneId,
        amount: product.price,
        paymentMethod,
        status: "SUCCESS" // Mocking instant success for now
      }
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

// START SERVER
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
