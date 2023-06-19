// "use client"
import axios from 'axios'
import AuthRequiredError from '../../utils/index'

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const Dashboard = async () => {

  await wait(3000)
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  console.log('hello')

  // throw new AuthRequiredError('test')
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
export default Dashboard
