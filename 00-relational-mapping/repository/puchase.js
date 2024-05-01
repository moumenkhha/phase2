import prisma from '@/repository/prisma';

export async function get(purchaseId) { // Done
    if (!purchaseId) {
        return await prisma.purchase.findMany({
        });
    }
    return await prisma.purchase.findUnique({
        where: {
            purchaseId
        }
    });
}

export async function add(itemId, seller, buyer) {
    return await prisma.purchase.create({
        data: {
            itemId,
            seller,
            buyer
        }
    });
}

export async function remove(purchaseId) {
    if (await prisma.purchase.findUnique({
        where: {
            purchaseId
        }
    }))
        return await prisma.purchase.delete({
            where: {
                purchaseId
            }
        });
}

export async function update(username) { }