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
    validUntil,
    tag,
    highlights
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
    experiences[] {
      title,
      description,
      image
    },
    heroImage,
    heroEyebrow,
    heroHeadline,
    heroSubtext,
    homepageAboutTitle,
    homepageAboutBody,
    homepageGoogleMapsEmbedUrl
  }
`

export const propertyBySlugQuery = `
  *[_type == "property" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    name,
    "slug": slug.current,
    propertyType,
    heroImage,
    tagline,
    description,
    highlights,
    amenities,
    aboutTitle,
    aboutBody,
    address,
    phone,
    whatsappNumber,
    email,
    googleMapsEmbedUrl
  }
`

export const allPropertySlugsQuery = `
  *[_type == "property" && !(_id in path("drafts.**"))]{ "slug": slug.current }
`

export const propertyNavQuery = `
  *[_type == "property" && !(_id in path("drafts.**"))] | order(_createdAt asc) {
    name,
    "slug": slug.current
  }
`

export const roomsQuery = `
  *[_type == "room" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    name,
    description,
    capacity,
    amenities,
    "images": images[]{asset, alt}
  }
`

export const hotelPropertyQuery = `
  *[_type == "property" && propertyType == "hotel" && !(_id in path("drafts.**"))][0] {
    _id,
    name,
    heroImage,
    tagline,
    description,
    amenities,
    aboutTitle,
    aboutBody,
    address,
    phone,
    whatsappNumber,
    googleMapsEmbedUrl
  }
`

export const galleriesQuery = `
  *[_type == "gallery" && !(_id in path("drafts.**"))] {
    _id,
    property-> {
      _id,
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
    category,
    readTime,
    seoDescription
  }
`

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    category,
    readTime,
    seoDescription,
    body[] {
      ...,
      _type == "image" => { ..., asset-> }
    }
  }
`

export const allBlogSlugsQuery = `
  *[_type == "blogPost" && !(_id in path("drafts.**"))]{ "slug": slug.current }
`
