async function fetchData() {
  const res = await fetch('http://localhost:3000/api/pelajar', {
    cache: 'no-store'
  })
  return res.json()
}

export default async function LihatData() {
  const data = await fetchData()
  data.data.map(e => {
    // console.log(e.first_name)
  })
  return (
    <div>
      <ul>
        <li className='my-2'>
          <div className='p-2 font-semibold border-b text-lg grid grid-cols-12 gap-2 mb-5'>
            <h1 className='col-span-1'>No</h1>
            <h1 className='col-span-3'>Nama</h1>
            <h1 className='col-span-4'>Email</h1>
            <h1 className='col-span-1'>Gender</h1>
            <h1 className='col-span-3'>Kota</h1>
          </div>
        </li>
        {data.data.map(e => {
          return (
            <li key={e.id} className='my-2'>
              <div className='p-2 border rounded-lg grid grid-cols-12 gap-2'>
                <h1 className='col-span-1'>{e.id}.</h1>
                <h1 className='col-span-3'>
                  {e.first_name} {e.last_name}
                </h1>
                <h1 className='col-span-4'>{e.email}</h1>
                <h1 className='col-span-1'>{e.gender}</h1>
                <h1 className='col-span-3'>{e.city}</h1>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
