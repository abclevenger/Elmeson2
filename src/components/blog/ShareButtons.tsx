"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { SITE_URL } from "@/lib/site";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}/story/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: Facebook,
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: Linkedin,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Share this post">
      <span className="text-sm font-medium text-[var(--warm-700)] uppercase tracking-wider">Share</span>
      {shareLinks.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[var(--warm-200)] text-[var(--charcoal)] hover:bg-[var(--gold)]/20 hover:text-[var(--gold)] transition-colors"
          aria-label={`Share on ${name}`}
        >
          <Icon size={20} aria-hidden="true" />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        className="p-2 rounded-full bg-[var(--warm-200)] text-[var(--charcoal)] hover:bg-[var(--gold)]/20 hover:text-[var(--gold)] transition-colors"
        aria-label={copied ? "Copied!" : "Copy link"}
      >
        {copied ? <Check size={20} aria-hidden="true" /> : <Link2 size={20} aria-hidden="true" />}
      </button>
    </div>
  );
}
