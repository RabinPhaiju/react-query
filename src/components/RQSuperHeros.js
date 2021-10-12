import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeros = () => {
  return axios.get("http://localhost:9000/superheroes")
}

export const RQSuperHeros = () => {
  // require 2 key, (unique key and function that returns a promise)
  const { isLoading, data, isError, error } = useQuery("super-heros", fetchSuperHeros)

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
