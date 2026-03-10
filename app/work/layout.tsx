import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Work & Projects",
    description: "Browse the portfolio of Usman Ali. Discover real-world projects like SkyStar POS, custom e-commerce stores, ERP dashboards, and full stack architectures.",
    keywords: [
        "Usman Ali Portfolio projects",
        "SkyStar POS",
        "React Projects",
        "NextJS Real-world applications",
        "MERN Stack Projects",
        "E-commerce Websites",
        "ERP Dashboard Portfolio",
        "Web Application Portfolio",
        "Full Stack Case Studies"
    ],
    alternates: {
        canonical: "https://usmanali.engineer/work",
    },
    openGraph: {
        title: "My Work & Projects | Usman Ali",
        description: "Browse the portfolio of Usman Ali. Discover real-world projects like SkyStar POS, custom e-commerce stores, and full stack architectures.",
        url: "https://usmanali.engineer/work",
        type: "website",
    },
    twitter: {
        title: "My Work & Projects | Usman Ali",
        description: "Browse the portfolio of Usman Ali. Discover real-world projects like SkyStar POS, custom e-commerce stores, and full stack architectures.",
    },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
