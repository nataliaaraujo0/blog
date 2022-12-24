import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { CardProject } from "../CardProject";
import { Tags } from "../Tags";
import { CardC } from "../Xp";

export function ProjectListCard() {
  const [project] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
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
      {project.map(() => (
        <>
          <CardC
            height="400px"
            width="400px"
            company="Name repo"
            childrenBottom={
              <>
                <Tags maxWidth="100px" colorScheme="blue" />
                <Tags maxWidth="100px" colorScheme="blue" />
                <Tags maxWidth="100px" colorScheme="blue" />
              </>
            }
          />
        </>
      ))}
    </Flex>
  );
}
