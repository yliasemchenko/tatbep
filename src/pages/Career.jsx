import { Routes, Route } from 'react-router-dom'
import CareerMain from '../components/sections/career/CareerMain'
import CareerVacancies from '../components/sections/career/CareerVacancies'

function Career() {
  return (
    <Routes>
      <Route index element={<CareerMain />} />
      <Route path="vakansii" element={<CareerVacancies />} />
    </Routes>
  )
}

export default Career
