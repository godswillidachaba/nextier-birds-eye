export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-[10px] font-bold text-white">
              BE
            </div>
            <span className="text-sm font-semibold">Bird&apos;s Eye Platform</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Nextier IT Department — Strategy 2026
          </p>
          <p className="text-xs text-muted-foreground">
            Confidential — For Internal Use Only
          </p>
        </div>
      </div>
    </footer>
  );
}
