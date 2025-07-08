import React from 'react'
import { AddonPanel } from '@storybook/components'
import { useParameter } from '@storybook/manager-api'
import { Figma } from '@storybook/addon-designs/blocks'

export const CustomAddonPanel: React.FC<{
  active: boolean
  key: string
  title: string
}> = ({
  active,
  key,
  title,
}) => {
  const { url } =
    useParameter(title, {
      url: '',
    })
  return (
    <AddonPanel
      active={active}
      key={key}
    >
      <Figma
        url={url as string}
      />
    </AddonPanel>
  )
}
