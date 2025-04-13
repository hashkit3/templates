import { AppLayout } from "@/layouts/AppLayout"
import { Box, Heading, List, ListItem } from "@chakra-ui/react"

export default function Frens() {
  return (
    <AppLayout>
      <Heading>Frens</Heading>
      <List>
        <ListItem>Friend A</ListItem>
        <ListItem>Friend B</ListItem>        
        <ListItem>Friend C</ListItem>
      </List>
    </AppLayout>
  )
}