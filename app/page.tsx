import { ArrowRight, TrendingUp } from 'lucide-react'

const categories = [
  { name: 'Housing', amount: '$650', width: '51%', color: 'bg-category-housing' },
  { name: 'Food', amount: '$284', width: '22%', color: 'bg-category-food' },
  { name: 'Transport', amount: '$150', width: '12%', color: 'bg-category-transport' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-5 py-6 text-foreground sm:px-10 sm:py-8">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col gap-5 sm:min-h-[calc(100vh-8rem)]">
        <header className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-base font-semibold tracking-[-0.02em]">Monthly spending</h1>
              <p className="mt-1 text-xs text-muted-foreground">Personal overview</p>
            </div>
          </div>
          <time dateTime="2026-08" className="font-mono text-xs tracking-[0.12em] text-muted-foreground">AUG 2026</time>
        </header>

        <div className="flex flex-1 flex-col justify-center gap-5">
          <section aria-labelledby="total-spending" className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <p id="total-spending" className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Total spent</p>
            <p className="font-mono text-[clamp(3rem,9vw,5.5rem)] font-medium leading-none tracking-[-0.07em] text-foreground">$1,284.50</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-positive/12 px-3 py-1.5 text-sm text-positive">
              <TrendingUp className="size-4" strokeWidth={2} aria-hidden="true" />
              <span className="font-mono text-xs font-medium">+12% more</span>
              <span className="text-xs text-positive/80">than last month</span>
            </div>
          </section>

          <section aria-labelledby="category-heading" className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 id="category-heading" className="text-sm font-semibold tracking-[-0.01em]">By category</h2>
              <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">3 CATEGORIES</span>
            </div>
            <div className="flex flex-col gap-5">
              {categories.map((category) => (
                <div key={category.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-3">
                      <span className={`size-2 rounded-full ${category.color}`} aria-hidden="true" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{category.amount}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary" aria-hidden="true">
                    <div className={`h-full rounded-full ${category.color}`} style={{ width: category.width }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <button className="group flex w-fit items-center gap-3 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" type="button">
          View breakdown
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </section>
    </main>
  )
}
