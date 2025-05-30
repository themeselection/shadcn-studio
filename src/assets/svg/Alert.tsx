// React Imports
import type { SVGAttributes } from 'react'

const Alert = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='250' height='85' viewBox='0 0 250 85' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51729)'>
        <path d='M35 85L35 3.12924e-06' stroke='url(#paint0_linear_5357_51729)' strokeOpacity='0.4' />
        <path d='M215 85L215 3.12924e-06' stroke='url(#paint1_linear_5357_51729)' strokeOpacity='0.4' />
        <path d='M250 18L-7.56979e-06 18' stroke='url(#paint2_linear_5357_51729)' strokeOpacity='0.4' />
        <path d='M250 66L-7.56979e-06 66' stroke='url(#paint3_linear_5357_51729)' strokeOpacity='0.4' />
        <rect x='35' y='18' width='180' height='48' rx='8' fill='var(--card)' />
        <path
          d='M62 37.6667V41.7633'
          stroke='var(--primary)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M62 45.8337L62 45.8852'
          stroke='var(--primary)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M54.4167 49.5833H69.5834C70.3011 49.5783 70.9698 49.2181 71.3689 48.6216C71.7681 48.025 71.8459 47.2695 71.5767 46.6041L63.885 33.3333C63.5035 32.6436 62.7774 32.2156 61.9892 32.2156C61.201 32.2156 60.475 32.6436 60.0934 33.3333L52.4017 46.6041C52.1378 47.2539 52.2047 47.9911 52.5812 48.5827C52.9577 49.1744 53.5972 49.5472 54.2975 49.5833'
          stroke='var(--primary)'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect x='83.5' y='31' width='60' height='8' rx='4' fill='var(--primary)' />
        <rect x='83.5' y='47' width='90' height='6' rx='3' fill='var(--muted-foreground)' fillOpacity='0.2' />
        <path
          d='M203 28L195 36'
          stroke='var(--muted-foreground)'
          strokeOpacity='0.5'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M195 28L203 36'
          stroke='var(--muted-foreground)'
          strokeOpacity='0.5'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51729'
          x1='35.5'
          y1='4.53022e-06'
          x2='35.4915'
          y2='85'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted)' />
          <stop offset='0.75' stopColor='var(--muted)' />
          <stop offset='1' stopColor='var(--muted)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51729'
          x1='215.5'
          y1='4.53022e-06'
          x2='215.491'
          y2='85'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted)' />
          <stop offset='0.75' stopColor='var(--muted)' />
          <stop offset='1' stopColor='var(--muted)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51729'
          x1='1.33643e-05'
          y1='17.5'
          x2='250'
          y2='17.5737'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted)' />
          <stop offset='0.75' stopColor='var(--muted)' />
          <stop offset='1' stopColor='var(--muted)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5357_51729'
          x1='1.33643e-05'
          y1='65.5'
          x2='250'
          y2='65.5737'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted)' />
          <stop offset='0.75' stopColor='var(--muted)' />
          <stop offset='1' stopColor='var(--muted)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51729'>
          <rect width='250' height='85' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Alert
