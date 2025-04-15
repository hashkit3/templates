import { AgeVerification } from "@/components/AgeVerification"
import { AppLayout } from "@/layouts/AppLayout"
import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import { useAddress, useCurrentChatData, useTelegram, useTransfer, useTransferMemo, useWallet } from "@hash3/react"

export default function Home() {
  const wallet = useWallet()
  const address = useAddress()
  const transfer = useTransfer()
  const transferMemo = useTransferMemo()
  const { username } = useCurrentChatData()
  const gram = useTelegram()

  const handleTransfer = async() => {
    await transfer.mutateAsync({ 
      to: "", 
      amount: "0.1" // 
    })
  }

  const handleTransferMemo = async() => {
    await transferMemo.mutateAsync({
      to: "",
      amount: "0.1",
      memo: ""
    })
  }

  return (
    <AppLayout>
      <AgeVerification />
      <Stack gap={4}>
        <Heading>Home</Heading>
      </Stack>
    </AppLayout>
  )
}