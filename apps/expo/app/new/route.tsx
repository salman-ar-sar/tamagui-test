import { NewRouteScreen } from 'app/features/new/route'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'New Route',
        }}
      />
      <NewRouteScreen />
    </>
  )
}
