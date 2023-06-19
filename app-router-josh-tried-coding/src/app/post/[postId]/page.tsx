import axios from "axios";
import { Metadata } from "next";

export async function generateStaticParams() {
  const post = ['post-1', 'post-2'];

  return post.map(p => {
    return {
      postId: p
    }
  })
}

// export const revalidate = 30

export async function generateMetadata({ params }): Promise<Metadata> {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
  return {
    title: `This is post ${data.title}`
    
  }
}

const Page = ({ params, searchParams }) => {
  console.log('postId: ', params.postId)
  return (
    <div>Page</div>
  )
}


export default Page
