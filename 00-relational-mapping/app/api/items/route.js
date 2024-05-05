import * as items from "@/repository/items";

export async function GET(request) {    // Done
    try {
        const result = await items.get();
        return Response.json(result);
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}

export async function POST(request) {   // Done
    try {
        const props = await request.json();
        console.log(props);
        const item = await items.add(props);  
        return Response.json(item, { status: 201 });
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 });
    }
}
