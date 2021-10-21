import { useQuery, useQueryClient } from "react-query"
import axios from "axios"

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1]
  return axios.get(`http://localhost:9000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchSuperHero)
}
