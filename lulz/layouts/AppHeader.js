import { HStack, IconButton, Image, Spacer, Text } from "@chakra-ui/react"
import { useAddress, useChatData, useCurrentChatData, useUser, useWallet } from "@hash3/react"
import Avatar from "boring-avatars"
import Link from "next/link"
import { TbLogout, TbWallet, TbWalletOff } from "react-icons/tb"

export const AppHeader = ({ children }) => {
  const { username } = useCurrentChatData()
  const wallet = useWallet()
  const address = useAddress()

  return (
    <HStack px={6} pt={4}>
      <Link href="/">
        <Image src="/logo-2.svg" rounded="full" boxSize={34} />
      </Link>
      <Spacer />
      {
        username && (
          <Link href="/account">
            <HStack variant="ghost" size="sm" fontWeight="bold" gap={2}>
              <Avatar size={24} name={username} variant="beam" />
              <Text fontSize="sm">{username}</Text>
              {
                address
                ? <IconButton size="sm" icon={<TbWalletOff />} onClick={wallet.disconnect} />
                : <IconButton size="sm" icon={<TbWallet />} onClick={wallet.connect} />
              }
              
            </HStack>
          </Link>
        )
      }
      {children}
    </HStack>    
  )  
}