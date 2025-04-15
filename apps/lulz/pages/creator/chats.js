import { AppLayout } from "@/layouts/AppLayout"
import { CreatorLayout } from "@/layouts/CreatorLayout"
import { Heading, Stack } from "@chakra-ui/react"

export default function Chats() {
  return (
    <CreatorLayout>
      <Stack gap={4}>
        <Heading>Chats</Heading>
      </Stack>
    </CreatorLayout>
  )
}