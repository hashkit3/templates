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
      <Stack gap={4}>
        <Heading>Base Build</Heading>
        <Heading>{username}</Heading>
        <Button onClick={wallet.connect}>Connect</Button>
        <Box>{address || 'Not Connected'}</Box>
        <Button onClick={handleTransfer}>Transfer</Button>
        <Button onClick={gram.scanQR}>Scan QR</Button>
        <Button onClick={gram.closeApp}>Close App</Button>
      </Stack>
    </AppLayout>
  )
}