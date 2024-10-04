import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Services() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Header />}
      <div>Services</div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default Services;
