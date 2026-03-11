import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://usmanali.engineer';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/test/', '/api/', '/studio/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
