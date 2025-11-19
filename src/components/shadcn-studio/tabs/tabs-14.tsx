import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabs = [
  {
    name: 'Explore',
    value: 'explore',
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
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  },
  {
    name: 'Trending',
    value: 'trending',
    content: (
      <>
        Stay on top of what&apos;s <span className='text-foreground font-semibold'>trending</span>. Discover what
        everyone&apos;s talking about, from viral trends to the latest memes and conversations.
      </>
    )
  },
  {
    name: 'Events',
    value: 'events',
    content: (
      <>
        Check out upcoming <span className='text-foreground font-semibold'>events</span> happening near you. Whether
        virtual or in-person, there&apos;s always something to join and be a part of.
      </>
    )
  },
  {
    name: 'News',
    value: 'news',
    content: (
      <>
        Stay updated with the latest <span className='text-foreground font-semibold'>news</span> across the globe. From
        tech breakthroughs to world events, get the stories that matter most.
      </>
    )
  },
  {
    name: 'Community',
    value: 'community',
    content: (
      <>
        Connect with the <span className='text-foreground font-semibold'>community</span>—share your thoughts, ask
        questions, and join discussions with like-minded individuals.
      </>
    )
  },
  {
    name: 'Rewards',
    value: 'rewards',
    content: (
      <>
        Unlock exclusive <span className='text-foreground font-semibold'>rewards</span> and perks for your activity.
        Keep an eye out for new ways to earn and redeem your points.
      </>
    )
  },
  {
    name: 'Profile',
    value: 'profile',
    content: (
      <>
        View and edit your <span className='text-foreground font-semibold'>profile</span> information, track your
        activity, and customize your experience. It&apos;s all about you here!
      </>
    )
  }
]

const TabsOverflowDemo = () => {
  return (
    <div className='w-full max-w-md'>
      <Tabs defaultValue='explore' className='gap-1'>
        <ScrollArea>
          <TabsList className='mb-3'>
            {tabs.map(tab => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <p className='text-muted-foreground text-sm'>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default TabsOverflowDemo
