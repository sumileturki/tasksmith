"use client";
import  {cn} from "@/lib/utils"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
const Page =()=> {
  const trpc = useTRPC();
  const {data: user} = useQuery(trpc.getUsers.queryOptions())
  return (
    <div className="flex text-red-300 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className={cn("text-2xl")}>
        {JSON.stringify(user)}
      </div>
     <p>jnjdj</p>
    </div>
  );
}

export default Page;  
