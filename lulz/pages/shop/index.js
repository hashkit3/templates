import { AppLayout } from "@/layouts/AppLayout"
import { Box, Button, Card, Heading, Stack } from "@chakra-ui/react"
import { useTransferMemo } from "@hash3/react"

export default function Shop() {

  const transferMemo = useTransferMemo()

  const handleBuy = async() => {
    await transferMemo.mutateAsync({
      to: 'UQDcFMo3-r32VHFjWvC1SL6OfECqXbzNSLlueUAzI46z_Uy-',
      amount: '0.1',
      memo: 'buy:product:item_id:10000000'
    })
  }

  return (
    <AppLayout>
      <Heading>Shop</Heading>
      <Box p={4} borderWidth={1} rounded="md" _dark={{ borderColor: 'gray.900' }}>
        <Heading>Product A</Heading>
        <Button onClick={handleBuy}>Buy 0.1 TON</Button>
      </Box>
    </AppLayout>
  )
}