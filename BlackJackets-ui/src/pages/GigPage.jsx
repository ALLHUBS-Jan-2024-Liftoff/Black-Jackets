import React from 'react'
import CreateGigForm from '../components/CreateGig'
import { addGig } from '../services/GigService'

const GigPage = () => {
  return (
    <>
        <CreateGigForm addGig={addGig}/>
    </>
  )
}

export default GigPage