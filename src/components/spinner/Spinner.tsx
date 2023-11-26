function Spinner({ spinner }) {

  console.log(spinner)
  return (
    <div id="spinner" className={`spinner ${spinner ? "show" : "hidden"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default Spinner