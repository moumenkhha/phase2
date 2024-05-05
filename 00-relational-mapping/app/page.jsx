import * as buyers from "@/repository/buyers";
import * as items from "@/repository/items";
import * as purchases from "@/repository/purchases";
import * as sellers from "@/repository/sellers";
export default async function Home() {

  const result = await items.get();
  // return JSON.stringify(result);

  return result.map(x =>
    <div
      // Buyers
      // key={x.username} className="flex justify-between">
      //   <p>username: {x.username}</p>
      //   <p>password: {x.password}</p>
      //   <p>name: {x.name}</p>
      //   <p>balance: {x.balance}</p>
      //   <p>location: {x.location}</p>

      // Items
      key={x.id} className="flex justify-between">
      <p>id: {x.id}</p>
      <p>name: {x.name}</p>
      <p>seller: {x.seller}</p>
      <p>price: {x.price}</p>
      <p>quantity: {x.quantity}</p>
    </div>);

}