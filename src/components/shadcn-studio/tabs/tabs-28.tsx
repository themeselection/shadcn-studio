'use client'

import { useState } from 'react'

import { motion, AnimatePresence } from 'motion/react'
import { BookIcon, GiftIcon, HeartIcon } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { cn } from '@/lib/utils'

const tabs = [
  {
    name: 'Explore',
    value: 'explore',
    icon: BookIcon,
    content: (
      <>
        Discover <span className='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
        curated just for you. Start exploring and let your curiosity lead the way!
      </>
    )
  },
  {
    name: 'Favorites',
    value: 'favorites',
    icon: HeartIcon,
    content: (
      <>
        All your <span className='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.
      </>
    )
  },
  {
    name: 'Surprise Me',
    value: 'surprise',
    icon: GiftIcon,
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  }
]

const ExpandableTabsDemo = () => {
  const [activeTab, setActiveTab] = useState('explore')

  return (
    <div className='w-full max-w-md'>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='gap-4'>
        <TabsList className='h-auto gap-2 rounded-xl p-1'>
          {tabs.map(({ icon: Icon, name, value }) => {
            const isActive = activeTab === value

            return (
              <motion.div
                key={value}
                layout
                className={cn(
                  'flex h-8 items-center justify-center overflow-hidden rounded-md',
                  isActive ? 'flex-1' : 'flex-none'
                )}
                onClick={() => setActiveTab(value)}
                initial={false}
                animate={{
                  width: isActive ? 120 : 32
                }}
                transition={{
                  type: 'tween',
                  stiffness: 400,
                  damping: 25
                }}
              >
                <TabsTrigger value={value} asChild>
                  <motion.div
                    className='flex h-8 w-full items-center justify-center'
                    animate={{ filter: 'blur(0px)' }}
                    exit={{ filter: 'blur(2px)' }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Icon className='aspect-square size-4 shrink-0' />
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          className='font-medium max-sm:hidden'
                          initial={{ opacity: 0, scaleX: 0.8 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          style={{ originX: 0 }}
                        >
                          {name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </TabsTrigger>
              </motion.div>
            )
          })}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <p className='text-muted-foreground text-sm'>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default ExpandableTabsDemo
