import { FC } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

type PlanetCardProps = {
  name: string;
};

export const PlanetCard: FC<PlanetCardProps> = ({ name }) => {
  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
