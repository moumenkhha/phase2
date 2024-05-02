import prisma from '@/repository/prisma';


export async function get(username) {   // Done
    if (!username) {
        return await prisma.seller.findMany({
            include: {
                purchase: true,
                item: true
            }
        });
    }
    return await prisma.seller.findUnique({
        where: {
            username,
        }
    });
}

export async function add(name, password) { // Done
    return await prisma.seller.create({
        data: {
            name,
            password,
            username: Math.random().toString().substring(3, 15)
        }
    });
};

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

export async function update(username, password, name) {    // Done
        return await prisma.seller.upsert({
            where: {
                username
            },
            update: {
                name,
                password,
            },
            create: {
                username,
                password,
                name,
            },
        })
}