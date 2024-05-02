export async function GET(request, { params }) {
    console.log(params.all[0]);
    try {
        const result = await buyers.get();
        return Response.json(result);
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }


    return Response.json({ message: "NOT FOUND" }, { status: 404 })
}