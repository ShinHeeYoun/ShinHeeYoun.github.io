import type { ReactNode } from 'react'

// The title of a page, with a line of explanation under it, and room for buttons on the right.
export default function PageHeader({
  title,
  description,
  children,
}: {
  title: string
  description?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
