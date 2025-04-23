// React Imports
import type { SVGAttributes } from 'react'

const Breadcrumb = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='200' height='50' viewBox='0 0 200 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M200 15L1.07288e-06 15' stroke='url(#paint0_linear_5515_5736)' strokeOpacity='0.4' />
      <path d='M200 29L1.07288e-06 29' stroke='url(#paint1_linear_5515_5736)' strokeOpacity='0.4' />
      <path d='M19 43L19 -2.08616e-06' stroke='url(#paint2_linear_5515_5736)' strokeOpacity='0.4' />
      <path d='M180 43L180 -2.08616e-06' stroke='url(#paint3_linear_5515_5736)' strokeOpacity='0.4' />
      <rect x='19' y='15' width='36' height='14' rx='7' fill='var(--card)' />
      <path
        d='M61.25 18.5L64.75 22L61.25 25.5'
        stroke='var(--primary)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M137.25 18.5L140.75 22L137.25 25.5'
        stroke='var(--primary)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect x='71' y='15' width='58' height='14' rx='7' fill='var(--card)' />
      <rect x='147' y='15' width='33' height='14' rx='7' fill='var(--primary)' />
      <defs>
        <linearGradient
          id='paint0_linear_5515_5736'
          x1='1.06915e-05'
          y1='14.5'
          x2='200'
          y2='14.5472'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_5736'
          x1='1.06915e-05'
          y1='28.5'
          x2='200'
          y2='28.5472'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_5736'
          x1='19.5'
          y1='2.31746e-06'
          x2='19.4978'
          y2='43'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_5736'
          x1='180.5'
          y1='2.31746e-06'
          x2='180.498'
          y2='43'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Breadcrumb
