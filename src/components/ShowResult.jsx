import '../styles/showResult.css'

const ShowResult = ({hemisphere, degrees, minutes, seconds, line}) => {
  return (
    <div >
      <h3>{line}</h3>
      <div className="d-flex justify-content-between">
        <div className="p-2 bd-highlight border border-3 rounded display gap-2">{hemisphere}</div>
        <div className="p-2 bd-highlight border border-3 rounded display">{degrees}</div>
        <div className="p-2 bd-highlight border border-3 rounded display">{minutes}</div>
        <div className="p-2 bd-highlight border border-3 rounded display">{seconds}</div>.
      </div>
    </div>
  );
};

export default ShowResult;
