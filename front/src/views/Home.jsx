import React from "react";
import NavBar from "../components/NavBar";
import MesaList from "../components/MesaList";
import Login from "../components/Login";

const Home = () => {
  return (
    <div>
      <section className="container-nav">
        <NavBar />
        <MesaList />
        <Login />
      </section>
    </div>
  );
};

export default Home;
