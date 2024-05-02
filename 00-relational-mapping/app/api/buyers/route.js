import * as buyers from "@/repository/buyers";

export async function GET(request) {
    try {
        const result = await buyers.get();
        return Response.json(result);
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}

export async function POST(request) {
    try {
        const props = await request.json();
        console.log(props);
        const buyer = await buyers.add(...props);   // Post body is an array ["Name", "PassWord", "Location"]
        return Response.json(buyer, { status: 201});
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 });
    }
}

