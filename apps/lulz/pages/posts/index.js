import { AppLayout } from "@/layouts/AppLayout"
import { Heading, Stack } from "@chakra-ui/react"

export default function Posts() {
  return (
    <AppLayout>
      <Stack gap={4}>
        <Heading>Posts</Heading>
      </Stack>
    </AppLayout>
  )
}