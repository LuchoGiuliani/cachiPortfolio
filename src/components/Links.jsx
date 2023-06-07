import React from "react";

function Links() {
  return (
    <div className="flex flex-col gap-2 fixed bottom-14 left-0 z-50 p-4 link_container">
      <a href="">
        <img className="hover:animate-bounce scroll-smooth links " src="facebook.png" alt="" />
      </a>
      {/* <a href="">
        <img className="hover:animate-bounce scroll-smooth links " src="whatsapp.png" alt="" />
      </a>
      <a href="">
        <img className="hover:animate-bounce scroll-smooth links " src="instagram.png" alt="" />
      </a>
      <a href="">
        <img className="hover:animate-bounce scroll-smooth links " src="twitter.png" alt="" />
      </a> */}
      <a href="">
        <img className="hover:animate-bounce scroll-smooth links " src="youtube.png" alt="" />
      </a>
    </div>
  );
}

export default Links;
