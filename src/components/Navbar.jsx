const Navbar = () => {
  return (
    <>
<nav class="navbar w-100">
  <div class="container-fluid">
    <form class="d-flex">
      <div class="input-group">
        <input
          type="text"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn color-primary">
          <i class="fa-solid fa-message"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">un</span>
          </span>
        </button>
        <button type="button" class="ms-3 btn color-primary">
          <i class="fa-solid fa-bell"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">un</span>
          </span>
        </button>
      </div>
    </form>
    <p>Usuario conectado</p>

<div className="rounded-circle bg-primary" style={{height:"50px", width:"50px"}}></div>
<span className="btn bg-primary"><i class="fa-solid fa-gear"></i></span>

  </div>
</nav>
    </>
  );
};

export default Navbar;
