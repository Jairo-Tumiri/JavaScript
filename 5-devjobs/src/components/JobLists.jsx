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
                Buscar
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
                  <Link
                    className="jobItem"
                    to={`/jobs/${job.position}`}
                    key={job.id}
                  >
                    <picture className="jobImage">
                      <img src={job.logo} alt="" />
                    </picture>
                    <div className="jobContent">
                      <div>
                        <h2 className="jobTitle">{job.position}</h2>
                        <h6 className="jobType">
                          {job.postedAt} - {job.contract}
                        </h6>
                      </div>
                      <p className="jobLocation">
                        location: <span>{job.location}</span>
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
