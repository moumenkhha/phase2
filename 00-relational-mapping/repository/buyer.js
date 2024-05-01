import prisma from '@/repository/prisma';

export async function get(id) {
    if (!id) {
        return await prisma.buyer.findMany({
            include: {
                purchases: true
            }
        });
    }
    return await prisma.buyer.findUnique({
        where: {
            id,
        }
        // include : {purchases: true}  // Return
    });
}

export async function add() { }

export async function remove(id) {
    const result = await prisma.buyer.delete({
        where: {
            id,
        }
    });
    await disconn
}

export async function update(id) { }