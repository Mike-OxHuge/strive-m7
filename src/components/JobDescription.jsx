import { useEffect } from "react";
import { Button } from "react-bootstrap";

import { connect } from "react-redux";
import { addToCartAction } from "../redux/actions";
const mapDispatchToProps = (dispatch) => ({
  addToCart: (job) => dispatch(addToCartAction(job)),
});

const JobDescription = ({ selectedJob, legal, addToCart }) => {
  useEffect(() => {
    if (selectedJob) {
      alert(legal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedJob]);
  return (
    <>
      {selectedJob ? (
        <>
          <Button className="mt-3" onClick={() => addToCart(selectedJob)}>
            Add to favorite
          </Button>
          <h1>{selectedJob.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
        </>
      ) : (
        "balls"
      )}
    </>
  );
};

export default connect((s) => s, mapDispatchToProps)(JobDescription);
