import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const seed = async () => {
    await prisma.buyer.deleteMany();
    await prisma.item.deleteMany();
    await prisma.seller.deleteMany();
    await prisma.purchase.deleteMany();


    for (let i = 0; i < 10; i++) {
        const sellerName = faker.person.fullName();
        const buyerName = faker.person.fullName();

        const seller = await prisma.seller.create({
            data: {
                username: sellerName.replace(/ /g, '_'),
                password: faker.internet.password(),
                name: sellerName

            }
        });

        const buyer = await prisma.buyer.create({
            data: {
                username: buyerName.replace(/ /g, '_'),
                password: faker.internet.password(),
                name: buyerName,
                location: faker.location.country(),
            }
        });

        const item = await prisma.item.create({
            data: {
                id: faker.string.nanoid().substring(0, 5),
                name: faker.commerce.productName(),
                seller: seller.username,
                price: i * 10,
                quantity: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
            }
        });

        for (let i = 0; i < 1; i++) {
            const count = await prisma.item.count();    // itemCount = buyers = seller
            const randomIndex = Math.floor(Math.random() * count); 

            const randomItem = await prisma.item.findMany({
                skip: randomIndex, // Skip the generated random index
                take: 1, // Take only one user
            });

            const randomSeller = await prisma.seller.findMany({
                skip: randomIndex,
                take: 1,
            });

            const randomBuyer = await prisma.buyer.findMany({
                skip: randomIndex,
                take: 1,
            });

            await prisma.purchase.create({
                data: {
                    purchaseId: faker.string.nanoid().substring(0, 5),
                    itemId: randomItem[0].id,

                    seller: randomSeller[0].username,
                    buyer: randomBuyer[0].username,
                    year: Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000
                }
            });
        }
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