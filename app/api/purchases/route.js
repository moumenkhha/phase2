import * as purchases from "@/repository/purchases";

export async function GET(request) {
    try {
        const result = await purchases.get();
        return Response.json(result);
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}

export async function POST(request) {   // Done
    try {
        const props = await request.json();
        const purchase = await purchases.add(props);
        return Response.json(purchase, { status: 201});
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 });
    }
}

