const categories = [
  { name: 'Housing', amount: '$650', width: '100%' },
  { name: 'Food', amount: '$284', width: '44%' },
  { name: 'Transport', amount: '$150', width: '23%' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground sm:px-10 sm:py-16">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col justify-center sm:min-h-[calc(100vh-8rem)]">
        <div className="mb-16 flex items-center justify-between border-b border-border pb-5 sm:mb-20">
          <p className="text-sm font-medium tracking-[-0.01em] text-muted-foreground">Monthly spending</p>
          <span className="font-mono text-xs tracking-[0.12em] text-muted-foreground">AUG 2026</span>
        </div>

        <div className="mb-16 sm:mb-20">
          <p className="font-mono text-[clamp(3.5rem,12vw,7.75rem)] font-medium leading-[0.92] tracking-[-0.075em] text-foreground">
            $1,284.50
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex h-5 items-center rounded-full border border-border px-2 font-mono text-[10px] font-medium tracking-[0.04em] text-foreground">
              −12%
            </span>
            <span>less than last month</span>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr] sm:items-end sm:gap-20">
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">By category</p>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between gap-5 text-sm">
                  <span>{category.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{category.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3" aria-label="Spending breakdown visualization">
            <div className="flex h-3 w-full overflow-hidden rounded-sm bg-secondary">
              <div className="h-full w-[51%] bg-foreground" title="Housing: $650" />
              <div className="h-full w-[22%] bg-muted-foreground" title="Food: $284" />
              <div className="h-full w-[12%] bg-border" title="Transport: $150" />
            </div>
            <div className="flex justify-between font-mono text-[10px] tracking-[0.08em] text-muted-foreground">
              <span>HOUSING</span>
              <span>FOOD</span>
              <span>TRANSPORT</span>
            </div>
          </div>
        </div>

        <button className="group mt-16 flex w-fit items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-opacity hover:opacity-60 sm:mt-20" type="button">
          View breakdown
          <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">→</span>
        </button>
      </section>
    </main>
  )
}
