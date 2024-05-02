import prisma from '@/repository/prisma';

export async function get(username) {   // Done
    if (!username) {
        return await prisma.buyer.findMany({
            include: {
                purchase: true
            }
        });
    }
    return await prisma.buyer.findUnique({
        where: {
            username,
        }
    });
}

export async function add(name, password, location) { // Done
    return await prisma.buyer.create({
        data: {
            name,
            password,
            location
        }
    });
}

export async function remove(username) {    // Done
    if (await prisma.buyer.findUnique({
        where: {
            username,
        }
    }))
        return await prisma.buyer.delete({
            where: {
                username,
            }
        });
}

export async function update(username, props) {    // Done
    return await prisma.buyer.update({
        where: {
            username
        },
        data: props
    })
}
