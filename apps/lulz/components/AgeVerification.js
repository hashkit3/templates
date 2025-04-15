import { Box, Button, Heading, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import store from 'store'
import { CustomModal } from "./CustomModal"
import { TbAlertHexagon, TbAlertHexagonFilled, TbArrowRight, TbChecks, TbThumbUp } from "react-icons/tb"

export const AgeVerification = () => {
  const [verified, setVerified] = useState(store.get('age-verified', false))

  const handleClose = () => {
    setVerified(true)
  }

  const handleNo = () => {

  }

  return (
    <Box>
      <CustomModal isOpen={!verified} size="full">
        <Stack spacing={4} mt={16}>
          <Heading>Age Verification</Heading>
          <Spacer />
          <Heading size="sm">Are you 18 or older?</Heading>
          <Text>You must be at least 18 years old to create an account and access content on this platform as a Fan or as a Creator</Text>
          <Button onClick={handleClose} leftIcon={<TbThumbUp />}>Yes, I am</Button>
          <Button onClick={handleNo} colorScheme="red" leftIcon={<TbAlertHexagonFilled />}>No, I'm not</Button>
        </Stack>
      </CustomModal>
    </Box>
  )
}