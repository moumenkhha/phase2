-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 1000000,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Book" (
    "isbn" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "author" TEXT,
    "publisher" TEXT,
    "publish_year" INTEGER,
    "genre" TEXT,
    "price" INTEGER,
    "quantity" INTEGER
);
