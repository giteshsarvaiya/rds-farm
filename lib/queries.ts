export const propertiesQuery = `
  *[_type == "property" && !(_id in path("drafts.**"))] | order(_createdAt asc) {
    _id,
    name,
    "slug": slug.current,
    propertyType,
    heroImage,
    tagline,
    description,
    highlights,
    amenities,
    address,
    phone,
    whatsappNumber,
    email,
    googleMapsEmbedUrl
  }
`

export const activeOffersQuery = `
  *[_type == "offer" && isActive == true && !(_id in path("drafts.**"))] | order(_createdAt asc) {
    _id,
    title,
    description,
    image,
    property,
    ctaText,
    validUntil
  }
`

export const activeTestimonialsQuery = `
  *[_type == "testimonial" && isActive == true && !(_id in path("drafts.**"))] {
    _id,
    name,
    property,
    quote,
    rating
  }
`

export const siteSettingsQuery = `
  *[_type == "siteSettings" && !(_id in path("drafts.**"))][0] {
    phone,
    whatsappNumber,
    email,
    address,
    instagramUrl,
    facebookUrl,
    homepageAboutTitle,
    homepageAboutBody,
    homepageGoogleMapsEmbedUrl
  }
`

export const galleriesQuery = `
  *[_type == "gallery" && !(_id in path("drafts.**"))] {
    _id,
    property-> {
      name,
      "slug": slug.current,
      propertyType
    },
    images[] {
      asset,
      caption,
      alt
    }
  }
`

export const blogPostsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    seoDescription
  }
`
