import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'candle-jewelry-top1',
    timestamp: new Date().toISOString(),
    health: 'PASS',
  }, { status: 200 })
}