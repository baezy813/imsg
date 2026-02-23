'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'


export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        aria-label="Toggle theme"
      >
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <div>
          <Sun className="h-5 w-5 text-yellow-500" />

        </div>
      ) : (
        <Moon className="h-5 w-5 text-zinc-700" />
      )}
    </button>
  )
}
