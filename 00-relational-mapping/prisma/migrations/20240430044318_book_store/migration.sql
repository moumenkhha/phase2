-- CreateTable
CREATE TABLE "Buyer" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 1000000,
    "name" TEXT,
    "location" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Book" (
    "isbn" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT,
    "publisher" TEXT,
    "publish_year" INTEGER,
    "genre" TEXT,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL
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
    "seller" TEXT NOT NULL,
    "buyer" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    CONSTRAINT "Purchase_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_buyer_fkey" FOREIGN KEY ("buyer") REFERENCES "Buyer" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
