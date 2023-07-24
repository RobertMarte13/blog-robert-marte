const Paginacion = ({ setPageNum }: { setPageNum(number: number): void }) => {
  return (
    <div className="btn-paginacion">
      <p className="title-paginacion">Paginación</p>
      <div className="content-btn-paginacion">
        <button onClick={() => setPageNum(1)}>1</button>
        <button onClick={() => setPageNum(2)}>2</button>
      </div>
    </div>
  );
};

export default Paginacion;
