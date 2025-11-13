import prisma from "@/lib/db";
import  {cn} from "@/lib/utils"
export default async function Home() {
  const user = await prisma.user.findMany();
  return (
    <div className="flex text-red-300 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className={cn("text-2xl")}>
        {JSON.stringify(user)}
      </div>
     <p>jnjdj</p>
    </div>
  );
}
