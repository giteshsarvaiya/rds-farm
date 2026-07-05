import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'property',
      title: 'Property',
      type: 'reference',
      to: [{type: 'property'}],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'property.name', media: 'images.0'},
    prepare({title, media}) {
      return {title: `${title} Gallery`, media}
    },
  },
})
