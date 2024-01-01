import { Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PlanetCard } from "./StarWarsPage/PlanetCard";
import { Error } from "../assets/components/Error";
const url = "http://swapi.dev/api/";

export const StarWarsPage = () => {
  const [presentedPlanets, setPresentedPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlanets() {
      setIsLoading(true);
      try {
        const response = await fetch(url + "planets/");
        const resData = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch planets.");
        }
        setPresentedPlanets(resData.planets);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }

    fetchPlanets();
  }, []);

  if (error) {
    return;
  }

  return (
    <>
      <Text fontSize="2xl">Star Wars Project</Text>
      <Text fontSize="6xl">Star Wars planets finder</Text>
      <Text fontSize="xl">
        try to type name of a planet, or for example climate of planet
      </Text>
      <Text>Your planets</Text>
      {isLoading ? <Spinner /> : <PlanetCard name={"Tatooine"} />}
      {presentedPlanets}
      <Text>
        Using Star Wars Api at http://swapi.dev/api/. Created by Miłosz Zając.
      </Text>
    </>
  );
};
