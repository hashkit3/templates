import { AppLayout } from "@/layouts/AppLayout"
import { CreatorLayout } from "@/layouts/CreatorLayout"
import { Heading, Stack } from "@chakra-ui/react"

export default function Posts() {
  return (
    <CreatorLayout>
      <Stack gap={4}>
        <Heading>My Posts</Heading>
      </Stack>
    </CreatorLayout>
  )
}