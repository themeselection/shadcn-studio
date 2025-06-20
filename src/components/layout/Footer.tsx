// Next Imports
import Link from 'next/link'

// Third-party Imports
import { Youtube } from 'lucide-react'

// Component Imports
import Logo from '@/components/layout/Logo'

// SVG Imports
import Github from '@/assets/svg/Github'
import X from '@/assets/svg/X'
import Discord from '@/assets/svg/Discord'
import ThemeSelection from '@/assets/svg/ThemeSelection'
import FlyonUI from '@/assets/svg/FlyonUI'
import AllUtilityCSS from '@/assets/svg/AllUtilityCSS'
import AllShadCN from '@/assets/svg/AllShadCN'
import PixInvent from '@/assets/svg/PixInvent'
import JetShip from '@/assets/svg/Jetship'

const Footer = () => {
  return (
    <footer className='flex w-full flex-col'>
      <div className='mx-auto w-full max-w-[1400px] border-t border-dashed px-4 py-9 min-[1400px]:border-x min-[1800px]:max-w-[1536px] sm:px-8 sm:py-16'>
        <div className='grid grid-cols-5 gap-6 sm:gap-8'>
          <div className='col-span-full flex flex-col items-start gap-4 lg:col-span-2'>
            <Link href='/'>
              <Logo />
            </Link>
            <p>
              An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired with a
              powerful theme generator to craft, customize, and ship faster.
            </p>
            <div className='flex items-center gap-4'>
              <Link href='https://github.com/themeselection/shadcn-studio' target='_blank' rel='noopener noreferrer'>
                <Github className='size-6' />
                <span className='sr-only'>Github</span>
              </Link>
              <Link href='https://discord.com/invite/kBHkY7DekX' target='_blank' rel='noopener noreferrer'>
                <Discord className='size-6' />
                <span className='sr-only'>Discord</span>
              </Link>
              <Link href='https://x.com/ajaypatel_aj' target='_blank' rel='noopener noreferrer'>
                <X className='size-6' />
                <span className='sr-only'>X</span>
              </Link>
              <Link href='https://www.youtube.com/@themeselection' target='_blank' rel='noopener noreferrer'>
                <Youtube className='size-6' />
                <span className='sr-only'>Youtube</span>
              </Link>
            </div>
            <p className='text-muted-foreground text-sm'>
              This project is independent and not affiliated with Figma or shadcn/ui.
            </p>
          </div>
          <div className='col-span-full grid gap-6 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:gap-8'>
            <div className='flex flex-col gap-5'>
              <div className='text-lg font-semibold'>Products</div>
              <ul className='space-y-3'>
                <li>
                  <Link href='/theme-generator'>Shadcn Theme Generator</Link>
                </li>
                <li>
                  <Link href='/components'>Shadcn Components</Link>
                </li>
                <li>
                  <Link href='#'>
                    Shadcn Figma UI Kit <span className='text-muted-foreground font-normal'>(Soon)</span>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    Shadcn Blocks <span className='text-muted-foreground font-normal'>(Soon)</span>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    Shadcn Templates <span className='text-muted-foreground font-normal'>(Soon)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='text-lg font-semibold'>Resources</div>
              <ul className='space-y-3'>
                <li>
                  <Link href='/#roadmap'>Roadmap</Link>
                </li>
                <li>
                  <Link
                    href='https://github.com/themeselection/shadcn-studio/blob/main/CHANGELOG.md'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='text-lg font-semibold'>Legal</div>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='https://github.com/themeselection/shadcn-studio/blob/main/LICENSE.md'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    License
                  </Link>
                </li>
                <li>
                  <Link href='#'>Privacy policy</Link>
                </li>
                <li>
                  <Link href='#'>Terms & Condition</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full border-t border-dashed'>
        <div className='mx-auto flex w-full max-w-[1400px] flex-col items-center gap-7.5 border-dashed px-8 py-6 min-[1400px]:border-x min-[1800px]:max-w-[1536px]'>
          <div className='flex flex-col items-center gap-1.5 text-center'>
            <p className='text-lg leading-7.5 font-semibold'>Innovative Offerings</p>
            <p className='text-muted-foreground leading-7.5'>Discover other Tools & Brands in our Ecosystem</p>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-6'>
            <Link href='https://themeselection.com' target='_blank' rel='noopener noreferrer'>
              <ThemeSelection className='mb-2.5 text-[1.625rem]' />
              <span className='sr-only'>ThemeSelection</span>
            </Link>
            <Link href='https://flyonui.com' target='_blank' rel='noopener noreferrer'>
              <FlyonUI className='text-[1.75rem]' />
              <span className='sr-only'>FlyonUI</span>
            </Link>
            <Link href='http://allutilitycss.com' target='_blank' rel='noopener noreferrer'>
              <AllUtilityCSS className='text-[1.75rem]' />
              <span className='sr-only'>All UtilityCSS</span>
            </Link>
            <Link href='https://allshadcn.com' target='_blank' rel='noopener noreferrer'>
              <AllShadCN className='text-[1.75rem]' />
              <span className='sr-only'>All ShadCN</span>
            </Link>
            <Link href='https://pixinvent.com' target='_blank' rel='noopener noreferrer'>
              <PixInvent className='text-[1.75rem]' />
              <span className='sr-only'>PixInvent</span>
            </Link>
            <Link
              href='https://themeselection.com/item/category/saas-boilerplate'
              target='_blank'
              rel='noopener noreferrer'
            >
              <JetShip className='text-[1.75rem]' />
              <span className='sr-only'>JetShip</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full border-t border-dashed'>
        <div className='text-muted-foreground mx-auto flex w-full max-w-[1400px] items-center justify-between gap-5 border-dashed px-8 py-6 text-center max-lg:flex-col min-[1400px]:border-x min-[1800px]:max-w-[1536px]'>
          <p>
            {`©${new Date().getFullYear()}`}{' '}
            <Link href='/' className='text-foreground font-medium'>
              shadcn/studio
            </Link>
            , Supported by{' '}
            <Link href='https://themeselection.com/' target='_blank' className='text-foreground font-medium'>
              ThemeSelection
            </Link>
          </p>
          <p>
            Building in public by{' '}
            <Link href='https://x.com/ajaypatel_aj' target='_blank' className='text-foreground font-medium'>
              @Ajay Patel
            </Link>
            , designed by{' '}
            <Link href='https://x.com/imananddesigner' target='_blank' className='text-foreground font-medium'>
              @Anand Patel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
