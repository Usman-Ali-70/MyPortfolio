import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Usman Ali for hiring, project collaboration, or consulting on web development, React, Next.js, and custom software architectures.",
    keywords: [
        "Contact Usman Ali",
        "Hire Full Stack Developer",
        "Freelance Web Developer",
        "Web Development Consultant",
        "Contact Software Engineer",
        "Hire React Developer",
        "Hire Next.js Expert",
        "Discuss Web Project",
        "Business Inquiry Web Development"
    ],
    alternates: {
        canonical: "https://usmanali.engineer/contact",
    },
    openGraph: {
        title: "Contact | Usman Ali",
        description: "Get in touch with Usman Ali for hiring, project collaboration, or consulting on web development.",
        url: "https://usmanali.engineer/contact",
        type: "website",
    },
    twitter: {
        title: "Contact | Usman Ali",
        description: "Get in touch with Usman Ali for hiring, project collaboration, or consulting on web development.",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
