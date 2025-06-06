// React Imports
import type { SVGAttributes } from 'react'

const ButtonGroup = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='212' height='72' viewBox='0 0 212 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51843)'>
        <path d='M212 19L2.563e-06 19' stroke='url(#paint0_linear_5357_51843)' strokeOpacity='0.4' />
        <path d='M212 53L2.563e-06 53' stroke='url(#paint1_linear_5357_51843)' strokeOpacity='0.4' />
        <path d='M17 72L17 2.98023e-08' stroke='url(#paint2_linear_5357_51843)' strokeOpacity='0.4' />
        <path d='M197 72L197 2.98023e-08' stroke='url(#paint3_linear_5357_51843)' strokeOpacity='0.4' />
        <path
          d='M137 19H189C193.418 19 197 22.5817 197 27V45C197 49.4183 193.418 53 189 53H137V19Z'
          fill='var(--card)'
        />
        <rect x='148' y='34' width='38' height='6' rx='3' fill='var(--primary)' />
        <path d='M17 27C17 22.5817 20.5817 19 25 19H77V53H25C20.5817 53 17 49.4183 17 45V27Z' fill='var(--card)' />
        <rect x='77' y='19' width='60' height='34' fill='var(--card)' />
        <rect x='88' y='34' width='38' height='6' rx='3' fill='var(--primary)' />
        <rect x='28' y='34' width='38' height='6' rx='3' fill='var(--primary)' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51843'
          x1='1.13329e-05'
          y1='18.5'
          x2='212'
          y2='18.553'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51843'
          x1='1.13329e-05'
          y1='52.5'
          x2='212'
          y2='52.553'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51843'
          x1='17.5'
          y1='3.82707e-06'
          x2='17.4939'
          y2='72'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5357_51843'
          x1='197.5'
          y1='3.82707e-06'
          x2='197.494'
          y2='72'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51843'>
          <rect width='212' height='72' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ButtonGroup
