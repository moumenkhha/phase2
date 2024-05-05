import prisma from '@/repository/prisma';


export async function get(username) {   // Done
    if (!username) {
        return await prisma.seller.findMany({
            include: {
                item: true
            }
        });
    }
    return await prisma.seller.findUnique({
        where: {
            username,
        },
        include: {
            item: true
        }
    });
}

export async function add(props) { // Done
    return await prisma.seller.create({
        data: props
    });
}

export async function remove(username) {    // Done
    if (await prisma.seller.findUnique({
        where: {
            username,
        }
    }))
        return await prisma.seller.delete({
            where: {
                username,
            }
        });
}

export async function update(username, props) {
    return await prisma.seller.update({
        where: {
            username
        },
        data: props
    })
}