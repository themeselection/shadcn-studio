// React Imports
import type { SVGAttributes } from 'react'

const Select = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='230' height='88' viewBox='0 0 230 88' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_6740)'>
        <rect x='25' y='20' width='180' height='48' rx='8' fill='var(--card)' />
        <rect x='42.5' y='40' width='70' height='8' rx='4' fill='var(--primary)' />
        <path
          d='M179 41.5L184 46.5L189 41.5'
          stroke='var(--muted-foreground)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M25 88L25 -9.53674e-07' stroke='url(#paint0_linear_5515_6740)' strokeOpacity='0.4' />
        <path d='M205 88L205 -9.53674e-07' stroke='url(#paint1_linear_5515_6740)' strokeOpacity='0.4' />
        <path d='M230 20L-4.11272e-06 20' stroke='url(#paint2_linear_5515_6740)' strokeOpacity='0.4' />
        <path d='M230 68L-4.11272e-06 68' stroke='url(#paint3_linear_5515_6740)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_6740'
          x1='25.5'
          y1='4.7261e-06'
          x2='25.4909'
          y2='88.0001'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_6740'
          x1='205.5'
          y1='4.7261e-06'
          x2='205.491'
          y2='88.0001'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_6740'
          x1='1.22952e-05'
          y1='19.5'
          x2='230'
          y2='19.5624'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_6740'
          x1='1.22952e-05'
          y1='67.5'
          x2='230'
          y2='67.5624'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_6740'>
          <rect width='230' height='88' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Select
