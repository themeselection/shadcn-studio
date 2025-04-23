// Next Imports
import { cookies } from 'next/headers'

// Component Imports
import { Mail } from './components/Mail'
import { accounts, mails } from './Data'

export default async function MailPage() {
  const layout = (await cookies()).get('react-resizable-panels:layout:mail')
  const collapsed = (await cookies()).get('react-resizable-panels:collapsed')

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className='md:hidden'>Please use a desktop browser to view this example.</div>
      <div className='hidden flex-col rounded-lg border shadow md:flex'>
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
