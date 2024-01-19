import { useState } from "react";
import { jobs } from "../data/data";
import { Link } from "react-router-dom";
export default function JobLists() {
  const [jobData, setJobdata] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler = () => {
    const filteredData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobdata(filteredData);
  };
  const filterJobData = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "full-time") {
      const filterdData = jobs.filter((job) => job.contract === "Full Time");
      setJobdata(filterdData);
    } else if (filterValue === "contract") {
      const filterdData = jobs.filter((job) => job.contract === "Contract");
      setJobdata(filterdData);
    }
  };
  return (
    <section className="jobList">
      <div className="container">
        <div className="jobListWrapper">
          <div className="searchPanel">
            <div className="searchPanel01">
              <input
                type="text"
                placeholder="Búsqueda por titutlo..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
            <div className="searchPanel02">
              <input
                type="text"
                placeholder="Búsqueda por ubicación..."
                value={searchByLocation}
                onChange={(e) => {
                  setSearchByLocation(e.target.value);
                }}
              />
              <button onClick={locationSearchHandler}>
                Buscar por ubicacion
              </button>
            </div>
            <div className="searchPanel03">
                <select onChange={filterJobData}>
                    <option value="full-time">Full Time</option>
                    <option value="contract">Contract</option>
                </select>
            </div>
          </div>
          <div className="jobWrapper">
            {jobData
              ?.filter((job) => {
                if (searchTerm === "") return job;
                if (
                  job.position.toLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue) ||
                  job.location.toLowerCase().includes(searchTermValue)
                ) {
                  return job;
                }
              })
              .map((job) => {
                return (
                  <div className="jobItem" key={job.id}>
                    <img src={job.logo} alt="" />
                    <div className="jobContent">
                      <h6>
                        {job.postedAt}-{job.contract}
                      </h6>
                      <h2>
                        <Link to={`/jobs/${job.position}`}>{job.position}</Link>
                      </h2>
                      <p>{job.company}</p>
                      <div className="location">
                        <p>location: {job.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
