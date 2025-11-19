// React Imports
import type { SVGAttributes } from 'react'

const Collapsible = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='208' height='110' viewBox='0 0 208 110' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_4681)'>
        <path d='M18 110L18 22' stroke='url(#paint0_linear_5515_4681)' strokeOpacity='0.4' />
        <path d='M208 37L-3.8743e-06 37' stroke='url(#paint1_linear_5515_4681)' strokeOpacity='0.4' />
        <path d='M208 91L-3.8743e-06 91' stroke='url(#paint2_linear_5515_4681)' strokeOpacity='0.4' />
        <rect x='18' y='37' width='175' height='54' rx='8' fill='var(--card)' />
        <rect x='31' y='50' width='104' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
        <rect x='31' y='71' width='143' height='8' rx='4' fill='var(--primary)' />
        <rect x='18' width='90' height='32' rx='8' fill='var(--primary)' />
        <rect x='34' y='12' width='58' height='8' rx='4' fill='var(--primary-foreground)' />
        <path d='M193 108L193 21' stroke='url(#paint3_linear_5515_4681)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_4681'
          x1='18.5'
          y1='22'
          x2='18.4909'
          y2='110'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_4681'
          x1='1.11191e-05'
          y1='36.5'
          x2='208'
          y2='36.551'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_4681'
          x1='1.11191e-05'
          y1='90.5'
          x2='208'
          y2='90.551'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_4681'
          x1='193.5'
          y1='21'
          x2='193.491'
          y2='108'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_4681'>
          <rect width='208' height='110' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Collapsible
