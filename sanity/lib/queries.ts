import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    title,
    description,
    "image": image.asset->url,
    link,
    techStack,
    order
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial" && isApproved == true] {
    name,
    position,
    company,
    message,
    "image": image.asset->url
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    "profilePic": profilePic.asset->url,
    socialLinks[] {
      platform,
      url,
      icon
    }
  }
`

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    title,
    description,
    icon,
    order
  }
`
