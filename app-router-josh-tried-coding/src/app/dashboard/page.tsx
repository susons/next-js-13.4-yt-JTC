import axios from "axios";

// export const dynamic = 'force-dynamic' // getServveSideProps

export const revalidate = '1000' // revalidate

export const  metadata = {
  title: 'test',
  description: 'test 123'
}

const Page = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //   // cache: 'no-store'
  //   next: {
  //     revalidate: 10
  //   }
  // });

  // const data = res.json();


  return (
    <div>Page {JSON.stringify(data)}</div>
  )
}
export default Page
