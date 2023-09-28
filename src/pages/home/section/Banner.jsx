import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Box as="section">
      <Box className="cc-container"
      mt={{lg:`8.8rem`}}
      >
        <Box
          w={{ lg: `75.6875rem` }}
          h={{ lg: `26.375rem` }}
          bgColor={`blue.300`}
          borderRadius={`1.25rem`}
          // display={`flex`}
          // justifyContent={`center`}
          // alignItems={`center`}
          // m={`0 auto`}
          pl={{ lg: `8.19rem` }}
          pr={{ lg: `8.12rem` }}
        >
          <Heading
            color={`#fff`}
            fontSize={{ lg: `2.0625rem` }}
            textAlign={`center`}
            fontWeight={600}
            pt={{ lg: `4.38rem` }}
          >
            Are you ready to unlock the world of web development and embark on
            an exciting journey towards becoming a Frontend Developer?
          </Heading>
          <Text
            fontSize={{ lg: `1.0625rem` }}
            color={`#fff`}
            w={{ lg: `50.375rem` }}
            textAlign={`center`}
            mx={{ lg: `3rem` }}
            lineHeight={{ lg: `1.941rem` }}
            mt={`1.12rem`}
            fontWeight={400}
          >
            Look no further – our comprehensive online course is your gateway to
            mastering the art of creating captivating websites and engaging
            landing pages.
          </Text>
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
            Begin Registration Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
