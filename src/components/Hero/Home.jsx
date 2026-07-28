import React from "react";
import Navbar from "../navbar/Navbar";
import ShowEmp from "../showEmp/ShowEmp";
import Footer from "../footer/Footer";

export default function home() {
  return (
    <div>
      <Navbar />
      <ShowEmp />
      <Footer />
    </div>
  )
}
