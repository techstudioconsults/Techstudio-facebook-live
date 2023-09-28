import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {useForm } from "react-hook-form";
import axios from "axios";
import { Icon } from "@iconify/react";
import RegistrationModal from "../../component/Modal";
import { Link } from "react-router-dom";

const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const toast = useToast({ position: `top` })
  //     const [input, setInput] = useState('')

  //   const handleInputChange = (e) => setInput(e.target.value)

  //   const isError = input === ''

  const  baseUrl= 'https://api.techstudio.academy/api/v1/facebookAd'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleSubmitForm = async (data) => {
    try {
      setIsLoading(true);

      const res = await axios.post(baseUrl, data);
      console.log(res);

      if (res.status === 200) {
        setIsSuccessModalOpen(true);
      } else {
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      setIsErrorModalOpen(true);
    }

    setIsLoading(false);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    reset(); // Clear the form
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };


//   const handleSubmitForm = async (data) => {
//     try {
//       setIsLoading(true);

//       const res = await axios.post(baseUrl, data);
//       console.log(res);
//       toast({
//         title: "Successful",
//         description: " Registration Successful",
//         status: "success",
//         duration: 9000,
//         isClosable: true,
       
//       });
//       if(status===200) {
//         nagivate(`/login`)
//       }
//     } catch(error) {
//       toast({
//         title: "Error!",
//         description: " Registration Unsuccessful",
//         status: "warning",
//         duration: 9000,
//         isClosable: true,
       
//       });
//     }

//     setIsLoading(false);
//   };


  return (
    <Flex justify={`space-between`} align={`center`}>
      <Box>
        <Image
          src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218517/techstudio-web-app/assets/images/authImg_uy00im.webp"
          h={{ lg: `44rem` }}
          w={{ lg: `46.375rem` }}
          objectFit={`cover`}
        />
      </Box>


      <Box
      display={`flex`}
      flexDir={`column`}
      justifyContent={`center`}
      alignItems={`center`}
      m={`0 auto`}
      >

      <Box
        w={{ lg: `37.125rem` }}
        h={{ lg: `35rem` }}
        boxShadow={`2px 2px 10px 2px rgba(0, 0, 0, 0.10)`}
        backgroundColor={`#fff`}
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`flexStart`}
        m={`0 auto`}
        pl={{ lg: `3.06rem` }}
        pt={{ lg: `3.69rem` }}
      >
        <Heading
          fontSize={{ lg: `1.5rem` }}
          fontWeight={600}
          mt={{ lg: `-4rem` }}
          textAlign={`start`}
          mb={{ lg: `1.06rem` }}
        >
          One last step, let’s get to know you
        </Heading>
        <Text
          fontSize={{ lg: `.9375rem` }}
          lineHeight={{ lg: `1.5rem` }}
          mb={{ lg: `3.88rem` }}
        >
          Fill in your details to get started.
        </Text>
        <FormControl
        onSubmit={handleSubmit(handleSubmitForm)}
        as={`form`}
        >
          <Flex justify={`flex-start`} align={`center`} gap={`2rem`}>
            <Box>
              <FormLabel
                fontSize={{ lg: `.875rem` }}
                lineHeight={{ lg: `1.375rem` }}
                fontWeight={600}
                mb={{ lg: `.5rem` }}
                color={`#3E3E3E`}
              >
                First Name
              </FormLabel>
              <Input
                type="text"
                id={`firstName`}
                name={`lastName`}
                {...register("firstName", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                    message: (
                      <Text>
                        Name must start with capital letter, special character is
                        allowed <br /> but optional and it must not end with an
                        hyphen
                      </Text>
                    ),
                  },
                })}
                placeholder="First Name"
                w={{ lg: `14.5625rem` }}
                h={{ lg: `2.5625rem` }}
              />

