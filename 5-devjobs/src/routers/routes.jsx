
import JobDetails from "../components/JobDetails"
import JobLists from "../components/JobLists"
import { BrowserRouter,Route,Routes } from "react-router-dom"
export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<JobLists/>} />
        <Route exact path="/jobs" element={<JobLists />} />
        <Route exact path="/jobs/:position" element={<JobDetails />} />

        <Route path="*" element={<h1>error;</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
