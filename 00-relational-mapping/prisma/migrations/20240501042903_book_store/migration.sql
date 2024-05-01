/*
  Warnings:

  - Made the column `name` on table `Seller` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `Buyer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Buyer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Seller" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Seller" ("name", "password", "username") SELECT "name", "password", "username" FROM "Seller";
DROP TABLE "Seller";
ALTER TABLE "new_Seller" RENAME TO "Seller";
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "Item_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("id", "name", "price", "quantity", "seller") SELECT "id", "name", "price", "quantity", "seller" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_Buyer" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 1000000,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_Buyer" ("balance", "location", "name", "password", "username") SELECT "balance", "location", "name", "password", "username" FROM "Buyer";
DROP TABLE "Buyer";
ALTER TABLE "new_Buyer" RENAME TO "Buyer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
