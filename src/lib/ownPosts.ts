import { prisma } from '@/lib/prisma'; 

export async function getOwnPosts(userId: string) { 
  return await prisma.post.findMany({ 
    where: { 
      authorId: userId 
    }, 
    select: { 
      id: true, 
      titled: true, 
      published: true, 
      upDatedAt: true
    }, 
    orderBy: { 
      createdAt: "desc" 
    }, 
  })
}

export async function getOwnPost(userId: string, postId: string) {
    return await prisma.post.findFirst({
        where:{
            AND:[
                {authorId: userId},
                {id: postId}
            ]
        },
        select:{
            id: true, 
            titled: true, 
            content: true,
            topImage: true,
            author: true,
            published: true,
            createdAt: true,
            upDatedAt: true,
        }
        }
    )
}