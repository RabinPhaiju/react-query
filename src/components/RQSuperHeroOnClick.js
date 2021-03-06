import React from "react"
import { useSuperHerosData } from "../hooks/useSuperHerosData"

export const RQSuperHeroOnClick = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data)
  }

  const onError = (data) => {
    console.log("Perfom side effect after encountering error", data)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(
    onSuccess,
    onError
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
