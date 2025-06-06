import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york/ui/card'

const CardOutlineDemo = () => {
  return (
    <Card className='border-primary max-w-md gap-0 bg-transparent shadow-none'>
      <CardHeader>
        <CardTitle>Creative Clash</CardTitle>
      </CardHeader>
      <CardContent>
        Step into a space where design skills are tested, ideas come alive, and only the boldest concepts win the
        spotlight.
      </CardContent>
    </Card>
  )
}

export default CardOutlineDemo
