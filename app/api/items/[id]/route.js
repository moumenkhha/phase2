import * as items from "@/repository/items";

export async function GET(request, { params }) {    // Done
    const { id } = params; // It is = const id = params.id;
    try {
        const result = await items.get(id);
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
    const { id } = params; // It is = const id = params.id;
    try {
        const result = await items.remove(id);
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
    // params here = { id: 'specificId' }
    const { id } = params; // It is = const username = params.username;
    try {
        const props = await request.json(); // Props here = PUT request's Body
        const result = await items.update(id, props);
        if (result) {
            return Response.json(result);
        } else {
            return Response.json({ message: "Not found" }, { status: 404 })
        }
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}