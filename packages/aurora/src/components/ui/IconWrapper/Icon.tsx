import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { cn } from '@/lib/utils'

export type IconSizeProps =
  | 8
  | 12
  | 16
  | 18
  | 20
  | 22
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 104
  | 128
  | undefined

export type IconName =
  keyof typeof LucideIcons

export type IconProps = {
  name: keyof typeof LucideIcons
  size?: IconSizeProps
  className?: string
  color?: string
  rotate?:
    | '0'
    | '90'
    | '180'
    | '270'
  strokeWidth?: number
}

const Icon: React.FC<
  IconProps
> = ({
  name,
  size = 24,
  className,
  color,
  rotate,
  strokeWidth = 1.33,
  ...props
}) => {
  const LucidIcon =
    LucideIcons[
      name as keyof typeof LucideIcons
    ] as React.ComponentType<LucideProps>

  if (!LucidIcon) {
    console.error(
      `Icon ${name} not found in LucideIcons`,
    )
    return null
  }

  console.log('size: ', size)

  return (
    <LucidIcon
      className={cn(
        `text-${color} rotate-${rotate}`,
        className,
      )}
      size={size}
      style={{
        width: size,
        height: size,
      }}
      strokeWidth={
        strokeWidth
      }
      {...props}
    />
  )
}

export default Icon
