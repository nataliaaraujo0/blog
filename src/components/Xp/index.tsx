import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
type XpProps = {
  ocupation?: string;
  company?: string;
  divider?: ReactElement;
  description?: string;
  width?: string;
  height?: string;
  childrenBottom?: ReactElement;
};

export function CardC({
  ocupation,
  company = "YAZO",
  divider,
  description = "Criação de funcionalidades para projetos do ramo de eventos, utlizando ReactJs, Typescript, Storybook, Material-UI, Styled components e Axios. Ferramentas gerenciais: Atlassian Jira, Scrum,Kanban, Github, AWS - S3, Cloud front",
  width = "100%",
  height = "120px",
  childrenBottom = <></>,
}: XpProps) {
  return (
    <Card bg="purple.900" w={width} h={height} borderRadius="6px">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase" color="white">
              <strong style={{ color: "#cf5192" }}> {company}</strong> {divider}
              {ocupation}
            </Heading>
            <Text pt="2" fontSize="sm" color="white" marginBottom="8px">
              {description}
            </Text>
            <Flex gap="8px">{childrenBottom}</Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
