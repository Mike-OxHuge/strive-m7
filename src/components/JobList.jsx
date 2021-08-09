// import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

const JobList = ({ job, selectedJob, changeJob }) => {
  return (
    <>
      <Container onClick={() => changeJob(job)}>
        <Card
          className={
            selectedJob?.id === job.id ? "active-job my-3 pa-1" : "my-3 pa-1"
          }
        >
          <Card.Title>{job.title}</Card.Title>
          <Card.Body>{job.company_name}</Card.Body>
          <Card.Text>{job.salary}</Card.Text>
          <Button href={job.url}>Apply</Button>
        </Card>
      </Container>
    </>
  );
};

export default JobList;
