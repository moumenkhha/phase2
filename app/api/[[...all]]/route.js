export async function GET(request) {
    return Response.json({ message: "NOT FOUND" }, { status: 404 })
}