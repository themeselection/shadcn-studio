// React Imports
import type { SVGAttributes } from 'react'

const Dropdown = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='178' height='152' viewBox='0 0 178 152' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51872)'>
        <path d='M18 152L18 18' stroke='url(#paint0_linear_5357_51872)' strokeOpacity='0.4' />
        <path d='M161 152L161 18' stroke='url(#paint1_linear_5357_51872)' strokeOpacity='0.4' />
        <path d='M178 37L1.3113e-06 37' stroke='url(#paint2_linear_5357_51872)' strokeOpacity='0.4' />
        <path d='M178 133L1.3113e-06 133' stroke='url(#paint3_linear_5357_51872)' strokeOpacity='0.4' />
        <rect x='18' y='37' width='143' height='96' rx='8' fill='var(--card)' />
        <rect x='31' y='50' width='86' height='8' rx='4' fill='var(--muted-foreground)' fillOpacity='0.2' />
        <rect x='31' y='71' width='118' height='8' rx='4' fill='var(--primary)' />
        <rect x='31' y='92' width='43' height='8' rx='4' fill='var(--muted-foreground)' fillOpacity='0.2' />
        <rect x='31' y='113' width='79' height='8' rx='4' fill='var(--muted-foreground)' fillOpacity='0.2' />
        <rect x='45' width='90' height='32' rx='8' fill='var(--primary)' />
        <rect x='61' y='12' width='58' height='8' rx='4' fill='var(--primary-foreground)' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51872'
          x1='18.5'
          y1='18'
          x2='18.4788'
          y2='152'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51872'
          x1='161.5'
          y1='18'
          x2='161.479'
          y2='152'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51872'
          x1='9.51539e-06'
          y1='36.5'
          x2='178'
          y2='36.5374'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5357_51872'
          x1='9.51539e-06'
          y1='132.5'
          x2='178'
          y2='132.537'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51872'>
          <rect width='178' height='152' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Dropdown
