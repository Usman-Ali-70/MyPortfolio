import { client } from '@/sanity/lib/client'
import { servicesQuery } from '@/sanity/lib/queries'
import ServicesClient from './ServicesClient'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function ServicesPage() {
  const services = await client.fetch(servicesQuery)

  return <ServicesClient services={services} />
}