import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import testimonial from './testimonial'
import siteSettings from './siteSettings'
import service from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, testimonial, siteSettings, service],
}
