import { Outlet } from "react-router";

const Dashborad = () => {
  return (
    <div>
      Dashborad
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Dashborad;
