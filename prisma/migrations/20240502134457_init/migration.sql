-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Buyer" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL DEFAULT 'password',
    "name" TEXT NOT NULL DEFAULT 'AbdAllah',
    "balance" INTEGER NOT NULL DEFAULT 1000000,
    "location" TEXT NOT NULL DEFAULT 'Doha'
);
INSERT INTO "new_Buyer" ("balance", "location", "name", "password", "username") SELECT "balance", "location", coalesce("name", 'AbdAllah') AS "name", "password", "username" FROM "Buyer";
DROP TABLE "Buyer";
ALTER TABLE "new_Buyer" RENAME TO "Buyer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
