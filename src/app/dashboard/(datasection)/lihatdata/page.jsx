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
    <>
      <ul>
        <li>{data.data[0].first_name}</li>
        {data.data.map(e => {
          return (
            <li key={e.id}>
              <div className='p-2 border rounded-lg grid grid-cols-5 gap-5'>
                <h1>No. {e.id}</h1>
                <h1>
                  Nama: {e.first_name} {e.last_name}
                </h1>
                <h1>{e.email}</h1>
                <h1>{e.gender}</h1>
                <h1>{e.city}</h1>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
