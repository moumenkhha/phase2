import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function Home() {
  const users = await prisma.user.findMany();
  return <main>
    {users.map(user => (
      <div key={user.username} className="flex gap-x-3">
        <span className="font-medium">{user.name}</span>
        <span className="font-mono">{user.surname}</span>
      </div>
    ))}
  </main>

}