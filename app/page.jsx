import * as stats from "@/repository/stats";
export default async function Home() {

  const topC = await stats.topCountriesBuying();
  const topI = await stats.topItems();
  const itemsNeverPurchased = await stats.ItemsNeverPurchased();
  const sellersNeverSell = await stats.sellersNaverSell();
  const topSellers_13_23 = await stats.topSellers_13_23();
  const bestBuyer_24 = await stats.bestBuyer_24();

  return (
    <main className="flex flex-wrap gap-10 justify-around">
      <div>
        <table className="border">
          <caption className="text-lg font-bold">Top Countries in Buying</caption>
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
          <caption className="text-lg font-bold">Top Sellers Between 2013-2023</caption>
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {topSellers_13_23.map(seller => (
              <tr className="border" key={seller.username}>
                <td className="">{seller.seller}</td>
                <td className="px-20">{seller._count.seller}</td>
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
        <h1>Best Buyer in 2024: </h1>
        <h1 className="text-2xl bg-red-600">{bestBuyer_24.name}</h1>
      </div>

      <div>
        <table className="border">
          <caption className="text-lg font-bold">Items Never Purchased</caption>
          <thead>
            <tr>
              <th>Item Id</th>
              <th className="">Item Seller</th>
              <th className="">Item Price</th>
              <th className="">Item Quantity</th>
            </tr>
          </thead>
          <tbody>
            {itemsNeverPurchased.map(item => (

              <tr className="border" key={item.id}>
                <td className="">{item.id}</td>
                <td className="px-20">{item.seller}</td>
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
                <td className="px-10">{seller.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </main>
  )
}