import prisma from '@/repository/prisma';

export async function get(id) { // Done
    if (!id) {
        return await prisma.item.findMany({
            include: {
                purchase: true
            }
        });
    }
    return await prisma.item.findUnique({
        where: {
            id
        }
    });
}

export async function add(props) { 
    return await prisma.item.create({
        data: props
    });
}

export async function remove(id) {
    if (await prisma.item.findUnique({
        where: {
            id,
        }
    }))
        return await prisma.item.delete({
            where: {
                id,
            }
        });
}

export async function update(id, props) {
    return await prisma.item.update({
        where: {
            id
        },
        data: props
    })
}