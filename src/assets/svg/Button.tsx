// React Imports
import type { SVGAttributes } from 'react'

const Button = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='178' height='86' viewBox='0 0 178 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51831)'>
        <path d='M25 86L25 -4.17233e-06' stroke='url(#paint0_linear_5357_51831)' strokeOpacity='0.4' />
        <path d='M153 86L153 -4.17233e-06' stroke='url(#paint1_linear_5357_51831)' strokeOpacity='0.4' />
        <path d='M178 18L1.3113e-06 18' stroke='url(#paint2_linear_5357_51831)' strokeOpacity='0.4' />
        <path d='M178 69L1.3113e-06 69' stroke='url(#paint3_linear_5357_51831)' strokeOpacity='0.4' />
        <rect x='25' y='18' width='128' height='51' rx='8' fill='var(--primary)' />
        <rect x='49' y='38' width='80' height='10' rx='5' fill='var(--primary-foreground)' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51831'
          x1='25.5'
          y1='4.57547e-06'
          x2='25.4913'
          y2='86'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51831'
          x1='153.5'
          y1='4.57547e-06'
          x2='153.491'
          y2='86'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51831'
          x1='9.51539e-06'
          y1='17.5'
          x2='178'
          y2='17.5374'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5357_51831'
          x1='9.51539e-06'
          y1='68.5'
          x2='178'
          y2='68.5374'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51831'>
          <rect width='178' height='86' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Button
