import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { RepoCard } from "../RepoCard";

export function RepoListCard() {
  const [repos] = useState([1, 2]);
  return (
    <Flex
      padding="1rem"
      overflowY="scroll"
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
      {repos.map(() => (
        <>
          <RepoCard />
        </>
      ))}
    </Flex>
  );
}
