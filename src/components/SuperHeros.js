import React, { useState, useEffect } from "react"
import axios from "axios"

export const SuperHeros = () => {
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:9000/superheroes")
      .then((res) => {
        setData(res.data)
        setIsloading(false)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading..</h2>
  }
  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <p>Super Hero detail</p>
      {data.map((hero) => {
        return (
          <div key={hero.id}>
            {hero.name} {hero.alterEgo}
          </div>
        )
      })}
    </div>
  )
}
