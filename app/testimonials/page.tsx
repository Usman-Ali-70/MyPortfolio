import { client } from '@/sanity/lib/client'
import { testimonialsQuery } from '@/sanity/lib/queries'
import TestimonialsClient from './TestimonialsClient'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function TestimonialsPage() {
  const testimonials = await client.fetch(testimonialsQuery)
  
  return <TestimonialsClient testimonials={testimonials} />
}