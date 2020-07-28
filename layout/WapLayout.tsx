import React, { useEffect } from "react";
import Footer from "../component/wap/Footer";
export default function WapLayout(props: any) {
  return (
    <div>
      <div className="bg-content-section">
        {props.children}
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}
