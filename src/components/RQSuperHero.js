import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHeroData"

export const RQSuperHero = () => {
  const { heroId } = useParams()
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroData(heroId)
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
      <h2>React Query Super Hero Detail</h2>
      <h1>{data?.data.name}</h1>
      <h2>{data?.data.alterEgo}</h2>
    </div>
  )
}
