import Nav from './components/Nav'
import content from './content.js'
import Location from './components/Location'

export default function App() {
  
  const locations = content.map(item => {
    return (
      <Location 
        item= {item} />
    )
    })

  return (
    <div>
      <Nav />
      <section>
      {locations}
      </section>
    </div>
  )
}
