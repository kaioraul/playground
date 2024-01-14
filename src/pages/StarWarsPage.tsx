import { Text, Spinner } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { PlanetCard } from "./StarWarsPage/PlanetCard";
import { Error } from "../assets/components/Error";
import axios from "axios";


export const StarWarsPage = () => {
  const [presentedPlanets, setPresentedPlanets] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchPlanets, setSearchPlanets] = useState("");
  const url = "http://swapi.dev/api/";

  useEffect(() => {
    async function fetchPlanets() {
      setIsLoading(true);
      
      axios.get(url + "planets/")
      .then((res: object): void => {setPresentedPlanets(res)})
      .catch((error: FC): Element => {
        console.log(error);
        return <Error />
      })
      
      setIsLoading(false);
    }

    fetchPlanets();
  }, []);

  return (
    <>
      <Text fontSize="2xl">Star Wars Project</Text>
      <Text fontSize="6xl">Star Wars planets finder</Text>
      <Text fontSize="xl">
        try to type name of a planet, or for example climate of planet
      </Text>
      <form>
        <input type="text"></input>
      </form>
      <Text>Your planets</Text>
      {isLoading ? <Spinner /> : <PlanetCard name={"Tatooine"} />}
      {presentedPlanets}
      <Text>
        Using Star Wars Api at http://swapi.dev/api/. Created by Miłosz Zając.
      </Text>
    </>
  );
};
