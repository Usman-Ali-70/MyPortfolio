import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name (e.g. RxDesktop)',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
        }),
    ],
})
