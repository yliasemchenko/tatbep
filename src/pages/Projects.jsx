import { Routes, Route } from 'react-router-dom'
import ProjectsMain from '../components/sections/projects/ProjectsMain'
import ProjectsGeo from '../components/sections/projects/ProjectsGeo'
import ProjectsReviews from '../components/sections/projects/ProjectsReviews'
import ProjectsReferences from '../components/sections/projects/ProjectsReferences'

function Projects() {
  return (
    <Routes>
      <Route index element={<ProjectsMain />} />
      <Route path="geo" element={<ProjectsGeo />} />
      <Route path="otzyvy" element={<ProjectsReviews />} />
      <Route path="referenczii" element={<ProjectsReferences />} />
    </Routes>
  )
}

export default Projects
