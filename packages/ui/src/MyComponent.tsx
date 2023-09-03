import { styled, YStack } from 'tamagui'

export const MyComponent = styled(YStack, {
  name: 'MyComponent',

  variants: {
    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
    red: {
      true: {
        backgroundColor: 'red',
      },
    },
  } as const,
})
