import {
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { Profile } from "../Profile";
import { Tags } from "../Tags";

type LayoutProps = {
  title?: string;
  nameRepo?: string;
  nameProject?: string;
  xp?: string;
  children?: ReactElement;
  children2?: ReactElement;
  children3?: ReactElement;
};
export function Layout({
  title = "Sobre o meu trabalho",
  nameRepo = "Repo Github",
  nameProject = "Projetos",
  xp = "Experiencias",
  children,
  children2,
  children3,
}: LayoutProps) {
  const [tags] = useState([
    { titleTag: "ReactJS" },
    { titleTag: "Typescript" },
    { titleTag: "RestAPI" },
  ]);
  return (
    <Flex h="100vh" padding="1rem">
      <Flex w="357px" alignItems="center" h="100vh" flexDir="column" gap="4px">
        <Profile />
        <Divider marginBottom="32px" width="320px" />
        {tags.map((tag) => (
          <>
            <Tags titleTag={tag.titleTag} />
          </>
        ))}
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
            <Tab w="150px" bg="purple.700" borderRadius="4px">
              {xp}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex maxWidth="895px" h="600px">
                {children}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex maxWidth="895px" h="600px">
                {children2}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex maxWidth="895px" h="600px">
                {children3}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
