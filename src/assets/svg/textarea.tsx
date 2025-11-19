// React Imports
import type { SVGAttributes } from 'react'

const Textarea = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='218' height='166' viewBox='0 0 218 166' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_6770)'>
        <rect x='19' y='23' width='180' height='120' rx='8' fill='var(--card)' />
        <rect x='34' y='38' width='63' height='12' rx='6' fill='var(--primary)' />
        <rect x='34' y='61' width='112' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
        <rect x='34' y='75' width='78' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
        <rect
          x='188'
          y='34'
          width='98'
          height='4'
          rx='2'
          transform='rotate(90 188 34)'
          fill='var(--card-foreground)'
          fillOpacity='0.2'
        />
        <rect x='188' y='71' width='24' height='4' rx='2' transform='rotate(90 188 71)' fill='var(--primary)' />
        <path d='M218 23L-5.60284e-06 23' stroke='url(#paint0_linear_5515_6770)' strokeOpacity='0.4' />
        <path d='M218 143L-5.60284e-06 143' stroke='url(#paint1_linear_5515_6770)' strokeOpacity='0.4' />
        <path d='M19 166L19 -1.78814e-07' stroke='url(#paint2_linear_5515_6770)' strokeOpacity='0.4' />
        <path d='M199 166L199 -1.78814e-07' stroke='url(#paint3_linear_5515_6770)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_6770'
          x1='1.16537e-05'
          y1='22.5'
          x2='218'
          y2='22.5561'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_6770'
          x1='1.16537e-05'
          y1='142.5'
          x2='218'
          y2='142.556'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_6770'
          x1='19.5'
          y1='8.89576e-06'
          x2='19.4675'
          y2='166'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_6770'
          x1='199.5'
          y1='8.89576e-06'
          x2='199.467'
          y2='166'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_6770'>
          <rect width='218' height='166' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Textarea
