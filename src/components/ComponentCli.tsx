'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { JSX } from 'react'

// Component Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import CopyButton from '@/components/CopyButton'
import CodeBlock, { highlight } from '@/components/CodeBlock'

// Hook Imports
import { useLocalStorage } from '@/hooks/useLocalStorage'

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

const ComponentCli = ({ name, toast }: { name: string; toast?: string }) => {
  // Hooks
  const [packageManager, setPackageManager] = useLocalStorage<PackageManager>('packageManager', 'pnpm')

  // Vars
  const commands = {
    pnpm: `pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}.json`,
    npm: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}.json`,
    yarn: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}.json`,
    bun: `bunx --bun shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${name}.json`
  }

  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const loadCode = async () => {
      const highlighted = await highlight(commands[packageManager as PackageManager], 'bash')

      setHighlightedCode(highlighted)
    }

    loadCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageManager])

  return (
    <div className='relative'>
      <Tabs
        value={packageManager}
        onValueChange={value => {
          setPackageManager(value as PackageManager)
        }}
        className='rounded-md bg-zinc-950 dark:bg-zinc-900'
      >
        <TabsList className='dark h-auto w-full justify-start rounded-none border-b bg-transparent px-4 py-0'>
          {Object.keys(commands).map(pkg => (
            <TabsTrigger
              key={pkg}
              value={pkg}
              className='data-[state=active]:!text-foreground data-[state=active]:after:bg-primary hover:!text-muted-foreground !text-muted-foreground/70 relative flex-none cursor-pointer rounded-none border-0 p-3 font-normal after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:!bg-transparent data-[state=active]:shadow-none'
            >
              {pkg}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(commands).map(([pkg, command]) => (
          <TabsContent className='m-0' key={pkg} value={pkg}>
            <CodeBlock code={command} lang='bash' preHighlighted={highlightedCode} />
          </TabsContent>
        ))}
      </Tabs>
      <CopyButton source={commands[packageManager as PackageManager]} className='dark end-1 top-1' toast={toast} />
    </div>
  )
}

export default ComponentCli
