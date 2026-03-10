import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimonials",
    description: "Read testimonials from clients and peers about Usman Ali's dedication, skills, and high-quality web development services.",
    keywords: [
        "Usman Ali reviews",
        "Client Testimonials",
        "Feedback Full Stack Developer",
        "Professional references",
        "Web Developer Reviews",
        "Freelance Developer Feedback",
        "Successful Projects",
        "Client Satisfaction"
    ],
    alternates: {
        canonical: "https://usmanali.engineer/testimonials",
    },
    openGraph: {
        title: "Testimonials | Usman Ali",
        description: "Read testimonials from clients and peers about Usman Ali's dedication, skills, and high-quality web development services.",
        url: "https://usmanali.engineer/testimonials",
        type: "website",
    },
    twitter: {
        title: "Testimonials | Usman Ali",
        description: "Read testimonials from clients and peers about Usman Ali's dedication, skills, and high-quality web development services.",
    },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
