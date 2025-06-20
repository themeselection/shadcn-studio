// Component Imports
import SliderWithInput from './SliderWithInput'
import { ColorSwatch } from './ThemeColorPanel'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type ShadowControlProps = {
  shadowColor: string
  shadowOpacity: number
  shadowBlur: number
  shadowSpread: number
  shadowOffsetX: number
  shadowOffsetY: number
  onChange: (key: string, value: any) => void
}

const ShadowControl = (props: ShadowControlProps) => {
  // Props
  const { shadowColor, shadowOpacity, shadowBlur, shadowSpread, shadowOffsetX, shadowOffsetY, onChange } = props

  return (
    <Accordion type='single' defaultValue='shadow' collapsible>
      <AccordionItem value='shadow' className='rounded-lg !border px-4'>
        <AccordionTrigger className='cursor-pointer py-3 text-base font-medium'>Shadow</AccordionTrigger>
        <AccordionContent className='space-y-3 pt-2 pb-4'>
          <div className='space-y-4'>
            <div>
              <ColorSwatch
                value={shadowColor}
                onChange={color => onChange('shadow-color', color)}
                label='Shadow Color'
              />
            </div>

            <div>
              <SliderWithInput
                value={shadowOpacity}
                onChange={value => onChange('shadow-opacity', value)}
                min={0}
                max={1}
                step={0.01}
                unit=''
                label='Shadow Opacity'
              />
            </div>

            <div>
              <SliderWithInput
                value={shadowBlur}
                onChange={value => onChange('shadow-blur', value)}
                min={0}
                max={50}
                step={0.5}
                unit='px'
                label='Blur Radius'
              />
            </div>

            <div>
              <SliderWithInput
                value={shadowSpread}
                onChange={value => onChange('shadow-spread', value)}
                min={-50}
                max={50}
                step={0.5}
                unit='px'
                label='Spread'
              />
            </div>

            <div>
              <SliderWithInput
                value={shadowOffsetX}
                onChange={value => onChange('shadow-offset-x', value)}
                min={-50}
                max={50}
                step={0.5}
                unit='px'
                label='Offset X'
              />
            </div>

            <div>
              <SliderWithInput
                value={shadowOffsetY}
                onChange={value => onChange('shadow-offset-y', value)}
                min={-50}
                max={50}
                step={0.5}
                unit='px'
                label='Offset Y'
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ShadowControl
