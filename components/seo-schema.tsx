"use client";

import { useEffect } from 'react';

interface SEOSchemaProps {
  schemas: object[];
}

export function SEOSchema({ schemas }: SEOSchemaProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// Helper component for breadcrumbs (visual + SEO)
interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-50 border-b">
      <ol className="container mx-auto flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-600 font-medium">{item.name}</span>
            ) : (
              <a href={item.href} className="text-blue-600 hover:underline">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
