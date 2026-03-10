import { client } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/queries'
import WorkClient from './WorkClient'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function WorkPage() {
  const projects = await client.fetch(projectsQuery)

  return <WorkClient projects={projects} />
}