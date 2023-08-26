import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
 
export async function GET(req: NextRequest) {
    
    const a = await getToken({req: req})        
  return NextResponse.json({ a })
}