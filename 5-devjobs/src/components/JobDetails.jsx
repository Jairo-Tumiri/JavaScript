import { useParams } from "react-router-dom";
import { jobs } from "../data/data.jsx";
export default function JobDetails() {
  const { position } = useParams();
  const job = jobs.find((job) => job.position === position); //find busca la primmera conincidencia dentro de un array
  return (
    <section>
      <div className="container">
        <div className="detailsTop">
          <div className="detailsTopLogo">
            <img src={job.logo} alt={job.company} />
          </div>
          <div className="detailsTopInfo">
            <h2>{job.company}</h2>
            <p>
              {job.postedAt} - {job.contract}
            </p>
            <p>{job.location}</p>
            <div className="detailsTopButton">
              <a href={job.companySite} target="_blank" rel="noreferrer">
                Company Site
              </a>
            </div>
            <div className="detailsTopRequirements">
              <h3>{job.requirements.reqTitle}</h3>
              <ul>
                {job.requirements.reqItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
