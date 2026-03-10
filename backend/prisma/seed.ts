import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({
  url: "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Mobile Legends
  const mlbb = await prisma.game.create({
    data: {
      name: "Mobile Legends",
      publisher: "Moonton",
      imageUrl: "https://play-lh.googleusercontent.com/xebXhyQIK_kksg8C4Oms1P4t8p4fP13tF0w11pGzUaL0Vn6R7e29W2cZbMiy50K_cQ",
      description: "Top up Diamonds Mobile Legends: Bang Bang",
      isPopular: true,
      products: {
        create: [
          { name: "5 Diamonds", price: 1500 },
          { name: "14 Diamonds", price: 4000 },
          { name: "42 Diamonds", price: 12000 },
          { name: "70 Diamonds", price: 20000 },
          { name: "140 Diamonds", price: 40000 },
          { name: "Weekly Diamond Pass", price: 28000 },
        ]
      }
    }
  });

  // Free Fire
  const ff = await prisma.game.create({
    data: {
      name: "Free Fire",
      publisher: "Garena",
      imageUrl: "https://play-lh.googleusercontent.com/yU4ECA_T5qVd998Fz8i7kY5lJvN_I1Y4G4h_8q5c6i7Z0C4cR_S6c28fB8_7B0D_o_k",
      description: "Top up Diamonds Garena Free Fire",
      isPopular: true,
      products: {
        create: [
          { name: "50 Diamonds", price: 8000 },
          { name: "140 Diamonds", price: 20000 },
          { name: "355 Diamonds", price: 50000 },
          { name: "720 Diamonds", price: 100000 },
        ]
      }
    }
  });

  // Valorant
  const valo = await prisma.game.create({
    data: {
      name: "Valorant",
      publisher: "Riot Games",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png",
      description: "Top up Valorant Points (VP)",
      isPopular: true,
      products: {
        create: [
          { name: "300 VP", price: 45000 },
          { name: "625 VP", price: 90000 },
          { name: "1120 VP", price: 150000 },
          { name: "3400 VP", price: 450000 },
        ]
      }
    }
  });

  // PUBG Mobile
  const pubgm = await prisma.game.create({
    data: {
      name: "PUBG Mobile",
      publisher: "Tencent Games",
      imageUrl: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yq2GUKlOEpqu2emCPswlsA8BpHx9A4R4kKk",
      description: "Top up UC PUBG Mobile",
      isPopular: false,
      products: {
        create: [
          { name: "60 UC", price: 15000 },
          { name: "325 UC", price: 75000 },
          { name: "660 UC", price: 150000 },
        ]
      }
    }
  });

  // Genshin Impact
  await prisma.game.create({
    data: {
      name: "Genshin Impact",
      publisher: "HoYoverse",
      imageUrl: "https://play-lh.googleusercontent.com/1-hK_T0R282wJ5Y-P3oHhJmbCqK_Yn1Lw87oA9Tf7T5k-7Hk-6v5Xk6l4T7p8D_H8v_A", // Placeholder
      description: "Top up Genesis Crystals",
      isPopular: true,
      products: {
        create: [
          { name: "60 Genesis Crystals", price: 16000 },
          { name: "300 Genesis Crystals", price: 79000 },
          { name: "980 Genesis Crystals", price: 249000 },
          { name: "Blessing of the Welkin Moon", price: 79000 },
        ]
      }
    }
  });

  // Call of Duty Mobile
  await prisma.game.create({
    data: {
      name: "Call of Duty Mobile",
      publisher: "Garena",
      imageUrl: "https://play-lh.googleusercontent.com/XUjrKhtE_h77l0xS4w3PqB0R076yU7P9v_4tO-b2P2h2Yd9E6X8T8s7p7j6K0e8R_v0", // Placeholder
      description: "Top up CP Call of Duty Mobile",
      isPopular: true,
      products: {
        create: [
          { name: "31 CP", price: 5000 },
          { name: "62 CP", price: 10000 },
          { name: "310 CP", price: 50000 },
          { name: "760 CP", price: 100000 },
        ]
      }
    }
  });

  // EA SPORTS FC Mobile
  await prisma.game.create({
    data: {
      name: "EA SPORTS FC Mobile",
      publisher: "Electronic Arts",
      imageUrl: "https://play-lh.googleusercontent.com/9C0D3t9C_A_602R7m9g2bX_2Y5T2D2z6n1a1P_S9L2g_G3t6E8s8l7W7V7l7B-K-Y_0", // Placeholder
      description: "Top up FC Points",
      isPopular: false,
      products: {
        create: [
          { name: "100 FC Points", price: 15000 },
          { name: "500 FC Points", price: 75000 },
          { name: "1050 FC Points", price: 150000 },
        ]
      }
    }
  });

  // Roblox
  await prisma.game.create({
    data: {
      name: "Roblox",
      publisher: "Roblox Corporation",
      imageUrl: "https://play-lh.googleusercontent.com/WNWZaxi9RdJ1coL3_Xm90H-M_G1m7U4L3a4V1A-6r_3N3b5f0v_7X_4_D_8lM_d_d8E", // Placeholder
      description: "Top up Robux",
      isPopular: false,
      products: {
        create: [
          { name: "80 Robux", price: 15000 },
          { name: "400 Robux", price: 75000 },
          { name: "800 Robux", price: 150000 },
        ]
      }
    }
  });

  // Honor of Kings
  await prisma.game.create({
    data: {
      name: "Honor of Kings",
      publisher: "Level Infinite",
      imageUrl: "https://play-lh.googleusercontent.com/9YhZ6_yH2V8H6Q2T_v-4y5I-_1E_L_0F-2-5d_q_H-Z0P4g8K9n4U2u6X3j7y9m", // Placeholder
      description: "Top up Tokens",
      isPopular: true,
      products: {
        create: [
          { name: "16 Tokens", price: 3000 },
          { name: "80 Tokens", price: 15000 },
          { name: "300 Tokens", price: 59000 },
        ]
      }
    }
  });

  // Arena of Valor
  await prisma.game.create({
    data: {
      name: "Arena of Valor",
      publisher: "Garena",
      imageUrl: "https://play-lh.googleusercontent.com/F_3h4A2Kj43uX-1oG0aY4eZ7K9Y1m4V_1U4q1K_k5A31t4g7x-7O44r23A39H-l2v_A", // Placeholder
      description: "Top up Vouchers",
      isPopular: false,
      products: {
        create: [
          { name: "40 Vouchers", price: 10000 },
          { name: "90 Vouchers", price: 20000 },
          { name: "230 Vouchers", price: 50000 },
        ]
      }
    }
  });

  // Point Blank
  await prisma.game.create({
    data: {
      name: "Point Blank",
      publisher: "Zepetto",
      imageUrl: "https://play-lh.googleusercontent.com/z-7N117A32t0B_t8_8A5t1_B9e52y5y4R8W100r7I_R2j8M6c0Z61G4V2o_5U9E", // Placeholder
      description: "Top up PB Cash",
      isPopular: false,
      products: {
        create: [
          { name: "1.200 PB Cash", price: 10000 },
          { name: "2.400 PB Cash", price: 20000 },
          { name: "6.000 PB Cash", price: 50000 },
        ]
      }
    }
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
