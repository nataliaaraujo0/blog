import { Flex } from "@chakra-ui/react";
import { Xp } from "../Xp";

export function XpList() {
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
      <Xp />
      <Xp />
      <Xp />
      <Xp />
      <Xp />
      <Xp />
      <Xp />
      <Xp />
      <Xp />
    </Flex>
  );
}
