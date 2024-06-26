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

export async function add(props) { // Done
    return await prisma.purchase.create({
        data: props
    });
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

export async function update(purchaseId, props) {
    return await prisma.purchase.update({
        where: {
            purchaseId
        },
        data: props
    })
}