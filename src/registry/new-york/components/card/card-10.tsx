import { Card, CardContent } from '@/registry/new-york/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'

const tabs = [
  {
    name: 'Home',
    value: 'home',
    content:
      'Welcome to the Home tab! Here, you can explore the latest updates, news, and highlights. Stay informed about what&apos;s happening and never miss out on important announcements.'
  },
  {
    name: 'Profile',
    value: 'profile',
    content:
      'This is your Profile tab. Manage your personal information, update your account details, and customize your settings to make your experience unique.'
  },
  {
    name: 'Messages',
    value: 'messages',
    content:
      'Messages: Check your recent messages, start new conversations, and stay connected with your friends and contacts. Manage your chat history and keep the communication flowing.'
  }
]

const CardWithTabsDemo = () => {
  return (
    <Card className='w-max'>
      <CardContent>
        <Tabs defaultValue={tabs[0].value} className='w-full max-w-sm'>
          <TabsList className='bg-background w-full justify-start rounded-none border-b p-0'>
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className='bg-background data-[state=active]:border-b-primary h-full rounded-none border-b-2 border-transparent data-[state=active]:shadow-none'
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <p className='text-muted-foreground p-4 text-sm'>{tab.content}</p>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default CardWithTabsDemo
