import * as items from "@/repository/item";
export default async function Home() {
  const result = await items.get();


  return;
}