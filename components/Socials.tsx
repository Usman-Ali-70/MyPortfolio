"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import { getIcon } from "@/lib/iconMapper";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

const Socials: React.FC = () => {
  const [socials, setSocials] = useState<SocialLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.fetch(siteSettingsQuery).then((data) => {
      if (data?.socialLinks && data.socialLinks.length > 0) {
        setSocials(data.socialLinks);
      }
      setIsLoading(false);
    });
  }, []);

  const displaySocials = socials;

  if (isLoading && socials.length === 0) {
    return null; // Avoid flicker during first load
  }

  return (
    <div className="flex items-center gap-x-5 text-xl">
      {displaySocials.map((social, i) => {
        const Icon = getIcon(social.icon);
        return (
          <Link
            key={i}
            href={social.url}
            title={social.platform}
            target="_blank"
            rel="noreferrer noopener"
            className="relative group"
          >
            <div
              className={`${social.platform === "GitHub"
                ? "bg-accent text-white p-[6px] rounded-full shadow-[0_0_10px_rgba(241,48,36,0.3)] group-hover:shadow-[0_0_15px_rgba(241,48,36,0.5)]"
                : "text-white/70 hover:text-accent"
                } transition-all duration-500 ease-premium transform group-hover:-translate-y-1 group-hover:scale-110 flex items-center justify-center`}
            >
              <Icon aria-hidden="true" className="w-5 h-5" />
            </div>
            <span className="sr-only">{social.platform}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;