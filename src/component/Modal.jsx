import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";

const RegistrationModal = ({ isOpen, onClose, isSuccess, isError }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        w={{ lg: `32.9375rem` }}
        h={{ lg: `34.0625rem` }}
        // bg={`blue`}
        display={`flex`}
        alignItems={`center`}
        justifyContent={`center`}
        // alignItems={`center`}
      >
        <ModalHeader>
          {/* {isSuccess ? "Registration Successful" : "Registration Error"} */}
        </ModalHeader>
        <ModalBody >
          {isSuccess ? (
            <Flex flexDir={`column`} justify={`center`} align={`center`} minH={`100vh`}>
              <Image src="https://res.cloudinary.com/dkszgtapy/image/upload/v1695836148/success_mbzuy1.png" />
              <Heading>Your registration was successful!!.</Heading>
              <Text>
                Your details have been received and our Customer Care
                Representative will contact you shortly.
              </Text>
            </Flex>
          ) : (
            <Flex flexDir={`column`} justify={`center`} align={`center`} minH={`100vh`}>
              <Image src="https://res.cloudinary.com/dkszgtapy/image/upload/v1691612867/f6aa748c292967dfccf0921abea475aa_dghyct.gif" />

              <p>Registration was unsuccessful. Please try again later.</p>
            </Flex>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme={isSuccess ? "" : "red"}
            onClick={onClose}
            pos={`relative`}
            top={{lg: `-18rem`}}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegistrationModal;
