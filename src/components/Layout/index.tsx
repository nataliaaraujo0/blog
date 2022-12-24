import {
  Box,
  Divider,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Tags } from "../Tags";

type LayoutProps = {
  Name: string;
  ocupation: string;
  title: string;
  nameRepo: string;
  nameProject: string;
  xp: string;
  children: ReactElement;
  children2: ReactElement;
  children3: ReactElement;
};
export function Layout({
  Name = "Natália Araújo",
  ocupation = "Dev Frontend ReactJS",
  title = "Sobre o meu trabalho",
  nameRepo = "Repo Github",
  nameProject = "Projetos",
  xp = "Experiencias",
  children,
  children2,
  children3,
}: LayoutProps) {
  return (
    <Flex h="100vh" padding="1rem">
      <Flex w="357px" alignItems="center" h="100vh" flexDir="column" gap="4px">
        <Box marginBottom="32px">
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Text fontSize="1.5rem" fontWeight="bold">
            {Name}
          </Text>
          <Text fontSize="1.1rem">{ocupation}</Text>
        </Box>
        <Divider marginBottom="32px" width="320px" />
        <Tags />
        <Tags />
      </Flex>
      <Flex w="90%" h="100vh" marginLeft="42px" flexDir="column">
        <Text fontWeight="bold" fontSize="2.2rem">
          {title}
        </Text>
        <Tabs variant="unstyled">
          <TabList gap="4px">
            <Tab w="150px" bg="purple.700" borderRadius="4px">
              {nameRepo}
            </Tab>
            <Tab w="150px" bg="purple.700" borderRadius="4px">
              {nameProject}
            </Tab>
            <Tab isDisabled w="150px" bg="purple.700" borderRadius="4px">
              {xp}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex bg="pink.900" maxWidth="895px" h="600px">
                {children}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex bg="pink.800" maxWidth="895px" h="600px">
                {children2}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex bg="pink.700" maxWidth="895px" h="600px">
                {children3}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
