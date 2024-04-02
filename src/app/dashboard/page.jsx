import { Card } from 'flowbite-react'
async function fetchData() {
  const res = await fetch('http://localhost:3000/api/pelajar', {
    cache: 'no-store'
  })
  return res.json()
}

export default async function Dashboard() {
  const data = await fetchData()

  return (
    <>
      <div className='main p-3 '>
        <div className='grid-cols-6'>
          <Card href='#'>
            <h1>{data.data.length}</h1>
          </Card>
        </div>
      </div>
    </>
  )
}
