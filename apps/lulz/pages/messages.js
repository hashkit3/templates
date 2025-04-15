import { AppLayout } from "@/layouts/AppLayout"
import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import { useAddress, useCurrentChatData, useTelegram, useTransfer, useTransferMemo, useWallet } from "@hash3/react"

export default function Message() {
  return (
    <AppLayout>
      <Stack gap={4}>
        <Heading>Messages</Heading>
      </Stack>
    </AppLayout>
  )
}