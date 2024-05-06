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