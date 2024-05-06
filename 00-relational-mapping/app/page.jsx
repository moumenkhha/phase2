import * as stats from "@/repository/stats";
export default async function Home() {

  const topC = await stats.topCountriesBuying();
  const topI = await stats.topItems();
  const itemsNeverPurchased = await stats.ItemsNeverPurchased();
  const sellersNeverSell = await stats.sellersNaverSell();

  return (
    <main className="flex flex-wrap gap-5">
      <div>
        <table className="border">
          <caption className="text-lg font-bold">Top Countries Buying</caption>
          <thead>
            <tr>
              <th>Country Name</th>
              <th className="px-10">Total</th>
            </tr>
          </thead>
          <tbody>
            {topC.map(country => (
              <tr className="border" key={country.location}>
                <td >{country.location}</td>
                <td className="px-20">{country._count.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <table className="border">
          <caption className="text-lg font-bold">Top Items Bought</caption>
          <thead>
            <tr>
              <th>Item Id</th>
              <th className="px-10">Total </th>
            </tr>
          </thead>
          <tbody>
            {topI.map(item => (

              <tr className="border" key={item.itemId}>
                <td>{item.itemId}</td>
                <td className="px-20">{item._count.itemId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <table className="border">
          <caption className="text-lg font-bold">Items Never Purchased</caption>
          <thead>
            <tr>
              <th>Item Id</th>
              <th className="">Item Name</th>
              <th className="">Item Seller</th>
              <th className="">Item Price</th>
              <th className="">Item Quantity</th>
            </tr>
          </thead>
          <tbody>
            {itemsNeverPurchased.map(item => (

              <tr className="border" key={item.id}>
                <td>{item.id}</td>
                <td className="px-20">{item.name}</td>
                <td className="">{item.seller}</td>
                <td className="px-20">{item.price}</td>
                <td className="">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <table className="border">
          <caption className="text-lg font-bold">Sellers Never Sell</caption>
          <thead>
            <tr>
              <th>Seller Name</th>
            </tr>
          </thead>
          <tbody>
            {sellersNeverSell.map(seller => (
              <tr className="border" key={seller.username}>
                <td className="px-20">{seller.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}