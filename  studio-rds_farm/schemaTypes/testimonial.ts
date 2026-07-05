import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Guest Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'property',
      title: 'Property',
      type: 'string',
      options: {
        list: [
          {title: "RD's Hotel", value: 'hotel'},
          {title: 'RDS Farm', value: 'farm'},
          {title: 'RDS Farm 2', value: 'farm2'},
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (out of 5)',
      type: 'number',
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({
      name: 'isActive',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'property'},
  },
})
