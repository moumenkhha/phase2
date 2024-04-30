/*
  Warnings:

  - Added the required column `isbn` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isbn" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "buyer" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    CONSTRAINT "Purchase_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "Book" ("isbn") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_buyer_fkey" FOREIGN KEY ("buyer") REFERENCES "Buyer" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Purchase" ("buyer", "id", "seller", "year") SELECT "buyer", "id", "seller", "year" FROM "Purchase";
DROP TABLE "Purchase";
ALTER TABLE "new_Purchase" RENAME TO "Purchase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
