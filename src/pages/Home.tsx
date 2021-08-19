import { Row, Col, Button, Spinner } from "react-bootstrap";
import JobList from "../components/JobList";
import JobDescription from "../components/JobDescription";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getJobsAction,
  setQueryAction,
  setLoadingAction,
} from "../redux/actions";

import { ijob, iredux } from "../itypes";

const Home = () => {
  const [selectedJob, selectJob] = useState<ijob>();
  const [searchQuery, setSearchQuery] = useState<string | null>();
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const getJobs = async (query) => {
    dispatch(setLoadingAction(true));
    dispatch(setQueryAction(query));
    dispatch(getJobsAction(query));
  };

  const changeJob = (job) => {
    selectJob(job);
  };
  return (
    <>
      <header>
        <input
          type="text"
          id="query"
          onChange={(e) => setSearchQuery(e.target.value.toString())}
        />
        <Button onClick={() => getJobs(searchQuery}>
          {jobs.isLoading ? (
            <Spinner animation="border" role="status" />
          ) : (
            "Search"
          )}
        </Button>
      </header>
      <Row>
        <Col sm={4} style={{ border: "1px solid black" }} className="jobs">
          {jobs.jobsArr.jobs
            ? jobs.jobsArr.jobs.map((job) => (
                <JobList
                  key={job.id}
                  job={job}
                  selectedJob={selectedJob}
                  changeJob={changeJob}
                />
              ))
            : "Search something"}
        </Col>

        <Col sm={8} style={{ border: "1px solid black" }}>
          <JobDescription
            selectedJob={selectedJob}
            legal={jobs.jobsArr["0-legal-notice"]}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
