import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeros = () => {
  return axios.get("http://localhost:9000/superheroes")
}

export const RQSuperHeroOnClick = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      enabled: false,
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
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            {hero.name} {hero.alterEgo}
          </div>
        )
      })}
    </div>
  )
}
