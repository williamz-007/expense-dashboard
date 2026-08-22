import { TrendingDown } from 'lucide-react'

const categories = [
  { name: 'Housing', amount: '$650', width: '51%', color: 'bg-category-housing', dot: 'bg-category-housing' },
  { name: 'Food', amount: '$284', width: '22%', color: 'bg-category-food', dot: 'bg-category-food' },
  { name: 'Transport', amount: '$150', width: '12%', color: 'bg-category-transport', dot: 'bg-category-transport' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-5 py-6 text-foreground sm:px-10 sm:py-8">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-4xl flex-col sm:min-h-[calc(100vh-4rem)]">
        <header className="flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
            <div>
              <h1 className="text-base font-semibold tracking-[-0.02em]">Monthly spending</h1>
              <p className="mt-1 text-xs text-muted-foreground">Personal overview</p>
            </div>
          </div>
          <time dateTime="2026-08" className="font-mono text-xs tracking-[0.12em] text-muted-foreground">AUG 2026</time>
        </header>

        <div className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <section aria-labelledby="total-spending" className="mb-16 sm:mb-20">
            <p id="total-spending" className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Total spent</p>
            <p className="font-mono text-[clamp(3rem,9vw,6.25rem)] font-medium leading-none tracking-[-0.07em] text-foreground">$1,284.50</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-positive/25 bg-positive/10 px-3 py-1.5 text-sm text-positive">
              <TrendingDown className="size-4" strokeWidth={2} aria-hidden="true" />
              <span className="font-mono text-xs font-medium">12% less</span>
              <span className="text-xs text-positive/80">than last month</span>
            </div>
          </section>

          <section aria-labelledby="category-heading" className="grid gap-8 border-t border-border pt-8 sm:grid-cols-[minmax(220px,0.8fr)_1.5fr] sm:gap-16 sm:pt-10">
            <div>
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h2 id="category-heading" className="text-sm font-semibold tracking-[-0.01em]">By category</h2>
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">3 CATEGORIES</span>
              </div>
              <div className="divide-y divide-border/70 rounded-md border border-border bg-card">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between gap-5 px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className={`size-2 rounded-full ${category.dot}`} aria-hidden="true" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{category.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end gap-4" aria-label="Spending breakdown visualization">
              <div className="flex h-4 w-full overflow-hidden rounded-sm bg-secondary">
                {categories.map((category) => <div key={category.name} className={`h-full ${category.color}`} style={{ width: category.width }} title={`${category.name}: ${category.amount}`} />)}
              </div>
              <div className="flex justify-between gap-4 font-mono text-[10px] tracking-[0.08em] text-muted-foreground">
                {categories.map((category) => <span key={category.name} className="flex items-center gap-2"><span className={`size-1.5 rounded-full ${category.dot}`} aria-hidden="true" />{category.name.toUpperCase()}</span>)}
              </div>
            </div>
          </section>
        </div>

        <button className="group flex w-fit items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" type="button">
          View breakdown
          <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">→</span>
        </button>
      </section>
    </main>
  )
}
