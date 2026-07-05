import {defineField, defineType} from 'sanity'

export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Room Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity (guests)',
      type: 'number',
    }),
    defineField({
      name: 'amenities',
      title: 'Room Amenities',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. AC, TV, Hot Water, Balcony',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', media: 'images.0'},
  },
})
