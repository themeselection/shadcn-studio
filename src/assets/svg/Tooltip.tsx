// React Imports
import type { SVGAttributes } from 'react'

const Tooltip = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='164' height='98' viewBox='0 0 164 98' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_5964)'>
        <path d='M18 67L18 8.9407e-07' stroke='url(#paint0_linear_5515_5964)' strokeOpacity='0.4' />
        <path d='M164 15L-3.39746e-06 15' stroke='url(#paint1_linear_5515_5964)' strokeOpacity='0.4' />
        <path d='M164 51L-3.39746e-06 51' stroke='url(#paint2_linear_5515_5964)' strokeOpacity='0.4' />
        <path
          d='M18 23C18 18.5817 21.5817 15 26 15H139C143.418 15 147 18.5817 147 23V43C147 47.4183 143.418 51 139 51H97.6007C95.757 51 93.9699 51.6368 92.5417 52.8027L87.559 56.8702C84.6146 59.2738 80.3854 59.2738 77.441 56.8702L72.4583 52.8027C71.0301 51.6368 69.243 51 67.3993 51H26C21.5817 51 18 47.4183 18 43V23Z'
          fill='var(--card)'
        />
        <rect x='31' y='29' width='104' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
        <rect x='66' y='65' width='34' height='32' rx='8' fill='var(--primary)' />
        <rect x='75' y='77' width='16' height='8' rx='4' fill='var(--primary-foreground)' />
        <path d='M147 65L147 -1' stroke='url(#paint3_linear_5515_5964)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_5964'
          x1='18.5'
          y1='3.59852e-06'
          x2='18.4947'
          y2='67'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_5964'
          x1='8.76699e-06'
          y1='14.5'
          x2='164'
          y2='14.5317'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_5964'
          x1='8.76699e-06'
          y1='50.5'
          x2='164'
          y2='50.5317'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_5964'
          x1='147.5'
          y1='-0.999996'
          x2='147.495'
          y2='65'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_5964'>
          <rect width='164' height='98' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Tooltip
