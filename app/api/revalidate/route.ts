import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

function revalidateForType(type: string | undefined) {
  // shared layout (header nav, footer) is cached per-route, so every
  // event must revalidate it or pages drift out of sync on their own
  // independent ISR clocks
  revalidatePath('/', 'layout')

  switch (type) {
    case 'property':
      revalidatePath('/')                  // homepage property cards
      revalidatePath('/[slug]', 'page')    // all property pages
      revalidatePath('/gallery')           // gallery groups by property name
      break
    case 'room':
      revalidatePath('/[slug]', 'page')    // hotel page shows rooms
      break
    case 'offer':
      revalidatePath('/')
      revalidatePath('/offers')
      break
    case 'testimonial':
      revalidatePath('/')
      break
    case 'gallery':
      revalidatePath('/')                  // homepage gallery preview
      revalidatePath('/gallery')
      break
    case 'blogPost':
      revalidatePath('/blog')
      revalidatePath('/blog/[slug]', 'page')
      break
    case 'siteSettings':
      revalidatePath('/')                  // homepage hero, about, experiences, map
      break
    default:
      revalidatePath('/')
  }
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const body = await req.json()
  const type = body._type

  revalidateForType(type)

  return NextResponse.json({ revalidated: true, type })
}

// Hit once right after each deploy so the first real visitor never races
// against in-flight Sanity edits: without this, whatever data Sanity
// happens to return on that first request gets cached for the full
// revalidate window (1h), even if it's mid-publish and incomplete.
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  for (const type of ['property', 'room', 'offer', 'testimonial', 'gallery', 'blogPost', 'siteSettings']) {
    revalidateForType(type)
  }

  return NextResponse.json({ revalidated: true, type: 'all' })
}
