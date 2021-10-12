import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeros = () => {
  return axios.get("http://localhost:9000/superheroes")
}

export const RQSuperHeros = () => {
  // require 2 key, (unique key and function that returns a promise), third is cacheTime.
  // fetch are cache for 5 min.
  // background refetch is done,when page on focus, if the db is changed.
  const { isLoading, data, isError, error, isFetching } = useQuery("super-heros", fetchSuperHeros, {
    cacheTime: 5000,
  })

  console.log(isLoading, isFetching)

  if (isLoading) {
    return <h2>Loading..</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h1>React Query Super Hero</h1>
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
