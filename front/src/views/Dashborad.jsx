import { Link, Outlet } from "react-router";
import LogOut from "../components/LogOut";

const Dashborad = () => {
  return (
    <div>
      Dashborad
      <LogOut />
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
