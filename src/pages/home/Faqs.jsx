import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { accordionData } from "../../utils/Content";
import { Icon } from "@iconify/react";

// const Accordion = ({ data }) => {
//     return (
//       <div>
//         {data.map((item) => (
//           <AccordionItem key={item.id} title={item.title} content={item.content} />
//         ))}
//       </div>
//     );
//   };

//   const AccordionItem = ({ title, content }) => {
//     return (
//       <div>
//         <h3>{title}</h3>
//         {typeof content === "string" ? (
//           <p>{content}</p>
//         ) : (
//           <ul>
//             {Object.values(content).map((value, index) => (
//               <li key={index}>{value}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };

const Accordion = ({ data }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemId) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [itemId]: !prevOpenItems[itemId],
    }));
  };

  return (
    <Box>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItems[item.id]}
          toggleItem={() => toggleItem(item.id)}
        />
      ))}
    </Box>
  );
};

const AccordionItem = ({ title, content, isOpen, toggleItem }) => {
  return (
    <Box>
      <Flex
        justify={`space-between`}
        align={`center`}
        // border={`1px solid red`}
        // width={`100%`}
      >
        <Box>
          <Text
            onClick={toggleItem}
            fontSize={{ lg: `1.6875rem` }}
            lineHeight={{ lg: ` 3.005rem` }}
            color={`#1E1E1E`}
            mb={{ lg: `2rem` }}
            style={{ cursor: "pointer" }}
          >
            {title}
          </Text>
        </Box>

        <Box onClick={toggleItem}>
          {isOpen ? (
            <Icon icon="fe:arrow-down" width="30" height="30" />
          ) : (
            <Icon icon="fe:arrow-up" width="30" height="30" />
          )}
        </Box>
      </Flex>

      {/* Display a +/- icon */}
      {isOpen && (
        <Box>
          {typeof content === "string" ? (
            <Text mt={{lg: `-1.5rem`}} mb={{lg:`.5rem`}} w={{lg:`800px`}}>{content}</Text>
          ) : (
            <ul style={{listStyle:`none`, marginTop:`-1.5rem`}}>
              {Object.values(content).map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          )}
        </Box>
      )}
    </Box>
  );
};

const Faqs = () => {
  // const {title, content} = accordionData
  return (
    <Box className="cc-container">
      <Heading
        textAlign={`center`}
        mb={{ lg: `4.31rem` }}
        mt={{ lg: `8.8rem` }}
      >
        Web Development FAQs
      </Heading>

      <Accordion data={accordionData} />
    </Box>
  );
};

export default Faqs;
