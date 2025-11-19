'use client'

// Component Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CopyButton from '@/components/CopyButton'
import CodeBlock from '@/components/CodeBlock'

// Hook Imports
import { useLocalStorage } from '@/hooks/useLocalStorage'

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

const ComponentCli = ({ name, toast }: { name: string; toast?: string }) => {
  // Hooks
  const [packageManager, setPackageManager] = useLocalStorage<PackageManager>('packageManager', 'pnpm')

  // Vars
  const commands = {
    pnpm: `pnpm dlx shadcn@latest add http://localhost:3000/r/${name}.json`,
    npm: `npx shadcn@latest add http://localhost:3000/r/${name}.json`,
    yarn: `yarn shadcn@latest add http://localhost:3000/r/${name}.json`,
    bun: `bunx --bun shadcn@latest add http://localhost:3000/r/${name}.json`
  }

  return (
    <div className='relative'>
      <Tabs
        value={packageManager}
        onValueChange={value => {
          setPackageManager(value as PackageManager)
        }}
        className='bg-sidebar gap-0 overflow-hidden rounded-md border'
      >
        <TabsList className='h-auto w-full justify-start rounded-none border-b bg-transparent px-4 py-0 max-sm:px-3'>
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
            <CodeBlock code={command} lang='bash' />
          </TabsContent>
        ))}
      </Tabs>
      <CopyButton source={commands[packageManager as PackageManager]} className='top-1 right-1' toast={toast} />
    </div>
  )
}

export default ComponentCli
