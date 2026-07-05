import {defineField, defineType} from 'sanity'

export const offer = defineType({
  name: 'offer',
  title: 'Offer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Offer Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Offer Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'property',
      title: 'Applicable Property',
      type: 'string',
      options: {
        list: [
          {title: 'Hotel', value: 'hotel'},
          {title: 'Farm / Resort', value: 'farm'},
          {title: 'All Properties', value: 'all'},
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'e.g. "Chat on WhatsApp", "Get in Touch"',
      initialValue: 'Chat on WhatsApp',
    }),
    defineField({
      name: 'validUntil',
      title: 'Valid Until',
      type: 'date',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Short label shown on the card (e.g. "Most Popular", "Seasonal")',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Key inclusions shown as bullet points on the card',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Only active offers are shown on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'property', media: 'image'},
  },
})
