import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'

const data = fs.readFileSync('./src/app/api/pelajar/data-pelajar.json', 'utf-8')
const dataParsed = JSON.parse(data)
export async function GET() {
  return NextResponse.json({ status: 200, message: 'Succes', data: dataParsed })
}
