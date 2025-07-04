// React Imports
import type { SVGAttributes } from 'react'

const Tabs = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='220' height='57' viewBox='0 0 220 57' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5372_59611)'>
        <path d='M22 57L22 -1.83284e-06' stroke='url(#paint0_linear_5372_59611)' strokeOpacity='0.4' />
        <path d='M198 57L198 -1.83284e-06' stroke='url(#paint1_linear_5372_59611)' strokeOpacity='0.4' />
        <path d='M220 14L-2.38419e-06 14' stroke='url(#paint2_linear_5372_59611)' strokeOpacity='0.4' />
        <path d='M220 42L-2.38419e-06 42' stroke='url(#paint3_linear_5372_59611)' strokeOpacity='0.4' />
        <rect x='142' y='14' width='56' height='28' rx='6' fill='var(--card)' />
        <rect x='151' y='25' width='38' height='6' rx='3' fill='var(--card-foreground)' fillOpacity='0.6' />
        <rect x='22' y='14' width='56' height='28' rx='6' fill='var(--card)' />
        <rect x='82' y='14' width='56' height='28' rx='6' fill='var(--primary)' />
        <rect x='91' y='25' width='38' height='6' rx='3' fill='var(--primary-foreground)' />
        <rect x='31' y='25' width='38' height='6' rx='3' fill='var(--card-foreground)' fillOpacity='0.6' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5372_59611'
          x1='22.5'
          y1='3.08924e-06'
          x2='22.4962'
          y2='57'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5372_59611'
          x1='198.5'
          y1='3.08924e-06'
          x2='198.496'
          y2='57'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5372_59611'
          x1='1.1726e-05'
          y1='13.5'
          x2='220'
          y2='13.5571'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5372_59611'
          x1='1.1726e-05'
          y1='41.5'
          x2='220'
          y2='41.5571'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5372_59611'>
          <rect width='220' height='57' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Tabs
