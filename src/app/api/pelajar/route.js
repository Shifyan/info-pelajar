import { NextRequest, NextResponse } from 'next/server'
const data = [
  {
    id: 1,
    nama: 'Shifyan Almustafid',
    alamat: 'Badegan'
  },
  {
    id: 2,
    nama: 'Ahmad Syamsul',
    alamat: 'Sampung'
  },
  {
    id: 3,
    nama: 'Khudori Ahmad',
    alamat: 'Jenangan'
  },
  {
    id: 4,
    nama: 'Muhammad Andri',
    alamat: 'Sawoo'
  },
  {
    id: 5,
    nama: 'Basuki Prasetyo',
    alamat: 'Balong'
  }
]
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  console.log(id)
  if (id) {
    const searchId = data.find(item => item.id == id)
    if (searchId === undefined) {
      return NextResponse.json({
        status: 404,
        message: 'Data Not Found'
      })
    }
    return NextResponse.json({ status: 200, message: 'Succes', data: searchId })
  }
  return NextResponse.json({ status: 200, message: 'Succes', data: data })
}
