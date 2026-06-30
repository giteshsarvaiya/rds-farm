import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const body = await req.json()
  const type = body._type

  switch (type) {
    case 'property':
      revalidatePath('/', 'layout')
      revalidatePath('/hotel')
      revalidatePath('/rds-farm')
      revalidatePath('/rds-farm-2')
      break
    case 'offer':
      revalidatePath('/')
      revalidatePath('/offers')
      break
    case 'testimonial':
      revalidatePath('/')
      break
    case 'blogPost':
      revalidatePath('/blog')
      revalidatePath('/blog/[slug]', 'page')
      break
    case 'gallery':
      revalidatePath('/gallery')
      revalidatePath('/hotel/gallery')
      revalidatePath('/rds-farm/gallery')
      revalidatePath('/rds-farm-2/gallery')
      break
    case 'siteSettings':
      revalidatePath('/', 'layout')
      break
    default:
      revalidatePath('/')
  }

  return NextResponse.json({ revalidated: true, type })
}
