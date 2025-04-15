import { AppLayout } from "@/layouts/AppLayout"
import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import { useAddress, useCurrentChatData, useTelegram, useTransfer, useTransferMemo, useWallet } from "@hash3/react"

export default function Feed() {
  return (
    <AppLayout>
      <Stack gap={4}>
        <Heading>Feed</Heading>
      </Stack>
    </AppLayout>
  )
}