import * as buyers from "@/repository/buyers";
import * as items from "@/repository/items";
import * as purchases from "@/repository/purchases";
import * as sellers from "@/repository/sellers";
export default async function Home() {

  const result = await buyers.get();
  // return JSON.stringify(result);

  return result.map(x =>
    <div key={x.username} className="flex justify-between">
      <p>username: {x.username}</p>
      <p>password: {x.password}</p>
      <p>name: {x.name}</p>
      <p>balance: {x.balance}</p>
      <p>location: {x.location}</p>
    </div>);

}