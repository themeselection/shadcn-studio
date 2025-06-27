import { ChevronDownIcon, StarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

const CollapsibleFilterDemo = () => {
  return (
    <div className='w-full max-w-[350px] space-y-3'>
      <Collapsible className='flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='text-sm font-semibold'>Price Range</div>
          <CollapsibleTrigger asChild className='group'>
            <Button variant='ghost' size='icon' className='size-8'>
              <ChevronDownIcon className='text-muted-foreground size-4 transition-transform group-data-[state=open]:rotate-180' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-4 px-4'>
            <Label htmlFor='min-price' className='shrink-0 text-sm font-medium'>
              Min Price
            </Label>
            <Input id='min-price' type='number' placeholder='0' className='max-w-58' />
          </div>
          <div className='flex items-center justify-between gap-4 px-4'>
            <Label htmlFor='max-price' className='shrink-0 text-sm font-medium'>
              Max Price
            </Label>
            <Input id='max-price' type='number' placeholder='1000' className='max-w-58' />
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <Collapsible className='flex w-full max-w-[350px] flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='text-sm font-semibold'>Customer Ratings</div>
          <CollapsibleTrigger asChild className='group'>
            <Button variant='ghost' size='icon' className='size-8'>
              <ChevronDownIcon className='text-muted-foreground size-4 transition-transform group-data-[state=open]:rotate-180' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='rating-4' />
            <Label htmlFor='rating-4' className='flex shrink-0 items-center gap-1 text-sm font-medium'>
              <span className='flex items-center gap-1'>
                4
                <StarIcon className='size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
              </span>
              & Up
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='rating-3' />
            <Label htmlFor='rating-3' className='flex shrink-0 items-center gap-1 text-sm font-medium'>
              <span className='flex items-center gap-1'>
                3
                <StarIcon className='size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
              </span>
              & Up
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='rating-2' />
            <Label htmlFor='rating-2' className='flex shrink-0 items-center gap-1 text-sm font-medium'>
              <span className='flex items-center gap-1'>
                2
                <StarIcon className='size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
              </span>
              & Up
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <Collapsible className='flex w-full max-w-[350px] flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='text-sm font-semibold'>Brand</div>
          <CollapsibleTrigger asChild className='group'>
            <Button variant='ghost' size='icon' className='size-8'>
              <ChevronDownIcon className='text-muted-foreground size-4 transition-transform group-data-[state=open]:rotate-180' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-apple' />
            <Label htmlFor='brand-apple' className='shrink-0 text-sm font-medium'>
              Apple
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-samsung' />
            <Label htmlFor='brand-samsung' className='shrink-0 text-sm font-medium'>
              Samsung
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-google' />
            <Label htmlFor='brand-google' className='shrink-0 text-sm font-medium'>
              Google
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-oneplus' />
            <Label htmlFor='brand-oneplus' className='shrink-0 text-sm font-medium'>
              OnePlus
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-xiaomi' />
            <Label htmlFor='brand-xiaomi' className='shrink-0 text-sm font-medium'>
              Xiaomi
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <Collapsible className='flex w-full max-w-[350px] flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='text-sm font-semibold'>Battery</div>
          <CollapsibleTrigger asChild className='group'>
            <Button variant='ghost' size='icon' className='size-8'>
              <ChevronDownIcon className='text-muted-foreground size-4 transition-transform group-data-[state=open]:rotate-180' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-3500' />
            <Label htmlFor='battery-3500' className='shrink-0 text-sm font-medium'>
              3500mAh
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-4000' />
            <Label htmlFor='battery-4000' className='shrink-0 text-sm font-medium'>
              4000mAh
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-5000' />
            <Label htmlFor='battery-5000' className='shrink-0 text-sm font-medium'>
              5000mAh
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-6000' />
            <Label htmlFor='battery-6000' className='shrink-0 text-sm font-medium'>
              6000mAh
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default CollapsibleFilterDemo
