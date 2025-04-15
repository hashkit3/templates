import { Box, Center, Spinner, Text } from '@chakra-ui/react'
import { useGram, useTelegramFullscreen, useTelegramSetup } from '@hash3/react'

export const GramLayout = ({ children, theme, message = 'Loading Telegram SDK' }) => {
  const gram = useGram()
  useTelegramFullscreen()

  return (
    <Box
      bgSize="16px 16px"
      bgPos="0 0, 8px 8px"
      bgGradient="linear-gradient(45deg, #eee 25%, transparent 0, transparent 75%,#eee 0),linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0)"
      _dark={{
        bgGradient: 'linear-gradient(45deg, #111 25%, transparent 0, transparent 75%, #111 0),linear-gradient(45deg,#111 25%,transparent 0,transparent 75%,#111 0)',
      }}
      {...theme?.outer}>
      <Box
        as="main"
        id="main"
        maxW="container.sm"
        pos="relative"
        h="100vh"
        mx="auto"
        overflowY="auto"
        shadow="lg"
        bg="white"
        _dark={{ bg: 'black' }}
        {...theme?.main}>
        { !gram && <Center h="100vh" fontSize="sm" gap={3}><Spinner /><Text>{message}</Text></Center> }
        { gram && children }
      </Box>
    </Box>
  )
}