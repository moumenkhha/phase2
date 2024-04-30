-- CreateTable
CREATE TABLE "Buyer" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 1000000,
    "name" TEXT,
    "location" TEXT
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "seller" TEXT NOT NULL,
    "price" INTEGER,
    "quantity" INTEGER,
    CONSTRAINT "Item_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Seller" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemId" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "buyer" TEXT NOT NULL,
    "year" TEXT,
    CONSTRAINT "Purchase_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_buyer_fkey" FOREIGN KEY ("buyer") REFERENCES "Buyer" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
