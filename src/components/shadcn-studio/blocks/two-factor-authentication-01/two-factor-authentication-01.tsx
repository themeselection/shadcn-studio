import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Logo from '@/components/layout/logo'
import AuthBackgroundShape from '@/assets/svg/auth-background-shape'
import TwoFactorAuthenticationForm from '@/components/shadcn-studio/blocks/two-factor-authentication-01/two-factor-authentication-form'

const TwoFactorAuthentication = () => {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <div className='absolute'>
        <AuthBackgroundShape />
      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
        <CardHeader className='gap-6'>
          <Logo className='gap-3' />

          <div>
            <CardTitle className='mb-1.5 text-2xl'>Two Factor Authentication</CardTitle>
            <CardDescription className='text-base'>
              Please confirm access to your account by entering the code provided by your authenticator application
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          {/* TwoFactorAuthentication Form */}
          <TwoFactorAuthenticationForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default TwoFactorAuthentication
