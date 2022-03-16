const Siderbar = () => {
  return (
    <>

    <div className="text-center bg-primary">
      <span className="title fs-1">PERFIN </span>
        {/* <i class="fa-solid fa-sliders fa-3x"></i> */}
        <br/>
        <span className="text-center">Finanzas personales</span>
    </div>
      <div className="m-3">
      <button class="btn btn-outline-purple active text-start w-100">Dashboard</button>
        <button class="btn btn-purple text-start mt-2 w-100">Ingresos</button>

        <button class="btn btn-outline-purple text-start mt-2 w-100">Gastos</button>

        <button class="btn btn-outline-purple text-start mt-2 w-100">Large button</button>

        <button class="btn btn-outline-purple text-start mt-2 w-100">Configuración</button>
      </div>
    </>
  );
};

export default Siderbar;
