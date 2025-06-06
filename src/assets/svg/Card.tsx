// React Imports
import type { SVGAttributes } from 'react'

const Card = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='206' height='152' viewBox='0 0 206 152' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5515_4400)'>
        <path d='M22.5294 152L22.5294 -4.88758e-06' stroke='url(#paint0_linear_5515_4400)' strokeOpacity='0.4' />
        <path d='M183.471 152L183.471 -4.88758e-06' stroke='url(#paint1_linear_5515_4400)' strokeOpacity='0.4' />
        <path d='M205.823 15.2L0.176422 15.2' stroke='url(#paint2_linear_5515_4400)' strokeOpacity='0.4' />
        <path d='M205.823 136.8L0.176422 136.8' stroke='url(#paint3_linear_5515_4400)' strokeOpacity='0.4' />
        <rect x='22.5294' y='15.2' width='160.941' height='121.6' rx='8' fill='var(--card)' />
        <rect x='34.153' y='111.765' width='137.694' height='16.0941' rx='4' fill='var(--primary)' />
        <rect
          x='34.153'
          y='83.153'
          width='127.859'
          height='7.15294'
          rx='3.57647'
          fill='var(--muted-foreground)'
          fillOpacity='0.2'
        />
        <rect
          x='34.153'
          y='25.9294'
          width='137.694'
          height='50.0706'
          rx='6'
          fill='var(--muted-foreground)'
          fillOpacity='0.2'
        />
        <path
          d='M105.906 47.0902H105.915'
          stroke='var(--muted-foreground)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          x='95.251'
          y='43.2157'
          width='15.498'
          height='15.498'
          rx='3'
          stroke='var(--muted-foreground)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M95.251 53.8706L99.1255 49.9961C100.025 49.1309 101.132 49.1309 102.031 49.9961L106.875 54.8392'
          stroke='var(--muted-foreground)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M104.937 52.9019L105.906 51.9333C106.805 51.0681 107.913 51.0681 108.812 51.9333L110.749 53.8705'
          stroke='var(--muted-foreground)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          x='34.153'
          y='95.6706'
          width='89.4118'
          height='7.15294'
          rx='3.57647'
          fill='var(--muted-foreground)'
          fillOpacity='0.2'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5515_4400'
          x1='23.0294'
          y1='8.15243e-06'
          x2='23.0022'
          y2='152'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5515_4400'
          x1='183.971'
          y1='8.15243e-06'
          x2='183.943'
          y2='152'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5515_4400'
          x1='0.176433'
          y1='14.7'
          x2='205.824'
          y2='14.7499'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5515_4400'
          x1='0.176433'
          y1='136.3'
          x2='205.824'
          y2='136.35'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5515_4400'>
          <rect width='206' height='152' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Card
