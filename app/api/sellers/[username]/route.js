import * as sellers from "@/repository/sellers";

export async function GET(request, { params }) {    // Done
    const { username } = params; // It is = const username = params.username;
    try {
        const result = await sellers.get(username);
        if (result) {
            return Response.json(result);
        } else {
            return Response.json({ message: "Not found" }, { status: 404 })
        }
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}

export async function DELETE(request, { params }) { // Done
    const { username } = params; // It is = const username = params.username;
    try {
        const result = await sellers.remove(username);
        if (result) {
            return Response.json(result);
        } else {
            return Response.json({ message: "Not found" }, { status: 404 })
        }
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}

export async function PUT(request, { params }) {    // Done
    // params here = { username: 'specificUserName' }
    const { username } = params; // It is = const username = params.username;
    try {
        const props = await request.json(); // Props here = PUT request's Body
        const result = await sellers.update(username, props);
        if (result) {
            return Response.json(result);
        } else {
            return Response.json({ message: "Not found" }, { status: 404 })
        }
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}