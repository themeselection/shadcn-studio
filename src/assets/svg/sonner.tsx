// React Imports
import type { SVGAttributes } from 'react'

const Sonner = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='198' height='74' viewBox='0 0 198 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5593_579)'>
        <rect x='18' y='16.0002' width='161' height='42' rx='8' fill='var(--card)' />
        <path d='M18 74L18 -1.20699e-06' stroke='url(#paint0_linear_5593_579)' strokeOpacity='0.4' />
        <path d='M179 74L179 -1.20699e-06' stroke='url(#paint1_linear_5593_579)' strokeOpacity='0.4' />
        <rect x='30.5' y='33.0002' width='90' height='8' rx='4' fill='var(--primary)' />
        <path
          d='M164 33L156 41'
          stroke='var(--card-foreground)'
          strokeOpacity='0.6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M156 33L164 41'
          stroke='var(--card-foreground)'
          strokeOpacity='0.6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M198 16L-2.14577e-06 16' stroke='url(#paint2_linear_5593_579)' strokeOpacity='0.4' />
        <path d='M198 58L-2.14577e-06 58' stroke='url(#paint3_linear_5593_579)' strokeOpacity='0.4' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5593_579'
          x1='18.5'
          y1='3.96895e-06'
          x2='18.4935'
          y2='74'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5593_579'
          x1='179.5'
          y1='3.96895e-06'
          x2='179.494'
          y2='74'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5593_579'
          x1='1.05845e-05'
          y1='15.5'
          x2='198'
          y2='15.5463'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5593_579'
          x1='1.05845e-05'
          y1='57.5'
          x2='198'
          y2='57.5463'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5593_579'>
          <rect width='198' height='74' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Sonner
