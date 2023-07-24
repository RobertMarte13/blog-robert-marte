const Paginacion = ({ setPageNum }: { setPageNum(number: number): void}) => {
  return (
    <div>
      <button onClick={() => setPageNum(1)}>1</button>
      <button onClick={() => setPageNum(2)}>2</button>
    </div>
  );
};

export default Paginacion
