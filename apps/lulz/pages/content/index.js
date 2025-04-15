import { AppLayout } from "@/layouts/AppLayout"
import { Heading, Stack } from "@chakra-ui/react"

export default function Content() {
  return (
    <AppLayout>
      <Stack gap={4}>
        <Heading>Unlocked Content</Heading>
      </Stack>
    </AppLayout>
  )
}