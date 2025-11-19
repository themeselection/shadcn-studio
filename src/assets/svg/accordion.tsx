// React Imports
import type { SVGAttributes } from 'react'

const Accordion = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='250' height='160' viewBox='0 0 250 160' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51696)'>
        <path d='M35 160L35 7.98702e-06' stroke='url(#paint0_linear_5357_51696)' strokeOpacity='0.4' />
        <path d='M215 160L215 7.98702e-06' stroke='url(#paint1_linear_5357_51696)' strokeOpacity='0.4' />
        <path d='M250 24L-7.56979e-06 24' stroke='url(#paint2_linear_5357_51696)' strokeOpacity='0.4' />
        <path d='M250 132L-7.56979e-06 132' stroke='url(#paint3_linear_5357_51696)' strokeOpacity='0.4' />
        <rect x='35' y='24' width='180' height='32' rx='8' fill='var(--card)' />
        <rect x='47' y='36' width='83' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.3' />
        <path
          d='M188 37.5L193 42.5L198 37.5'
          stroke='var(--card-foreground)'
          strokeOpacity='0.6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect x='35' y='61' width='180' height='34' rx='8' fill='var(--card)' />
        <rect x='47' y='67' width='63' height='8' rx='4' fill='var(--primary)' />
        <rect x='47' y='83' width='103' height='6' rx='3' fill='var(--card-foreground)' fillOpacity='0.2' />
        <path
          d='M188 75.5L193 80.5L198 75.5'
          stroke='var(--card-foreground)'
          strokeOpacity='0.6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect x='35' y='100' width='180' height='32' rx='8' fill='var(--card)' />
        <rect x='47' y='112' width='50' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.3' />
        <path
          d='M188 113.5L193 118.5L198 113.5'
          stroke='var(--card-foreground)'
          strokeOpacity='0.6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51696'
          x1='35.5'
          y1='8.53131e-06'
          x2='35.4698'
          y2='160'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51696'
          x1='215.5'
          y1='8.53131e-06'
          x2='215.47'
          y2='160'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51696'
          x1='1.33643e-05'
          y1='23.5'
          x2='250'
          y2='23.5737'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5357_51696'
          x1='1.33643e-05'
          y1='131.5'
          x2='250'
          y2='131.574'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51696'>
          <rect width='250' height='160' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Accordion
