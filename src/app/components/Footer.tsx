import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
        <nav className="flex justify-center flex-wrao gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            {" "}
            Home{" "}
          </a>
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            {" "}
            About{" "}
          </a>
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            {" "}
            Delivery{" "}
          </a>
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            {" "}
            Contact{" "}
          </a>
        </nav>

        <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <a
            href="https://www.facebook.com/Wajii10/"
            target="blank"
            rel="nofollow noopener"
          >
            <img src="fb.png" alt="facebook logo" />
          </a>

          <a
            href="https://www.linkedin.com/in/wajahat-ali-3189862b4/"
            target="blank"
            rel="nofollow noopener"
          >
            <img src="link.png" alt="Linkedin logo" />
          </a>

          <a
            href="https://www.instagram.com/_wajo41_/"
            target="blank"
            rel="nofollow noopener"
          >
            <img src="insta.png" alt="Instagram logo" />
          </a>

          <a
            href="https://github.com/WajahatAli3218664"
            target="blank"
            rel="nofollow noopener"
          >
            <img src="git.png" alt="github logo" />
          </a>
        </div>
        <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8 ">
          {" "}
          © 2024 Wajahat Ali Khan. All Rights Reserved
        </p>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}
