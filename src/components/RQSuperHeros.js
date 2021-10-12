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
    cacheTime: 5000, // Default

    staleTime: 30000, // decrease no of request.
    // wont fetch in background for 30 sec. | we are sure that list of heros wont change frequently.
    // fresh flag instead of stale or inactive.

    refetchOnMount: true, //{'always'} query will refetch on mount -> true is best option

    refetchOnWindowFocus: true, // when gain focus, data is fetch. -> default true is best option.
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
