import './App.css'
import ContributorCard from './components/ContributorCard'
import React from 'react'

function App() {
  const [contributors, setContributors] = React.useState([])
  React.useEffect(() => {
    fetch('./../CONTRIBUTORS.json')

      .then(res => res.json())
      .then(data => {
        setContributors(data)
      })
  }, [])



  return (
    <>
      <div className='py-10 bg-slate-900'>
        <h1 className='text-4xl text-center font-mono text-white '>Contributors</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-3 container mx-auto p-10'>
          {
            contributors.map((contributor) => (
              <ContributorCard contributor={contributor} key={contributor.id} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default App
