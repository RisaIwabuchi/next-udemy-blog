export type Post = {
    id: string
    titled:string
    content: string
    topImage: string | null
    createdAt: Date
    author:{
        name:string
    }
}

export type PostCardProps = {post: Post}