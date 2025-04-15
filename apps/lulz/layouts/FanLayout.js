import { Box } from "@chakra-ui/react"
import { useTelegramFullscreen, useTelegramLogin } from "@hash3/react"
import { motion } from "framer-motion"
import { AppHeader } from "./AppHeader"
import { GramLayout } from "@/components/GramLayout"
import { FixedHeader } from "@/components/FixedHeader"
import { FixedFooter } from "@/components/FixedFooter"
import { NavBar } from "@/components/NavBar"
import { TbArrowsExchange, TbArrowsExchange2, TbBell, TbBuildingCircus, TbHome, TbLockOpen, TbMessage, TbShoppingBag, TbSparkles, TbStar, TbSwitch, TbSwitchHorizontal, TbUserHexagon, TbUsers } from 'react-icons/tb'

export const FanLayout = ({ children, footer }) => {
  useTelegramLogin()

  const navs = [
    {
      key: 'home',
      url: '/',
      label: 'Home',
      icon: <TbHome fontSize={24} />
    },
    {
      key: 'feed',
      url: '/feed',
      label: 'Feed',
      icon: <TbStar fontSize={24} />
    },       
    {
      key: 'content',
      url: '/content',
      label: 'Content',
      icon: <TbLockOpen fontSize={24} />
    },
    // {
    //   key: 'notifications',
    //   url: '/notifications',
    //   label: 'Notifications',
    //   icon: <TbBell fontSize={24} />
    // },
    {
      key: 'messages',
      url: '/messages',
      label: 'Messages',
      icon: <TbMessage fontSize={24} />
    },  
    {
      key: 'creator',
      url: '/creator',
      label: 'Creator',
      icon: <TbSwitchHorizontal fontSize={24} />,
    },        
  ]  

  return (
    <GramLayout>
      <FixedHeader backdropFilter="blur(30px)">
        <AppHeader />
      </FixedHeader>
      <Box bg="white" as={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} px={4} _dark={{ bg: 'black' }}> 
        { children }
      </Box>
      <FixedFooter>
        { footer && footer }
        <NavBar 
          navs={navs}
          />
      </FixedFooter>
    </GramLayout>
  )
}
