import axios from "axios"
import React from "react"
import { useQueries } from "react-query"

const fetchSuperHeros = (heroId) => {
  return axios.get(`http://localhost:9000/superheroes/${heroId}`)
}

export const DynamicParallelQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeros(id),
      }
    })
  )
  console.log(queryResults)

  return (
    <div>
      <h2>Dynamic Parallel Page</h2>
      {queryResults?.map((result) => {
        return (
          <div key={result.data?.data.id}>
            {result.data?.data.name}-{result.data?.data.alterEgo}
          </div>
        )
      })}
    </div>
  )
}
