// Node Imports
import path from 'path'
import { promises as fs } from 'fs'

// Next Imports
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const filePath = request.nextUrl.searchParams.get('path')

  if (!filePath) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 })
  }

  const fullPath = path.join(process.cwd(), filePath)

  try {
    const fileContent = await fs.readFile(fullPath, 'utf-8')

    return NextResponse.json({ content: fileContent })
  } catch (error: any) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}
