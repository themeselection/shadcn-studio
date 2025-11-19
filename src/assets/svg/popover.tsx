// React Imports
import type { SVGAttributes } from 'react'

const Popover = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='208' height='106' viewBox='0 0 208 106' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_5936)'>
        <path d='M18 88L18 -9.53674e-07' stroke='url(#paint0_linear_5515_5936)' strokeOpacity='0.4' />
        <path d='M208 15L-3.8743e-06 15' stroke='url(#paint1_linear_5515_5936)' strokeOpacity='0.4' />
        <path d='M208 69L-3.8743e-06 69' stroke='url(#paint2_linear_5515_5936)' strokeOpacity='0.4' />
        <rect x='18' y='15' width='175' height='54' rx='8' fill='var(--card)' />
        <rect x='31' y='29' width='104' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
        <rect x='31' y='48' width='143' height='8' rx='4' fill='var(--primary)' />
        <rect x='88' y='74' width='34' height='32' rx='8' fill='var(--primary)' />
        <rect x='97' y='86' width='16' height='8' rx='4' fill='var(--primary-foreground)' />
        <path d='M193 86L193 -1' stroke='url(#paint3_linear_5515_5936)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_5936'
          x1='18.5'
          y1='4.72633e-06'
          x2='18.4909'
          y2='88.0001'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_5936'
          x1='1.11191e-05'
          y1='14.5'
          x2='208'
          y2='14.551'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_5936'
          x1='1.11191e-05'
          y1='68.5'
          x2='208'
          y2='68.551'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_5936'
          x1='193.5'
          y1='-0.999995'
          x2='193.491'
          y2='86.0001'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_5936'>
          <rect width='208' height='106' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Popover
