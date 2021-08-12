import { Row, Col, Button, Spinner } from "react-bootstrap";
import JobList from "../components/JobList";
import JobDescription from "../components/JobDescription";
import { useState } from "react";

import { connect } from "react-redux";
import {
  getJobsAction,
  setQueryAction,
  setLoadingAction,
} from "../redux/actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getJobs: (query) => dispatch(getJobsAction(query)),
  setQuery: (query) => dispatch(setQueryAction(query)),
  setLoading: (status) => dispatch(setLoadingAction(status)),
});

const Home = (props) => {
  const [selectedJob, selectJob] = useState(null);

  const getJobs = async (query) => {
    props.setLoading(true);
    props.setQuery(query);
    props.getJobs(query);
  };

  // const getJobs = async (query) => {
  //   setLoading(true);
  //   await fetch(`https://remotive.io/api/remote-jobs?search=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => props.getJobs(data))
  //     .then(() => setLoading(false));
  // };

  const changeJob = (job) => {
    selectJob(job);
  };
  return (
    <>
      {console.log(props.jobs.jobsArr.jobs)}
      <header>
        <input type="text" id="query" />
        <Button onClick={() => getJobs(document.getElementById("query").value)}>
          {props.jobs.isLoading ? (
            <Spinner animation="border" role="status" />
          ) : (
            "Search"
          )}
        </Button>
      </header>
      <Row>
        <Col sm={4} style={{ border: "1px solid black" }} className="jobs">
          {props.jobs.jobsArr.jobs
            ? props.jobs.jobsArr.jobs.map((job) => (
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
            legal={props.jobs.jobsArr["0-legal-notice"]}
          />
        </Col>
      </Row>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
