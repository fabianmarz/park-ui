import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    color: 'fg.default',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    gap: '2',
    textDecoration: 'underline 0.1em transparent',
    textUnderlineOffset: '0.125em',
    transitionDuration: 'fast',
    transitionProperty: 'text-decoration-color',
    transitionTimingFunction: 'default',
    _hover: {
      textDecorationColor: 'accent.default',
    },
    '& svg': {
      width: '1em',
      height: '1em',
    },
  },
})
