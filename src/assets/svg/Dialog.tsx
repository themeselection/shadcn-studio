// React Imports
import type { SVGAttributes } from 'react'

const Dialog = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='230' height='150' viewBox='0 0 230 150' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51857)'>
        <path d='M25 150L25 -8.10623e-06' stroke='url(#paint0_linear_5357_51857)' strokeOpacity='0.4' />
        <path d='M205 150L205 -8.10623e-06' stroke='url(#paint1_linear_5357_51857)' strokeOpacity='0.4' />
        <path d='M230 20L-4.11272e-06 20' stroke='url(#paint2_linear_5357_51857)' strokeOpacity='0.4' />
        <path d='M230 130L-4.11272e-06 130' stroke='url(#paint3_linear_5357_51857)' strokeOpacity='0.4' />
        <rect x='25' y='20' width='180' height='110' rx='8' fill='var(--card)' />
        <rect x='39' y='35' width='80' height='10' rx='5' fill='var(--primary)' />
        <rect x='143' y='102' width='50' height='18' rx='4' fill='var(--primary)' />
        <rect x='86' y='102' width='50' height='18' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
        <rect x='39' y='58' width='143' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
        <rect x='39' y='72' width='100' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51857'
          x1='25.5'
          y1='8.04235e-06'
          x2='25.4735'
          y2='150'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51857'
          x1='205.5'
          y1='8.04235e-06'
          x2='205.473'
          y2='150'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51857'
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
          id='paint3_linear_5357_51857'
          x1='1.22952e-05'
          y1='129.5'
          x2='230'
          y2='129.562'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51857'>
          <rect width='230' height='150' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Dialog
