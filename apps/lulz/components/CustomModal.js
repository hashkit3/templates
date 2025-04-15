import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

export const CustomModal = ({ header, footer, onClose, children, theme, contentProps, ...props }) => {  
  return (
    <Modal onClose={onClose} {...props}>
      <ModalOverlay {...theme?.overlay} />
      <ModalContent pt={50} _dark={{ bg: 'black' }} overflow="hidden" {...contentProps} {...theme?.content}>
        { header && <ModalHeader {...theme?.header}>{header}</ModalHeader> }
        { onClose && <ModalCloseButton {...theme?.close} /> }
        <ModalBody  {...theme?.body}>{children}</ModalBody>
        { footer && <ModalFooter {...theme?.footer}>{footer}</ModalFooter> }
      </ModalContent>
    </Modal>
  )
}