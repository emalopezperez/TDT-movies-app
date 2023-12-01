import "./menssage.scss";

interface Menssage {
  menssage: string;
}

const Menssage: React.FC<Menssage> = ({ menssage }) => {
  return (
    <>
      <div className="container-error">
        <h4>{menssage}</h4>
      </div>
    </>
  );
};

export default Menssage;
