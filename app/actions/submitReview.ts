'use server'

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN, // Make sure to add this to .env
})

export async function submitReview(formData: FormData) {
    const name = formData.get('name') as string
    const position = formData.get('position') as string
    const company = formData.get('company') as string
    const message = formData.get('message') as string
    const imageFile = formData.get('image') as File | null

    if (!name || !message) {
        return { error: 'Name and message are required.' }
    }

    try {
        let imageAsset = null

        if (imageFile && imageFile.size > 0) {
            // Upload image to Sanity
            const buffer = Buffer.from(await imageFile.arrayBuffer())
            imageAsset = await client.assets.upload('image', buffer, {
                filename: imageFile.name,
                contentType: imageFile.type,
            })
        }

        await client.create({
            _type: 'testimonial',
            name,
            position,
            company,
            message,
            isApproved: false, // Reviews need manual approval in Sanity Studio
            ...(imageAsset && {
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id,
                    },
                },
            }),
        })
        return { success: 'Review submitted successfully! It will appear once approved.' }
    } catch (error) {
        console.error('Error submitting review:', error)
        return { error: 'Failed to submit review. Please try again later.' }
    }
}
