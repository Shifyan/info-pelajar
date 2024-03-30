async function fetchData() {
  const res = await fetch('http://localhost:3000/api/pelajar')
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
        {data.data.map(e => {
          return <li key={e.id}>{e.first_name}</li>
        })}
      </ul>
    </>
  )
}
