// React Imports
import type { SVGAttributes } from 'react'

const Switch = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='147' height='103' viewBox='0 0 147 103' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_6745)'>
        <rect x='22' y='24' width='100' height='56' rx='28' fill='var(--primary)' />
        <rect x='73' y='32' width='40' height='40' rx='20' fill='var(--primary-foreground)' />
        <path d='M147 24L-3.00001 24' stroke='url(#paint0_linear_5515_6745)' strokeOpacity='0.4' />
        <path d='M22 103L22 -3.54648e-06' stroke='url(#paint1_linear_5515_6745)' strokeOpacity='0.4' />
        <path d='M122 103L122 -3.54648e-06' stroke='url(#paint2_linear_5515_6745)' strokeOpacity='0.4' />
        <path d='M147 80L-3.00001 80' stroke='url(#paint3_linear_5515_6745)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_6745'
          x1='-2.99999'
          y1='23.5'
          x2='147'
          y2='23.5265'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_6745'
          x1='22.5'
          y1='5.48276e-06'
          x2='22.4875'
          y2='103'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_6745'
          x1='122.5'
          y1='5.48276e-06'
          x2='122.487'
          y2='103'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_6745'
          x1='-2.99999'
          y1='79.5'
          x2='147'
          y2='79.5265'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_6745'>
          <rect width='147' height='103' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Switch
