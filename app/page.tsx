import { Button } from '@/components/ui/button'
import { requireAuth } from '@/lib/auth-utils'
import { caller } from '@/trpc/server'
import React from 'react'

const Page = async () => {
  await requireAuth()

  const data = await caller.getUsers();
  return (
    <div>
      {JSON.stringify(data)}
  
    </div>
  )
    
}

export default Page