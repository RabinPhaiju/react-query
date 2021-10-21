import React from "react"
import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeros = () => {
  return axios.get("http://localhost:9000/superheroes")
}
const fetchFriends = () => {
  return axios.get("http://localhost:9000/friends")
}

export const ParallelQueries = () => {
  const { data: superHeros } = useQuery("super-heros", fetchSuperHeros)
  const { data: friends } = useQuery("friends", fetchFriends)
  return (
    <div>
      <h2>Paralle Query</h2>
      <h4>Super Heros</h4>
      {superHeros?.data.map((hero) => {
        return (
          <p key={hero.id}>
            {hero.name} {hero.alterEgo}
          </p>
        )
      })}
      <h4>Friends</h4>
      {friends?.data.map((friend) => {
        return <p key={friend.id}>{friend.name}</p>
      })}
    </div>
  )
}
