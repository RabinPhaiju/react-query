import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeros = () => {
  return axios.get("http://localhost:9000/superheroes")
}

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heros", fetchSuperHeros, {
    onSuccess, //  call function on success fetch
    onError,

    select: (data) => {
      // data transformation and filtering
      const superHeroNames = data.data.map((hero) => hero.name)
      return superHeroNames
    },

    enabled: false, // How to refetch data in interval, with a button to trigger on first.
  })
}
