import * as users from "@/repository/users";
export default async function Home() {
  const result = await users.get();
  return result.map(user =>
    <div className="flex gap-x-2" key={user.username}>
      <h1>Name: {user.name} {user.surname}</h1>
      {/* <p>Balance: {user.balance}</p> */}
      <button className="text-red-500" onClick={(e) => console.log("h")}>Delete</button>
    </div>
  );
}