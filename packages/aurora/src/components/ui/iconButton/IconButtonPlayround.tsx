import { IconButton } from '@/components/ui/iconButton/IconButton'
import {
  iconButtonSizeProps,
  iconButtonVariantProps,
} from './iconButtonPropsConst'
import { Button } from '../button/Button'
import Icon from '@/components/ui/IconWrapper/Icon'

export const IconButtonPlayround =
  ({
    size,
  }: {
    size: iconButtonSizeProps
  }) => {
    return (
      <>
        <div>
          <div>
            <Button className="bg-test-primary text-white">
              Primary
            </Button>
            <Button className="bg-test-secondary text-white">
              Secondary
            </Button>
            <Button className="bg-test-tertiary text-white">
              Tertiary
            </Button>
          </div>
          <div className="flex items-center gap-12">
            <span>
              {size}
            </span>
            <div className="flex flex-col gap-4 p-8">
              {/* Primary */}
              <span className="text-foreground-high">
                Primary
              </span>
              <IconButton
                icon={
                  <Icon
                    name="ArrowDown"
                    size={16}
                  />
                }
                size={size}
                className="col-span-3"
              />
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
              />
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
              />
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
              />
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
                disabled
              />
              <IconButton
                size={size}
                className="col-span-3"
                loading
                icon={{
                  name: 'Atom',
                }}
              />
            </div>

            {/* Secondary */}
            <div className="flex flex-col gap-4 p-8">
              <span className="text-foreground-high">
                Secondary
              </span>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                disabled
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                loading
              />
            </div>

            {/* Outline */}
            <div className="flex flex-col gap-4 p-8">
              <span className="text-foreground-high">
                Outline
              </span>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                disabled
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                loading
              />
            </div>

            {/* Ghost */}
            <div className="flex flex-col gap-4 p-8">
              <span className="text-foreground-high">
                Ghost
              </span>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                disabled
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                loading
              />
            </div>
          </div>
        </div>

        <div className="bg-[#011934] w-fit">
          <div className="flex items-center gap-12">
            <span>
              {size}
            </span>
            <div className="flex flex-col gap-4 p-8">
              {/* Default */}
              <span className="text-inv-foreground-high">
                Default
              </span>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
                disabled
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                size={size}
                className="col-span-3"
                loading
                inverse
              />
            </div>

            {/* Secondary */}
            <div className="flex flex-col gap-4 p-8">
              <span className="text-inv-foreground-high">
                Secondary
              </span>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                disabled
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.SECONDARY
                }
                size={size}
                className="col-span-3"
                loading
                inverse
              />
            </div>

            {/* outline */}
            <div className="flex flex-col gap-4 p-8">
              <span className="text-inv-foreground-high">
                outline
              </span>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                disabled
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.OUTLINE
                }
                size={size}
                className="col-span-3"
                loading
                inverse
              />
            </div>

            {/* Ghost */}
            <div className="flex flex-col gap-4 p-8">
              <span className="text-inv-foreground-high">
                Ghost
              </span>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                disabled
                inverse
              >
                Button
              </IconButton>
              <IconButton
                icon={{
                  name: 'Atom',
                }}
                variant={
                  iconButtonVariantProps.GHOST
                }
                size={size}
                className="col-span-3"
                loading
                inverse
              />
            </div>
          </div>
        </div>
      </>
    )
  }
