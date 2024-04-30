import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const seed = async () => {
    await prisma.buyer.deleteMany();
    await prisma.item.deleteMany();
    await prisma.seller.deleteMany();


    for (let i = 0; i < 50; i++) {

        const seller = await prisma.seller.create({
            data: {
                username: faker.internet.userName(),
                password: faker.internet.password(),
                name: faker.person.fullName(),
            }
        });

        const buyer = await prisma.buyer.create({
            data: {
                username: faker.internet.userName(),
                password: faker.internet.password(),
                name: faker.person.fullName(),
                location: faker.location.country(),
            }
        });

        const item = await prisma.item.create({
            data: {
                id: faker.string.nanoid(),
                name: faker.commerce.productName(),
                seller: seller.username,
                price: i * 10,
                quantity: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
            }
        });

        await prisma.purchase.create({
            data: {
                id: faker.string.nanoid(),
                itemId: item.id,
                seller: seller.username,
                buyer: buyer.username,
                year: Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000
            }
        });
    };
}

try {
    await seed();
    await prisma.$disconnect();
} catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}