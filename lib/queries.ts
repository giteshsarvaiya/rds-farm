export const propertiesQuery = `
  *[_type == "property"] | order(_createdAt asc) {
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
  *[_type == "offer" && isActive == true] | order(_createdAt asc) {
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
  *[_type == "testimonial" && isActive == true] {
    _id,
    name,
    property,
    quote,
    rating
  }
`

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
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

export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    seoDescription
  }
`
