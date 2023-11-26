import "./spiner.scss";

interface Props {
  spinner: boolean;
}

const Spinner: React.FC<Props> = ({ spinner }) => {
  return (
    <div id="spinner" className={`spinner ${spinner ? "show" : "hidden"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
