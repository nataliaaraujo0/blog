import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Xp } from "../Xp";

export function XpList() {
  const [experience] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <Flex
      padding="1rem"
      overflowY="scroll"
      flexDir="column"
      gap="8px"
      sx={{
        "&::-webkit-scrollbar": {
          width: "16px",
          borderRadius: "8px",
          backgroundColor: "#2f8f8f",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#6c308f",
          borderRadius: "8px",
        },
      }}
    >
      {experience.map(() => (
        <>
          <Xp />
        </>
      ))}
    </Flex>
  );
}
