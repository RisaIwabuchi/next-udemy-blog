'use server'

import { redirect } from "next/navigation"
import { prisma } from '@/lib/prisma'

type ActionState = {
    success: boolean;  
    errors: Record<string, string[]>
}

export async function deletePost(postID: string) 
: Promise<ActionState> {
    await prisma.post.delete({ 
        where: { id: postID } 
    })
    redirect('/dashboard')
}