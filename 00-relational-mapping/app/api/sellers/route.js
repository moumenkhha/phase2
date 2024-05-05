import * as sellers from "@/repository/sellers";

export async function GET(request) {    // Done
    try {
        const result = await sellers.get();
        return Response.json(result);
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}

export async function POST(request) {   // Done
    try {
        const props = await request.json();
        console.log(props);
        const seller = await sellers.add(props);
        return Response.json(seller, { status: 201});
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 });
    }
}

