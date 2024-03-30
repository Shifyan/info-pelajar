async function fetchData() {
  const res = await fetch('http://localhost:3000/api/pelajar')
  return res.json()
}

export default async function LihatData() {
  const data = await fetchData()
  return (
    <>
      <ul>{data.data[0]}</ul>
    </>
  )
}
