import { connect } from "react-redux";
const mapStateToProps = (state) => state;

const Favorites = (props) => {
  return (
    <>
      {props.cart.jobs.length !== 0 ? (
        props.cart.jobs.map((job) => (
          <div
            key={job.id}
            style={{ border: "1px solid black" }}
            className="my-5 py-3"
          >
            <h1>{job.title}</h1>
            <h2>{job.salary}</h2>
            <h3>{job.job_type}</h3>
            <button>
              <a href={job.url}>Apply</a>
            </button>
          </div>
        ))
      ) : (
        <>
          <h1>The favs is empty</h1>
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps)(Favorites);
