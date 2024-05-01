-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 10,
    "quantity" INTEGER NOT NULL DEFAULT 10,
    CONSTRAINT "Item_seller_fkey" FOREIGN KEY ("seller") REFERENCES "Seller" ("username") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("id", "name", "price", "quantity", "seller") SELECT "id", "name", coalesce("price", 10) AS "price", "quantity", "seller" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
