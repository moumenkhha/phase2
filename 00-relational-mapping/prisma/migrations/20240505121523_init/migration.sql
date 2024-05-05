-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Seller" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL DEFAULT 'password',
    "name" TEXT NOT NULL
);
INSERT INTO "new_Seller" ("name", "password", "username") SELECT "name", "password", "username" FROM "Seller";
DROP TABLE "Seller";
ALTER TABLE "new_Seller" RENAME TO "Seller";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
