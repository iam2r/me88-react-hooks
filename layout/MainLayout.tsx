import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "root/style/index.scss";


export default function MainLayout(props: any) {

  return (
    <div>
      <div className="header-section">
        <Header />
      </div>
      <div className="bg-content-section">{props.children}</div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}
