import { useEffect } from "react";

const JobDescription = ({ selectedJob, legal }) => {
  useEffect(() => {
    if (selectedJob) {
      alert(legal);
    }
  }, [selectedJob]);
  return (
    <>
      {selectedJob ? (
        <>
          <h1>{selectedJob.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
        </>
      ) : (
        "balls"
      )}
    </>
  );
};

export default JobDescription;
