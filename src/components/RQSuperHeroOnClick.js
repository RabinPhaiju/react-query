import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeros = () => {
  return axios.get("http://localhost:9000/superheroes")
}

export const RQSuperHeroOnClick = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data)
  }

  const onError = (data) => {
    console.log("Perfom side effect after encountering error", data)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      onSuccess: onSuccess, //  call function on success fetch
      onError: onError,

      select: (data) => {
        // data transformation and filtering
        const superHeroNames = data.data.map((hero) => hero.name)
        return superHeroNames
      },

      enabled: false, // How to refetch data in interval, with a button to trigger on first.
    }
  )

  console.log(isLoading, isFetching)

  if (isLoading || isFetching) {
    return <h2>Loading..</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h2>React Query fetch on button click Super Hero</h2>
      <button onClick={refetch}>Fetch Now</button>
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })}
    </div>
  )
}
