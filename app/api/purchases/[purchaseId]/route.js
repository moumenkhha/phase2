import * as purchases from "@/repository/purchases";

export async function GET(request, { params }) {    // Done
    const { purchaseId } = params; // It is = const purchaseId = params.purchaseId;
    try {
        const result = await purchases.get(purchaseId);
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
    const { purchaseId } = params; // It is = const purchaseId = params.purchaseId;
    try {
        const result = await purchases.remove(purchaseId);
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
    // params here = { purchaseId: 'specificpurchaseId' }
    const { purchaseId } = params; // It is = const purchaseId = params.purchaseId;
    try {
        const props = await request.json(); // Props here = PUT request's Body
        const result = await purchases.update(purchaseId, props);
        if (result) {
            return Response.json(result);
        } else {
            return Response.json({ message: "Not found" }, { status: 404 })
        }
    } catch (error) {
        return Response.json({ message: "Internal error" }, { status: 500 })
    }
}