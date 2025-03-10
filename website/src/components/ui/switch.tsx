import { forwardRef } from 'react'
import { Switch as ArkSwitch } from '~/components/ui/primitives'

export interface SwitchProps extends ArkSwitch.RootProps {}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const { children, ...rootProps } = props

  return (
    <ArkSwitch.Root ref={ref} {...rootProps}>
      <ArkSwitch.Control>
        <ArkSwitch.Thumb />
      </ArkSwitch.Control>
      {children && <ArkSwitch.Label>{children}</ArkSwitch.Label>}
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
})

Switch.displayName = 'Switch'
