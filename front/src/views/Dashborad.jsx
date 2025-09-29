import { Link, Outlet } from "react-router";

const Dashborad = () => {
  return (
    <div>
      Dashborad
      <Link to="mesa">
        <button>Mesas</button>
      </Link>
      <Link to="reserva">
        <button>Reservas</button>
      </Link>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Dashborad;
