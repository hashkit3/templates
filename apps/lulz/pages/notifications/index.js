import { AppLayout } from "@/layouts/AppLayout"
import { Heading, Stack } from "@chakra-ui/react"

export default function Notifications() {
  return (
    <AppLayout>
      <Stack gap={4}>
        <Heading>Notifications</Heading>
      </Stack>
    </AppLayout>
  )
}