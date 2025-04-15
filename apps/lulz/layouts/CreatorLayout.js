import { Box } from "@chakra-ui/react"
import { useTelegramFullscreen, useTelegramLogin } from "@hash3/react"
import { motion } from "framer-motion"
import { AppHeader } from "./AppHeader"
import { GramLayout } from "@/components/GramLayout"
import { FixedHeader } from "@/components/FixedHeader"
import { FixedFooter } from "@/components/FixedFooter"
import { NavBar } from "@/components/NavBar"
import { TbArrowsExchange, TbArrowsExchange2, TbBell, TbBolt, TbBuildingCircus, TbCarouselVertical, TbCategory, TbCherry, TbCoins, TbContainer, TbDashboard, TbHome, TbListCheck, TbLockOpen, TbMessage, TbPhotoVideo, TbShoppingBag, TbSparkles, TbStar, TbSwitch, TbSwitchHorizontal, TbTimeline, TbUserHexagon, TbUsers } from 'react-icons/tb'

export const CreatorLayout = ({ children, footer }) => {
  useTelegramLogin()

  const navs = [
    {
      key: 'home',
      url: '/creator',
      // label: 'Home',
      icon: <TbBolt fontSize={24} />
    },
    {
      key: 'posts',
      url: '/creator/posts',
      // label: 'Posts',
      icon: <TbCarouselVertical fontSize={24} />
    },       
    {
      key: 'contents',
      url: '/creator/contents',
      // label: 'Content',
      icon: <TbPhotoVideo fontSize={24} />
    },
    // {
    //   key: 'notifications',
    //   url: '/notifications',
    //   label: 'Notifications',
    //   icon: <TbBell fontSize={24} />
    // },
    {
      key: 'chats',
      url: '/creator/chats',
      // label: 'Chats',
      icon: <TbMessage fontSize={24} />
    },  
    {
      key: 'earn',
      url: '/creator/earn',
      // label: 'Chats',
      icon: <TbCoins fontSize={24} />
    },      
    {
      key: 'fan',
      url: '/',
      // label: 'Fan',
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
