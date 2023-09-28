import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <Box
      bgColor={`blue.300`}
      h={{ lg: `26.5625rem` }}
      pt={{ lg: `4rem` }}
      pb={{ lg: `3.5rem` }}
    >
      <Box
        className="cc-container"
        borderBottom={`1px solid #fff`}
        pb={{ lg: `3.69rem` }}
      >
        <Grid
          templateColumns={`repeat(4, 1fr)`}
          fontSize={{ lg: `.875rem` }}
          color={`#fff`}
          // alignItems={`center`}
          // justifyContent={`start`}
        >
          <GridItem>
            <Image
              src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218525/techstudio-web-app/assets/images/logo_white_text_new_2_fmjlzq.png"
              //   alt=""
              //   style={{ width: `200px`, height: `200px`, objectFit: `contain` }}
            />
            <Text mt={{ lg: `1.14rem` }}>
              1, Ogunlesi Street, Awoyokun Bus Stop, Onipanu, Lagos.
            </Text>
          </GridItem>

          <GridItem>
            <Heading color={`#fff`} fontSize={{ lg: `1rem` }}>
              Courses
            </Heading>
            <Text mt={{ lg: `1.14rem` }}>Front End Development</Text>
            <Text my={{ lg: `.75rem` }}>Android Development</Text>
            <Text>UI/UX Design</Text>
            <Text my={{ lg: `.75rem` }}>Full Stack Development</Text>
            <Text>Data Science</Text>
          </GridItem>
          <GridItem>
            <Heading color={`#fff`} fontSize={{ lg: `1rem` }}>
              About Us
            </Heading>
            <Text my={{ lg: `.75rem` }}>Blog</Text>
            <Text>Partnership</Text>
            <Text my={{ lg: `.75rem` }}>FAQs</Text>
            <Text>Privacy Policy</Text>
            <Text my={{ lg: `.75rem` }}>Contact Us</Text>
          </GridItem>
          <GridItem>
            <Heading
              color={`#fff`}
              fontSize={{ lg: `1rem` }}
              mb={{ lg: `.88rem` }}
            >
              Subscribe to our newsletter
            </Heading>
            <FormControl pos={`relative`}>
              <Input
                type="email"
                placeholder="Email Address"
                display={`flex`}
                justifyContent={`center`}
                alignItems={`center`}
                p={{ lg: `0.625rem 0.6875rem` }}
                gap={{ lg: `7.3125rem` }}
                borderRadius={{ lg: `.3125rem` }}
                bgColor={`#fff`}
                h={{ lg: `3rem` }}
              />
              <Button
                disabled
                type="button"
                display={`flex`}
                gap={{ lg: `.3rem` }}
                bgColor={`#0266F4`}
                color={`#fff`}
                // w={{lg:`6.625rem`}}
                h={{ lg: `1.75rem` }}
                fontSize={{ lg: `.75rem` }}
                lineHeight={{ lg: `1.125rem` }}
                borderRadius={`none`}
                border={`none`}
                pos={`absolute`}
                top={{ lg: `.8rem` }}
                right={{ lg: `1.2rem` }}
              >
                Subscribe
                <Icon
                  icon="ic:sharp-arrow-forward"
                  color="white"
                  width="16"
                  height="15"
                  // style={{marginRight: `1rem`}}
                />
              </Button>
            </FormControl>
          </GridItem>
        </Grid>

        
      </Box>

      <Flex
        color={`#fff`}
        align={`center`}
        gap={{ lg: `2rem` }}
        justify={`flex-end`}
        mt={{ lg: `1.94rem` }}
        className="cc-container"
      >
        <Text lineHeight={{ lg: `1.8rem` }} letterSpacing={{ lg: `.0125rem` }}>
          &copy; {new Date().getFullYear()} TechStudio Academy
        </Text>
        <ul
          style={{
            display: `flex`,
            alignItems: `center`,
            gap: `1rem`,
            listStyle: `none`,
          }}
        >
          <li className="">
            <a
              target={`_blank`}
              href="https://twitter.com/techstudioacdmy"
              className="text-white cc-link-hover"
            >
              <Icon icon={`fa:twitter`} className="fs-xl" />
            </a>
          </li>
          <li className="">
            <a
              target={`_blank`}
              href="https://facebook.com/techstudioacademy"
              className="text-white cc-link-hover "
            >
              <Icon icon={`fa:facebook`} className="fs-xl" />
            </a>
          </li>
          <li className="">
            <a
              target={`_blank`}
              href="https://instagram.com/techstudioacademy"
              className="text-white cc-link-hover "
            >
              <Icon icon={`fa:instagram`} className="fs-xl" />
            </a>
          </li>

          <li className="">
            <a
              target={`_blank`}
              href="https://linkedin.com/company/tech-studio-academy"
              className="text-white cc-link-hover "
            >
              <Icon icon={`fa:linkedin`} className="fs-xl" />
            </a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};

export default Footer;
