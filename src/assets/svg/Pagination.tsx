// React Imports
import type { SVGAttributes } from 'react'

const Tabs = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='214' height='62' viewBox='0 0 214 62' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51879)'>
        <path d='M24 62L24 1.75834e-06' stroke='url(#paint0_linear_5357_51879)' strokeOpacity='0.4' />
        <path d='M190 62L190 1.75834e-06' stroke='url(#paint1_linear_5357_51879)' strokeOpacity='0.4' />
        <path d='M214 16L5.78165e-06 16' stroke='url(#paint2_linear_5357_51879)' strokeOpacity='0.4' />
        <path d='M214 46L5.78165e-06 46' stroke='url(#paint3_linear_5357_51879)' strokeOpacity='0.4' />
        <ellipse cx='39' cy='31' rx='15' ry='15' fill='var(--card)' />
        <ellipse cx='73' cy='31' rx='15' ry='15' fill='var(--primary)' />
        <ellipse cx='141' cy='31' rx='15' ry='15' fill='var(--card)' />
        <ellipse cx='107' cy='31' rx='15' ry='15' fill='var(--card)' />
        <ellipse cx='175' cy='31' rx='15' ry='15' fill='var(--card)' />
        <path
          d='M41.25 35.5L36.75 31L41.25 26.5'
          stroke='var(--card-foreground)'
          strokeOpacity='0.6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M172.75 35.5L177.25 31L172.75 26.5'
          stroke='var(--card-foreground)'
          strokeOpacity='0.6'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51879'
          x1='24.5'
          y1='3.33621e-06'
          x2='24.4955'
          y2='62'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51879'
          x1='190.5'
          y1='3.33621e-06'
          x2='190.495'
          y2='62'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51879'
          x1='1.14399e-05'
          y1='15.5'
          x2='214'
          y2='15.554'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5357_51879'
          x1='1.14399e-05'
          y1='45.5'
          x2='214'
          y2='45.554'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51879'>
          <rect width='214' height='62' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Tabs
