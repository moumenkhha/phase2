-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Purchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "itemId" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "buyer" TEXT NOT NULL,
    "year" INTEGER NOT NULL DEFAULT 2024,
    CONSTRAINT "Purchase_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Purchase_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Purchase_buyer_fkey" FOREIGN KEY ("buyer") REFERENCES "Buyer" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Purchase" ("buyer", "id", "itemId", "seller", "year") SELECT "buyer", "id", "itemId", "seller", coalesce("year", 2024) AS "year" FROM "Purchase";
DROP TABLE "Purchase";
ALTER TABLE "new_Purchase" RENAME TO "Purchase";
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "seller" TEXT NOT NULL,
    "price" INTEGER,
    "quantity" INTEGER,
    CONSTRAINT "Item_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("id", "name", "price", "quantity", "seller") SELECT "id", "name", "price", "quantity", "seller" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
