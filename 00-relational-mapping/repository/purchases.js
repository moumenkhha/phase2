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

export async function add(itemId, seller, buyer) {  // Done
    try {
        return await prisma.purchase.create({
            data: {
                itemId,
                seller,
                buyer
            }
        });
    } catch (error) {
    }
}

export async function remove(purchaseId) {  // Done
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