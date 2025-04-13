import { AppLayout } from "@/layouts/AppLayout"
import { Heading, List, ListItem } from "@chakra-ui/react"
import { useAddress, useCurrentChatData } from "@hash3/react"
import Avatar from "boring-avatars"

export default function Account() {
  const address = useAddress()
  const { username } = useCurrentChatData()

  return (
    <AppLayout>
      <Heading mb={12}>Account</Heading>
      <List spacing={3}>
        <Avatar name={username} size={50} variant="beam" />
        <ListItem><b>Telegram Username:</b> {username}</ListItem>
        <ListItem><b>Address:</b> {address}</ListItem>        
      </List>
    </AppLayout>
  )
}