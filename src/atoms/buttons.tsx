import React, { ReactNode } from 'react'

const sizeMap = {
  small: 'text-sm',
  base: 'text-base',
  large: ' text-base md:text-lg',
  xl: ' text-base md:text-xl',
  xxl: ' text-xl xl:text-2xl',
  '3xl': ' text-xl md:text-2xl xl:text-3xl',
}

type MasterBtnProps<T extends 'submit' | 'button'> = {
  text: string
  size: keyof typeof sizeMap
  type: T
  isDisabled?: boolean
  onClick?: T extends 'submit' ? never : () => void
}

export function MasterBtn<T extends 'submit' | 'button'>({
  type,
  text,
  size,
  children,
  variant = 'dark',
  isDisabled,
  ...rest
}: MasterBtnProps<T> & { children?: ReactNode; variant?: 'light' | 'dark' }) {
  const sizeClass: string = sizeMap[size]

  const variantClass =
    variant === 'light'
      ? 'border-white hover:bg-white hover:text-darkGreen text-white '
      : ' border-darkGreen hover:bg-darkGreen hover:text-white text- darkGreen '
  return (
    <button
      disabled={isDisabled}
      {...rest}
      type={type === 'button' ? 'button' : 'submit'}
      className={`${sizeClass} ${variantClass} border-1 border-solid  rounded-full flex items-center gap-3  py-3 pr-3 pl-6 transition-colors  duration-500 ease-in-out   font-medium capitalize group`}
    >
      {text}
      {children}
    </button>
  )
}
