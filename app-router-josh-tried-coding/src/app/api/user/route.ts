import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  console.log('GET')
  const { searchParams } = new URL(req.url);
  const test = searchParams.get('test')
  
  // resizeBy.status(200).json({ whatever})
  console.log('test', test)
  return new Response(JSON.stringify({ name: 'John'}), {
    status: 401
  })
}
export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('POST', body)

  return new Response(JSON.stringify({ name: 'John'}))
}
