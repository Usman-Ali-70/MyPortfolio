import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://usmanali.engineer'; // TODO: Replace with your actual domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/test/', '/api/'], // Example of disallowed routes
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
