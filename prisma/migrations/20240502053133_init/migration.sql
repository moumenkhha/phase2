/*
  Warnings:

  - Made the column `name` on table `Buyer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Buyer" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 1000000,
    "location" TEXT
);
INSERT INTO "new_Buyer" ("balance", "location", "name", "password", "username") SELECT "balance", "location", "name", "password", "username" FROM "Buyer";
DROP TABLE "Buyer";
ALTER TABLE "new_Buyer" RENAME TO "Buyer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
