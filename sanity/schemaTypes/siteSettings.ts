import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'profilePic',
            title: 'Profile Picture',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', title: 'Platform Name', type: 'string' },
                        { name: 'url', title: 'URL', type: 'url' },
                        { name: 'icon', title: 'Icon Name (e.g. RiInstagramLine)', type: 'string' },
                    ],
                },
            ],
        }),
    ],
})
