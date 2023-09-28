import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import blue from "../../../assets/icons/blue_ellipse.svg";
import orange from "../../../assets/icons/orange_ellipse.svg";

const Course = () => {
  return (
    <Box as="section" bgColor={`rgba(220, 233, 250, 0.30)`} mt={{lg: `8.86rem`}} pb={{lg: `4.32rem`}}>
      <Box className="cc-container">
        <Heading as={`h2`} textAlign={`center`} pt={{lg: `4.34rem`}} >Why Choose This Course</Heading>

        <Grid
          templateColumns={{ lg: `repeat(1, 1fr)` }}
          justifyItems={`center`}
          alignItems={`center`}
        >
          <GridItem>
            <Flex justify={`center`} align={`center`} mt={{ base: `3.06rem` }}>
              <Image src={blue} alt="" mr={{ lg: `3.44rem` }} />
              <Heading
                as={`h3`}
                fontSize={{ lg: `1.3125rem` }}
                mr={{ base: `5.69rem` }}
                whiteSpace={`nowrap`}
              >
                Start Your Career
              </Heading>
              <Text w={{ lg: ` 55.6875rem` }}>
                Whether you're a complete beginner or have some prior experience
                but want to a refresher course, this course is designed to
                provide you with the foundation you need to kickstart your
                career as a Frontend Developer.
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex justify={`center`} align={`center`} mt={{ base: `3.06rem` }}>
              <Image src={orange} alt="" mr={{ lg: `3.44rem` }} />
              <Heading
                as={`h3`}
                fontSize={{ lg: `1.3125rem` }}
                mr={{ base: `7.12rem` }}
                whiteSpace={`nowrap`}
              >
                Learn by Doing
              </Heading>
              <Text w={{ lg: `55.6875rem` }}>
                We believe in hands-on learning. Throughout the course, you'll
                dive into real-world projects, creating websites and landing
                pages from scratch, applying what you've learned immediately.
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex justify={`center`} align={`center`} mt={{ base: `3.06rem` }}>
              <Image src={blue} alt="" mr={{ lg: `3.44rem` }} />
              <Heading
                as={`h3`}
                fontSize={{ lg: `1.3125rem` }}
                mr={{ base: `4.44rem` }}
                whiteSpace={`nowrap`}
              >
                Fundamentals First
              </Heading>
              <Text w={{ lg: `55.6875rem` }}>
                We cover the essential fundamentals of web development, ensuring
                you have a solid grasp of HTML, CSS, and Bootstrap framework –
                the building blocks of the web.
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex justify={`center`} align={`center`} mt={{ base: `3.06rem` }}>
              <Image src={orange} alt="" mr={{ lg: `3.44rem` }} />
              <Heading
                as={`h3`}
                fontSize={{ lg: `1.3125rem` }}
                mr={{ base: `5.69rem` }}
                whiteSpace={`nowrap`}
              >
                Build Confidence
              </Heading>
              <Text w={{ lg: `55.6875rem` }}>
                Build Confidence: Gain the confidence to take on simple website
                and landing pages projects and start making money working as a
                freelancer.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Course;
