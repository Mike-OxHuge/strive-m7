import { Row, Col, Button, Spinner } from "react-bootstrap";
import JobList from "../components/JobList";
import JobDescription from "../components/JobDescription";
import { useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState({});
  const [selectedJob, selectJob] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const getJobs = async (query) => {
    setLoading(true);
    await fetch(`https://remotive.io/api/remote-jobs?search=${query}&limit=10`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .then(() => setLoading(false));
  };

  const changeJob = (job) => {
    selectJob(job);
  };
  return (
    <>
      <header>
        <input type="text" id="query" />
        <Button onClick={() => getJobs(document.getElementById("query").value)}>
          {isLoading ? <Spinner animation="border" role="status" /> : "Search"}
        </Button>
      </header>
      <Row>
        <Col sm={4} style={{ border: "1px solid black" }} className="jobs">
          {jobs.jobs?.length > 0
            ? jobs.jobs.map((job) => (
                <JobList
                  key={job.id}
                  job={job}
                  selectedJob={selectedJob}
                  changeJob={changeJob}
                />
              ))
            : "Blahblahblah"}
        </Col>

        <Col sm={8} style={{ border: "1px solid black" }}>
          <JobDescription
            selectedJob={selectedJob}
            legal={jobs["0-legal-notice"]}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
