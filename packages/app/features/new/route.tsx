import { Button, Paragraph } from '@my/ui'
import { CustomCircle, MyComponent } from '@my/ui/src'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { useLink } from 'solito/link'

export function NewRouteScreen() {
  const link = useLink({
    href: '/',
  })

  return (
    <MyComponent f={1} centered space>
      <Paragraph ta="center" fow="700">
        New route
      </Paragraph>
      <Button {...link} icon={ChevronLeft} backgroundColor={'$blue10Dark'}>
        Go Home
      </Button>
      <CustomCircle size={'$12'} bg={'$red10Light'} pin="top" />
    </MyComponent>
  )
}
