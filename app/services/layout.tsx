import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore the professional services offered by Usman Ali: Custom Web Development, ERP Dashboards, API Design, E-commerce Solutions, and SEO Optimization.",
    keywords: [
        "Web Development Services",
        "Custom UI/UX Design",
        "Backend API Development",
        "E-commerce Platforms",
        "SEO Optimization",
        "React Development Services",
        "Next.js Solutions",
        "Node.js Backend",
        "Full Stack Web Services",
        "ERP Dashboard Creation",
        "Hire Full Stack Developer"
    ],
    alternates: {
        canonical: "https://usmanali.engineer/services",
    },
    openGraph: {
        title: "Services | Usman Ali",
        description: "Explore the professional services offered by Usman Ali: Custom Web Development, ERP Dashboards, API Design, and E-commerce Solutions.",
        url: "https://usmanali.engineer/services",
        type: "website",
    },
    twitter: {
        title: "Services | Usman Ali",
        description: "Explore the professional services offered by Usman Ali: Custom Web Development, ERP Dashboards, API Design, and E-commerce Solutions.",
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
