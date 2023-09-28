import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BannerII = () => {
  return (
    <Box as="section" mb={{ lg: `10.81rem` }}>
      <Box className="cc-container" mt={{ lg: `8.8rem` }}>
        <Box
          // w={{ lg: `75.6875rem` }}
          h={{ lg: `20.9375rem` }}
          bgColor={`blue.300`}
          borderRadius={`1.25rem`}
          // display={`flex`}
          // justifyContent={`center`}
          // alignItems={`center`}
          // m={`0 auto`}
          pl={{ lg: `8.19rem` }}
          pr={{ lg: `8.12rem` }}
        >
          <Flex
            justify={`space-between`}
            align={`start
          `}
          >
            <Box mt={{ lg: `4.69rem` }}>
              <Text
                fontSize={{ lg: `1rem` }}
                color={`white`}
                lineHeight={{ lg: ` 1.5rem` }}
              >
                Want to get started?
              </Text>
              <Heading
                fontSize={{ lg: `1.6875rem` }}
                fontWeight={{ lg: 700 }}
                lineHeight={{ lg: `3.75rem` }}
                letterSpacing={{ lg: `.03125rem` }}
                color={`#fff`}
              >
                {" "}
                Sign Up with Techstudio
              </Heading>

              <Link to={`/register`}>
                <Button
                  fontSize={{ lg: `.875rem` }}
                  fontWeight={600}
                  lineHeight={{ lg: `1.4rem` }}
                  letterSpacing={{ lg: `.0125rem` }}
                  w={{ lg: `14rem` }}
                  h={{ lg: `3rem` }}
                  bgColor={`blue.100`}
                  border={`none`}
                  borderRadius={`.375rem`}
                  display={`flex`}
                  justifyContent={`center`}
                  alignItems={`center`}
                  color={`white`}
                  mt={{ lg: `2.25rem` }}
                  _hover={{bgColor:`blue.200`}}
                >
                  Click to Sign Up
                </Button>
              </Link>
            </Box>

            <Box style={{ translate: `0 -8.8rem` }}>
              <Image
                src="https://res.cloudinary.com/dkszgtapy/image/upload/v1695736331/Dayo_1_2_lg8wdw.png"
                w={{ lg: ` 26.125rem` }}
                h={{ lg: `29.77231rem` }}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerII;

{
  /* <Box
            w={{ lg: `75.6875rem` }}
            h={{ lg: `20.9375rem` }}
            bgColor={`blue.300`}
            borderRadius={`1.25rem`}
            // display={`flex`}
            // justifyContent={`center`}
            // alignItems={`center`}
            // m={`0 auto`}
            pl={{ lg: `8.19rem` }}
            pr={{ lg: `8.12rem` }}
          >
            <Text as={`span`}>Want to get started?</Text>
            <Heading
              color={`#fff`}
              fontSize={{ lg: `2.0625rem` }}
              textAlign={`center`}
              fontWeight={600}
              pt={{ lg: `4.38rem` }}
            >
              Sign Up with Techstudio
            </Heading>

            <Button
              w={{ lg: `16.1875rem` }}
              h={{ lg: `2.4375rem` }}
              bgColor={`blue.100`}
              border={`none`}
              borderRadius={`.375rem`}
              display={`flex`}
              justifyContent={`center`}
              alignItems={`center`}
              margin={`0 auto`}
              color={`white`}
              mt={{ lg: `2.31rem` }}
            >
              Click to Sign Up
            </Button>
          </Box>

          <Box>
            <Image src="" />
          </Box> */
}
