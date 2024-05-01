/*
  Warnings:

  - The primary key for the `Purchase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Purchase` table. All the data in the column will be lost.
  - The required column `purchaseId` was added to the `Purchase` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchase" (
    "purchaseId" TEXT NOT NULL PRIMARY KEY,
    "itemId" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "buyer" TEXT NOT NULL,
    "year" INTEGER NOT NULL DEFAULT 2024,
    CONSTRAINT "Purchase_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Purchase_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Purchase_buyer_fkey" FOREIGN KEY ("buyer") REFERENCES "Buyer" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Purchase" ("buyer", "itemId", "seller", "year") SELECT "buyer", "itemId", "seller", "year" FROM "Purchase";
DROP TABLE "Purchase";
ALTER TABLE "new_Purchase" RENAME TO "Purchase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
