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
export async function GET(NextRequest) {
  console.log(NextRequest)
  return NextResponse.json({ status: 200, message: 'Succes', data: data })
}
