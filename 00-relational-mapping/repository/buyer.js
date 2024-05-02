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

export async function add(name, password) { // Done
    return await prisma.buyer.create({
        data: {
            name,
            password,
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

export async function update(username, password, name, balance,  location) {    // Done
    return await prisma.buyer.upsert({
        where: {
            username
        },
        update: {
            password,
            name,
            balance,
            location
        },
        create: {
            username,
            password,
            name,
            balance,
            location
        },
    })
}