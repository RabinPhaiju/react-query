import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:9000/users/${email}`)
}
const fetchCources = (channelId) => {
  return axios.get(`http://localhost:9000/channels/${channelId}`)
}

export const DependedQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUserByEmail(email))
  const channelId = user?.data.channelId
  const { data: courses } = useQuery(["courses", channelId], () => fetchCources(channelId), {
    enabled: !!channelId, //enable when channelId have a variable.
  })

  console.log(courses)
  return (
    <div>
      <h2>Depended Queries (Result depend on another query)</h2>
      <h4>email: {user?.data.id}</h4>
      <h4>channel Id: {channelId}</h4>
      <h2>Courses</h2>
      {courses?.data.courses.map((course) => {
        return <h4 key={course}>{course}</h4>
      })}
    </div>
  )
}