<span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "1rem   1rem",
              }}
            >
              {errors?.firstName?.message}
            </span>
            </Box>

            <Box>
              <FormLabel
                fontSize={{ lg: `.875rem` }}
                lineHeight={{ lg: `1.375rem` }}
                fontWeight={600}
                mb={{ lg: `.5rem` }}
                color={`#3E3E3E`}
              >
                Last Name
              </FormLabel>
              <Input
                type="text"
                id={`lastName`}
                name={`lastName`}
                {...register("lastName", {
                  required: "Last Name is required",
                  pattern: {
                    value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                    message: (
                      <Text>
                        Name must start with capital letter, special character is
                        allowed <br /> but optional and it must not end with an
                        hyphen
                      </Text>
                    ),
                  },
                })}
                placeholder="Last  Name"
                w={{ lg: `14.5625rem` }}
                h={{ lg: `2.5625rem` }}
              />
               <span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "1rem   1rem",
              }}
            >
              {errors?.lastName?.message}
            </span>
            </Box>
          </Flex>

          <Flex justify={`flex-start`} align={`center`} gap={`1.94rem`}>
            <Box>
              <FormLabel
                fontSize={{ lg: `.875rem` }}
                lineHeight={{ lg: `1.375rem` }}
                fontWeight={600}
                // mt={{ lg: `1.5rem` }}
                mb={{ lg: `.5rem` }}
                color={`#3E3E3E`}
              >
                Your Phone Number
              </FormLabel>
              <Input
                type="tel"
                name={`phoneNumber`}
                {...register("phoneNumber", {
                  required: "Enter phone number",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                    message: "Phone number must not contain text",
                  },
                })}
                placeholder="User type"
                w={{ lg: `14.625rem` }}
                h={{ lg: `2.5625rem` }}
              />
               <span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                translate: "1rem -1rem"
                // margin: ".5rem   1rem",
              }}
            >
              {errors?.phoneNumber?.message}
            </span>
            </Box>

            <Box>
              <FormLabel
                fontSize={{ lg: `.875rem` }}
                lineHeight={{ lg: `1.375rem` }}
                fontWeight={600}
                mb={{ lg: `.5rem` }}
                color={`#3E3E3E`}
              >
                Email
              </FormLabel>
              <Input
                type="email"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                      message: "Email is not valid.",
                    },
                  })}
                placeholder="name@example.com"
                w={{ lg: `14.625rem` }}
                h={{ lg: `2.5625rem` }}
              />
               <span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "1rem   1rem",
              }}
            >
              {errors?.email?.message}
            </span>
            </Box>
          </Flex>
              <Box>
              <Checkbox
          type="checkbox"
          {...register("checkbox", {
            required: "Checkbox section is required",            
            // message: "Checkbox section is required",
            
          })}
            fontSize={{ lg: `.875rem` }}
            lineHeight={{ lg: `1.375rem` }}
            fontWeight={600}
            color={`#3E3E3E`}
          >
            Send me alerts and weekly newletters
          </Checkbox>
              <span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "1rem   1rem",
              }}
            >
              {errors?.checkbox?.message}
            </span>
              </Box>
         
          <Button
            w={{ lg: `31rem` }}
            h={{ lg: `2.625rem` }}
            bgColor={`blue.100`}
            color={`#fff`}
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            gap={{ lg: `.625rem` }}
            p={{ lg: `0.625rem 13.6875rem` }}
            borderRadius={`.3125rem`}
            _hover={{bgColor: `blue.300`, opacity:1}}
            mt={{ lg: `3.56rem` }}
            type={`submit`}
              isLoading={isLoading}
              loadingText="Registering..."
          >
            Register
          </Button>
        </FormControl>
      </Box>

      <Flex
  color={`blue.300`}
  align={`center`}
  gap={{ lg: `2rem` }}
  justify={`space-between`}
  mt={{ lg: `1.94rem` }}
  className="cc-container"
>
    <Link to={"/"}>
  <Text lineHeight={{ lg: `1.8rem` }} letterSpacing={{ lg: `.0125rem` }}>
    &copy; {new Date().getFullYear()} TechStudio Academy
  </Text>
    
    </Link>
  <ul
    style={{
      display: `flex`,
      alignItems: `center`,
      gap: `1rem`,
      listStyle: `none`,
    }}
  >
    <li>
      <a
        target={`_blank`}
        href="https://twitter.com/techstudioacdmy"
        className="text-white cc-link-hover"
      >
        <Icon icon={`fa:twitter`} />
      </a>
    </li>
    <li>
      <a
        target={`_blank`}
        href="https://facebook.com/techstudioacademy"
        className="text-white cc-link-hover "
      >
        <Icon icon={`fa:facebook`} />
      </a>
    </li>
    <li>
      <a
        target={`_blank`}
        href="https://instagram.com/techstudioacademy"
        className="text-white cc-link-hover "
      >
        <Icon icon={`fa:instagram`} />
      </a>
    </li>

    <li>
      <a
        target={`_blank`}
        href="https://linkedin.com/company/tech-studio-academy"
        className="text-white cc-link-hover "
      >
        <Icon icon={`fa:linkedin`} />
      </a>
    </li>
  </ul>
</Flex>

{/* <Modal isOpen={isSuccessModalOpen} onClose={handleSuccessModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Successful</ModalHeader>
          <ModalBody>
            Your registration was successful. You can now log in.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSuccessModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      {/* Error Modal */}
      {/* <Modal isOpen={isErrorModalOpen} onClose={handleErrorModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration Error</ModalHeader>
          <ModalBody>
            Registration was unsuccessful. Please try again later.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleErrorModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      {/* Success Modal */}
      <RegistrationModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
        isSuccess={true}
        isError={false}
      />

      {/* Error Modal */}
      <RegistrationModal
        isOpen={isErrorModalOpen}
        onClose={handleErrorModalClose}
        isSuccess={false}
        isError={true}
      />





      </Box>

      


    </Flex>
  );
};

export default Register;
;
