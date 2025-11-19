// React Imports
import type { SVGAttributes } from 'react'

const Badge = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='126' height='105' viewBox='0 0 126 105' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_5357_51824)'>
        <path d='M126 19L-2.17557e-06 19' stroke='url(#paint0_linear_5357_51824)' strokeOpacity='0.4' />
        <path d='M126 89L-2.17557e-06 89' stroke='url(#paint1_linear_5357_51824)' strokeOpacity='0.4' />
        <path d='M28 105L28 -3.27826e-07' stroke='url(#paint2_linear_5357_51824)' strokeOpacity='0.4' />
        <path d='M98 105L98 -3.27826e-07' stroke='url(#paint3_linear_5357_51824)' strokeOpacity='0.4' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M98 35.6521C103.733 34.2978 108 29.1472 108 23C108 15.8203 102.18 10 95 10C89.2159 10 84.3141 13.7775 82.627 19H36C31.5817 19 28 22.5817 28 27V81C28 85.4183 31.5817 89 36 89H90C94.4183 89 98 85.4183 98 81V35.6521Z'
          fill='var(--card)'
        />
        <path
          d='M95 36C102.18 36 108 30.1797 108 23C108 15.8203 102.18 10 95 10C87.8203 10 82 15.8203 82 23C82 30.1797 87.8203 36 95 36Z'
          fill='var(--primary)'
        />
        <path
          d='M99.9932 26.3369H98.4463V29H95.792V26.3369H90.3076V24.4473L95.9414 16.1504H98.4463V24.2275H99.9932V26.3369ZM95.792 24.2275V22.0479C95.792 21.6846 95.8066 21.1572 95.8359 20.4658C95.8652 19.7744 95.8887 19.373 95.9062 19.2617H95.8359C95.6191 19.7422 95.3584 20.2109 95.0537 20.668L92.6982 24.2275H95.792Z'
          fill='var(--primary-foreground)'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_5357_51824'
          x1='6.73562e-06'
          y1='18.5'
          x2='126'
          y2='18.5187'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5357_51824'
          x1='6.73562e-06'
          y1='88.5'
          x2='126'
          y2='88.5187'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_5357_51824'
          x1='28.5'
          y1='5.61762e-06'
          x2='28.487'
          y2='105'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_5357_51824'
          x1='98.5'
          y1='5.61762e-06'
          x2='98.487'
          y2='105'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_5357_51824'>
          <rect width='126' height='105' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Badge
