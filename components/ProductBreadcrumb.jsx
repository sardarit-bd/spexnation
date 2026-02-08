import { ChevronRight } from 'lucide-react'

export default function ProductBreadcrumb() {
  const breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Frames', href: '#' },
    { label: 'Elegance & Co', href: '#' },
    { label: 'TF2249', href: '#' },
  ]

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 py-4">
      {breadcrumbs.map((crumb, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <a href={crumb.href} className="hover:text-yellow-600 transition">
            {crumb.label}
          </a>
          {idx < breadcrumbs.length - 1 && (
            <ChevronRight size={16} className="text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  )
}
