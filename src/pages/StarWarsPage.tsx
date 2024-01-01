import { Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PlanetCard } from "./StarWarsPage/PlanetCard";

const url = "http://swapi.dev/api/";

export const StarWarsPage = () => {
  const [presentedPlanets, setPresentedPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetch(url + "planets/");
      const resData = await response.json();
      setPresentedPlanets(resData);
    }
    try {
      setIsLoading(true);
      fetchPlanets();
    } catch (error) {
      return <>error.message</>;
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <Text fontSize="2xl">Star Wars Project</Text>
      <Text fontSize="6xl">Star Wars planets finder</Text>
      <Text fontSize="xl">
        try to type name of a planet, or for example climate of planet
      </Text>
      <Text>Your planets</Text>
      {isLoading ? <Spinner /> : <PlanetCard name={"Tatooine"} />}

      <Text>
        Using Star Wars Api at http://swapi.dev/api/. Created by Miłosz Zając.
      </Text>
    </>
  );
};
