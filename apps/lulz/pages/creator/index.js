import { AppLayout } from "@/layouts/AppLayout"
import { CreatorLayout } from "@/layouts/CreatorLayout"
import { Heading, Stack } from "@chakra-ui/react"
import Head from "next/head"

export default function Creator() {
  return (
    <CreatorLayout>
      <Stack gap={4}>
        <Heading>Dashboard</Heading>
      </Stack>
    </CreatorLayout>
  )
}