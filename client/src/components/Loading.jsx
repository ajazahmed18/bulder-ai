import React from 'react'
import { Loader2Icon } from 'lucide-react'

function Loading() {
  return (
    <div className='h-screen flex items-center justify-center gap-4 bg-white'>
      <Loader2Icon size={26} className='animate-spin text-zinc-950' />
      <p className='text-zinc-950'>Loading...</p>
    </div>
  )
}

export default Loading