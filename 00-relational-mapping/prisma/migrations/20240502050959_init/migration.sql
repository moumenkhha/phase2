-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Buyer" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "balance" INTEGER NOT NULL DEFAULT 1000000,
    "location" TEXT
);
INSERT INTO "new_Buyer" ("balance", "location", "name", "password", "username") SELECT "balance", "location", "name", "password", "username" FROM "Buyer";
DROP TABLE "Buyer";
ALTER TABLE "new_Buyer" RENAME TO "Buyer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
