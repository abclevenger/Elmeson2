import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.elmesondepepe.com';

  const allowPublic = { allow: '/', disallow: ['/api/', '/_next/'] };

  return {
    rules: [
      // Explicitly allow common LLM / AI crawlers (do not block)
      { userAgent: 'GPTBot', ...allowPublic },
      { userAgent: 'ChatGPT-User', ...allowPublic },
      { userAgent: 'Claude-Web', ...allowPublic },
      { userAgent: 'Anthropic-AI', ...allowPublic },
      { userAgent: 'Google-Extended', ...allowPublic },
      { userAgent: 'Cohere-AI', ...allowPublic },
      { userAgent: 'PerplexityBot', ...allowPublic },
      { userAgent: 'Applebot-Extended', ...allowPublic },
      { userAgent: '*', ...allowPublic },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

