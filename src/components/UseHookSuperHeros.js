import React, { useEffect } from "react"
import { useSuperHerosData } from "../hooks/useSuperHerosData"

export const UseHookSuperHeros = () => {
  const onSuccess = (data) => {
    console.log("Data fetch successfully", data)
  }
  const onError = (data) => {
    console.log("Data fetch error", data)
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(
    onSuccess,
    onError
  )

  useEffect(() => {
    refetch()
  }, [])

  if (isLoading || isFetching) {
    return <h2>Loading..</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h2>React Query fetch on data using hook Super Hero</h2>
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })}
    </div>
  )
}
