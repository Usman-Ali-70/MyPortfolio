import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Client Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Client Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'isApproved',
            title: 'Approved',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
