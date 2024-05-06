import prisma from "@/repository/prisma";

export async function topCountriesBuying() {
    return await prisma.buyer.groupBy({
        by: ['location'],
        _count: {
            location: true,
        },
        orderBy: {
            _count: {
                location: 'desc'
            }
        },
        take: 5,
    })
}

export async function topItems() {
    return await prisma.purchase.groupBy({
        by: ['itemId'],
        _count: {
            itemId: true,
        },
        orderBy: {
            _count: {
                itemId: 'desc'
            }
        },
        take: 5,
    })
}
export async function topSellers_13_23() {
    return await prisma.purchase.groupBy({
        by: ['seller'],
        _count: {
            seller: true,
        },
        where: {
            year: {
                gte: 2013,
                lte: 2023,
            }
        },
        orderBy: {
            _count: {
                seller: 'desc'
            }
        },
        take: 5,
    })
}

export async function ItemsNeverPurchased() {
    return await prisma.item.findMany({
        where: {
            purchase: {
                none: {}
            }
        }
    });
}

export async function sellersNaverSell() {
    return await prisma.seller.findMany({
        where: {
            purchase: {
                none: {}
            }
        },
        orderBy: {
            name: 'asc'
        }
    })
}

export async function bestBuyer_24() {
    const buyers = await prisma.$queryRaw`
    SELECT *
    FROM Buyer
    ORDER BY(
        SELECT COUNT(*)
        FROM Purchase
        WHERE Buyer.username = Purchase.buyer
    ) DESC;
    `;
    return buyers[0];
}