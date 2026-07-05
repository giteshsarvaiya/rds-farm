import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Global Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Global WhatsApp Number',
      type: 'string',
      description: 'Include country code, no spaces (e.g. 919876543210)',
    }),
    defineField({
      name: 'email',
      title: 'Global Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Global Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences Section',
      type: 'array',
      description: 'Cards shown in the "Crafted for Every Occasion" section on the homepage',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 2},
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
          ],
          preview: {select: {title: 'title', media: 'image'}},
        },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Homepage Hero Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Full-screen background image on the homepage',
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Text',
      type: 'string',
      description: 'Small label above the headline (e.g. "RD Developers · Ahmedabad")',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main heading on the homepage hero',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'string',
      description: 'Tagline below the headline',
    }),
    defineField({
      name: 'homepageAboutTitle',
      title: 'Homepage About Title',
      type: 'string',
    }),
    defineField({
      name: 'homepageAboutBody',
      title: 'Homepage About Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'homepageGoogleMapsEmbedUrl',
      title: 'Homepage Google Maps Embed URL',
      type: 'url',
      description: 'The src URL from the Google Maps embed iframe',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
