-- CreateTable
CREATE TABLE "Book" (
    "isbn" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "author" TEXT,
    "publisher" TEXT,
    "publish_year" INTEGER,
    "genre" TEXT,
    "price" INTEGER,
    "quantity" INTEGER
);
