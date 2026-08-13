import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-900 dark:text-slate-100" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
