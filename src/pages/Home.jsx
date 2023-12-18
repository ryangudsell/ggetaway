import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    axios.get('./json/data.json')
    .then((res) => {
      setLocations(res.data.locations)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div id='home'>
      {loading ? 
      <>Loading...</> 
      : 
      <>
      <section>{locations.map((location) => {
        return (
          <div>
            <img src={`${location.imageUrl}`} alt={`${location.imageAlt}`} />
            <p>{location.title}</p>
          </div>
        )
      })}</section>
      </>}
    </div>
  )
}

export default Home
