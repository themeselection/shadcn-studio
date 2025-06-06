import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/new-york/ui/card'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const CardMeetingNotesDemo = () => {
  return (
    <Card className='max-w-md'>
      <CardHeader>
        <CardTitle>Meeting Notes</CardTitle>
        <CardDescription>Transcript from the meeting with the client.</CardDescription>
      </CardHeader>
      <CardContent className='text-sm'>
        <p>Client requested dashboard redesign with focus on mobile responsiveness.</p>
        <ol className='mt-4 flex list-decimal flex-col gap-2 pl-6'>
          <li>New analytics widgets for daily/weekly metrics</li>
          <li>Simplified navigation menu</li>
          <li>Dark mode support</li>
          <li>Timeline: 6 weeks</li>
          <li>Follow-up meeting scheduled for next Tuesday</li>
        </ol>
      </CardContent>
      <CardFooter>
        <div className='flex -space-x-2 hover:space-x-1'>
          {avatars.map((avatar, index) => (
            <Avatar key={index} className='ring-background ring-2 transition-all duration-300 ease-in-out'>
              <AvatarImage src={avatar.src} alt={avatar.name} />
              <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardMeetingNotesDemo
