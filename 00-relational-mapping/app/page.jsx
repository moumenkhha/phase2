import * as buyers from "@/repository/buyer";
import * as items from "@/repository/item";
import * as purchases from "@/repository/puchase";
export default async function Home() {

  const result = await purchases.get();
  await items.add("R271O", "Miss_Mindy_Bosco", "Mrs._Ida_Rogahn");

  // return JSON.stringify(result);

  return result.map(purchase =>
    <div key={purchase.id} className="flex justify-between">
      <p>Purchase Id: {purchase.purchaseId}</p>
      <p>Item Id: {purchase.itemId}</p>
      <p>Purchase Seller: {purchase.seller}</p>
      <p>Purchase Buyer: {purchase.buyer}</p>
    </div>);

}