import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

// Native .env parsing for modern Node or manual fallback
if (process.loadEnvFile) {
    try {
        process.loadEnvFile('.env.local')
    } catch (e) {
        console.warn('.env.local not found, using process.env')
    }
} else {
    // Manual fallback for older Node 20 versions
    const envPath = path.resolve(process.cwd(), '.env.local')
    if (fs.existsSync(envPath)) {
        const env = fs.readFileSync(envPath, 'utf8')
        env.split('\n').forEach(line => {
            const [key, value] = line.split('=')
            if (key && value) {
                process.env[key.trim()] = value.trim().replace(/^["']|["']$/g, '')
            }
        })
    }
}

if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('Error: SANITY_WRITE_TOKEN is missing in .env.local')
    console.log('Please create a write token in Sanity Manage (API settings) and add it to your .env.local')
    process.exit(1)
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-10',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN,
})

const services = [
    {
        _type: 'service',
        icon: 'RxDesktop',
        title: 'Full Stack Development',
        description: 'Building scalable web applications and e-commerce platforms from the ground up using the MERN stack, Next.js, and C#. Ensuring seamless functionality across all devices.',
        order: 1,
    },
    {
        _type: 'service',
        icon: 'RxDashboard',
        title: 'Custom Dashboards & ERPs',
        description: 'Engineering robust Point of Sale (POS) systems, inventory trackers, and school management platforms featuring Role-Based Access Control (RBAC) and real-time data.',
        order: 2,
    },
    {
        _type: 'service',
        icon: 'RxCode',
        title: 'Database & API Architecture',
        description: 'Designing secure REST APIs and managing complex data relations. Integrating Prisma, Supabase, MySQL, and third-party services to extend application functionality.',
        order: 3,
    },
    {
        _type: 'service',
        icon: 'RxLayers',
        title: 'Cloud & Deployment Setup',
        description: 'Handling end-to-end application deployment. Setting up VPS hosting, configuring App & DB servers, and managing CI/CD pipelines via Vercel and GitHub.',
        order: 4,
    },
    {
        _type: 'service',
        icon: 'RxRocket',
        title: 'Performance & SEO Optimization',
        description: 'Improving website load times through advanced caching techniques, image optimization, and Core Web Vitals enhancements to drive user retention and search rankings.',
        order: 5,
    },
]

const projects = [
    {
        _type: 'project',
        title: 'SkyStar POS & Inventory',
        description: 'A robust Point of Sale and inventory tracking application engineered for retail operations, featuring real-time data sync and Role-Based Access Control (RBAC).',
        techStack: ['React', 'Node.js', 'Prisma', 'Supabase'],
        link: 'https://pos-lwb3.vercel.app/',
        order: 1,
    },
    {
        _type: 'project',
        title: 'Sheikh Jee Garments',
        description: 'A comprehensive full-stack e-commerce site managing extensive product catalogs—from apparel to feeding bottles—with seamless checkout flows and SEO optimization.',
        techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js'],
        link: 'https://sheikhjeegarments.com',
        order: 2,
    },
    {
        _type: 'project',
        title: 'School Management ERP',
        description: 'An ERP-style educational platform designed to efficiently manage student data, complex fee structures, and dedicated, secure instructor portals.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        order: 3,
    },
    {
        _type: 'project',
        title: 'Blood Donation Bank',
        description: 'A community-focused web application designed to connect blood donors with hospitals and individuals in need through a clean, accessible interface.',
        techStack: ['MERN Stack', 'Tailwind CSS', 'REST APIs'],
        link: 'https://blood-donation-bank-r68g.vercel.app/',
        order: 4,
    },
    {
        _type: 'project',
        title: 'Innovatechstar Portfolio',
        description: 'A modern, highly responsive corporate web presence tailored for client acquisition, highlighting company services and dynamic content.',
        techStack: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
        link: 'https://innovatechstar.com',
        order: 5,
    },
]

const testimonials = [
    {
        _type: 'testimonial',
        name: 'Ahmed Raza',
        position: 'Founder & CEO',
        message: 'Usman built our full-stack e-commerce site, perfectly organizing our diverse product catalogs—from apparel to feeding bottles—while ensuring a seamless checkout flow. His technical expertise truly elevated our business.',
        isApproved: true,
    },
    {
        _type: 'testimonial',
        name: 'Zainab Khan',
        position: 'Operations Manager',
        message: 'The robust Point of Sale and inventory tracking application Usman developed completely transformed our retail operations. His understanding of the MERN stack and database architecture is top-tier.',
        isApproved: true,
    },
    {
        _type: 'testimonial',
        name: 'Ali Nawaz',
        position: 'Asset & Operations Lead',
        message: 'Usman streamlined our repair and sales workflows and leveraged his technical skills to drastically improve our asset tracking. He is a highly motivated and capable professional who delivers real results.',
        isApproved: true,
    },
    {
        _type: 'testimonial',
        name: 'Hina Tariq',
        position: 'Project Manager',
        message: 'During his time with us, Usman led the redesign of our corporate website and developed crucial internal tools. His mastery of modern web frameworks made our platform incredibly fast and mobile-responsive.',
        isApproved: true,
    },
    {
        _type: 'testimonial',
        name: 'Bilal Ahmed',
        position: 'School Principal',
        message: 'We needed a comprehensive ERP-style platform to manage student data, fee structures, and instructor portals. Usman engineered a solution that exceeded our expectations in both performance and security.',
        isApproved: true,
    },
]

const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/Usman-Ali-70', icon: 'RiGithubLine' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/usman-ali-dev', icon: 'RiLinkedinLine' },
    { platform: 'YouTube', url: 'https://youtube.com/@usmanali', icon: 'RiYoutubeLine' },
    { platform: 'Instagram', url: 'https://www.instagram.com/usman_warraixh', icon: 'RiInstagramLine' },
    { platform: 'Facebook', url: 'https://facebook.com', icon: 'RiFacebookLine' },
    { platform: 'Twitter/X', url: 'https://twitter.com', icon: 'RiTwitterXLine' },
]

async function importData() {
    try {
        console.log('Starting data import...')

        // Import Services
        for (const service of services) {
            await client.create(service)
            console.log(`Imported service: ${service.title}`)
        }

        // Import Projects
        for (const project of projects) {
            await client.create(project)
            console.log(`Imported project: ${project.title}`)
        }

        // Import Testimonials
        for (const testimonial of testimonials) {
            await client.create(testimonial)
            console.log(`Imported testimonial from: ${testimonial.name}`)
        }

        // Import Social Links (Site Settings)
        // First, check if siteSettings exists
        const existingSettings = await client.fetch('*[_type == "siteSettings"][0]')
        if (existingSettings) {
            await client.patch(existingSettings._id).set({ socialLinks }).commit()
            console.log('Updated social links in siteSettings')
        } else {
            await client.create({
                _type: 'siteSettings',
                socialLinks,
            })
            console.log('Created siteSettings with social links')
        }

        console.log('Data import completed successfully!')
    } catch (error) {
        console.error('Import failed:', error.message)
    }
}

importData()
