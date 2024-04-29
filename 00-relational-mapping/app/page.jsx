import * as users from "@/repository/users";
export default async function Home() {
  const result = await users.get();
  return result.map(user =>
    <div key={user.username}>
      <h1>Name: {user.name} {user.surname}</h1>
      <p>Balance: {user.balance}</p>
    </div>
  );
}