// React Imports
import type { SVGAttributes } from 'react'

const Checkbox = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='108' height='87' viewBox='0 0 108 87' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_6678)'>
        <rect x='27' y='15' width='56' height='56' rx='8' fill='var(--card)' />
        <path
          d='M51.4999 49.2754L45.7372 43.5127L43.2627 45.9872L51.4999 54.2244L68.4872 37.2372L66.0127 34.7627L51.4999 49.2754Z'
          fill='var(--primary)'
        />
        <path d='M110 71L-1.19209e-06 71' stroke='url(#paint0_linear_5515_6678)' strokeOpacity='0.4' />
        <path d='M108 15L-2 15' stroke='url(#paint1_linear_5515_6678)' strokeOpacity='0.4' />
        <path d='M27 87L27 -2.563e-06' stroke='url(#paint2_linear_5515_6678)' strokeOpacity='0.4' />
        <path d='M83 87L83 -2.563e-06' stroke='url(#paint3_linear_5515_6678)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_6678'
          x1='5.8803e-06'
          y1='70.5'
          x2='110'
          y2='70.5143'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_6678'
          x1='-1.99999'
          y1='14.5'
          x2='108'
          y2='14.5143'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_6678'
          x1='27.5'
          y1='4.67264e-06'
          x2='27.4911'
          y2='87.0001'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_6678'
          x1='83.5'
          y1='4.67264e-06'
          x2='83.4911'
          y2='87.0001'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_6678'>
          <rect width='108' height='87' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Checkbox
