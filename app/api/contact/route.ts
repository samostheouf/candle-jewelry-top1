import { NextRequest, NextResponse } from 'next/server'
import { appendFileSync, existsSync, mkdirSync } from 'fs'

// ── Validation ────────────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
  return str.trim().slice(0, 1000)
}

// ── POST /api/contact ─────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>

    const name = sanitize((body.name as string) || '')
    const email = sanitize((body.email as string) || '')
    const message = sanitize((body.message as string) || '')

    if (!name) {
      return NextResponse.json({ error: 'Le nom est requis.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
    }
    if (!message) {
      return NextResponse.json({ error: 'Le message est requis.' }, { status: 400 })
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Le message doit contenir au moins 10 caractères.' },
        { status: 400 }
      )
    }

    // Log local dans un fichier JSONL (dossier racine du projet par défaut)
    const logDir = process.env.CONTACT_LOG_DIR || '/data/data/com.termux/files/home/candle-jewelry-top1'
    const logFile = `${logDir}/contact-log.jsonl`

    const entry = JSON.stringify({
      timestamp: new Date().toISOString(),
      name,
      email,
      message,
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
    })

    try {
      if (!existsSync(logDir)) mkdirSync(logDir, { recursive: true })
      appendFileSync(logFile, entry + '\n', 'utf-8')
    } catch {
      console.warn('contact-log: écriture échouée', logFile)
    }

    return NextResponse.json({ success: true })
  } catch (e: any) {
    console.error('contact API error', e)
    return NextResponse.json(
      { error: e.message || 'Erreur interne.' },
      { status: 500 }
    )
  }
}

// ── GET — endpoint de découverte ─────────────────────────────────────────────

export async function GET() {
  return NextResponse.json({
    success: true,
    endpoint: 'POST /api/contact',
    body: { name: 'string', email: 'string (email valide)', message: 'string (>= 10 chars)' },
  })
}
