import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Usman Ali, a Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, and creating scalable, high-performance web applications.",
    keywords: [
        "About Usman Ali",
        "Full Stack Developer Background",
        "React Expert",
        "Next.js Specialist",
        "Web Developer Experience",
        "Software Engineer Portfolio",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designing",
        "ERP Development Experience"
    ],
    alternates: {
        canonical: "https://usmanali.engineer/about",
    },
    openGraph: {
        title: "About Usman Ali | Full Stack Developer",
        description: "Learn more about Usman Ali, a Full Stack Developer with expertise in React, Next.js, Node.js, and scalable web architectures.",
        url: "https://usmanali.engineer/about",
        type: "profile",
    },
    twitter: {
        title: "About Usman Ali | Full Stack Developer",
        description: "Learn more about Usman Ali, a Full Stack Developer with expertise in React, Next.js, Node.js, and scalable web architectures.",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
