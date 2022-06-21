import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERRY = gql`
  query{
    lessons {
      id
      tittle

    }
  }
`
 
function App() {
   useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERRY,
    }).then(response => {
      console.log(response.data);
      
    })
   }, [])


  return (
   <h1 className="text-5xl font-bold text-violet-500">Hello world</h1>
  )
}

export default App
