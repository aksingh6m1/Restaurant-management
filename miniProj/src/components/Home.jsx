import React from "react";
import { FaRegFaceSmileBeam, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Menu");
  };

  return (
    <>
      <div className=' w-full bg-center bg-cover h-screen bg-no-repeat md:bg-[url("images/img2.jpg")] bg-[url("images/img3.jpg")]'>
        <Nav />
        <p className="flex font-serif text-4xl text-slate-300 text-opacity-70 justify-center mt-60 ">
          Our goal is to make you more HAPPY....
          <FaRegFaceSmileBeam />
        </p>
        <div className=" flex mt-12 justify-center gap-32">
          <ul className="text-white flex justify-center pt-3 w-40 h-10 bg-slate-500 bg-opacity-20 gap-5 rounded-lg text-xl ">
            <li className="hover:text-cyan-300 hover:text-2xl">
              <FaInstagram />
            </li>
            <li className="hover:text-cyan-300 hover:text-2xl">
              <FaFacebookSquare />
            </li>
            <li className="hover:text-cyan-300 hover:text-2xl">
              <IoLogoYoutube />
            </li>
          </ul>
          <div className="text-slate-300 flex w-56 h-10 bg-green-500 bg-opacity-60 rounded-lg justify-center pt-2 border-solid hover:border-x-4 border-sky-500 ">
            <button onClick={handleNavigate} className="flex ">
              Make a Order
              <span className="text-3xl">
                <IoMdArrowDropright />
              </span>
            </button>
          </div>
        </div>
        <div className="flex text-white text-opacity-60 mt-6 ml-10">
          <p className=" ">
            © 2024 Tuntun Kumar Mini Project-2 Inc. All rights reserved.
          </p>
          <p className="flex ml-[28rem]">
            Help Center..
            <span className="text-2xl">
              <MdOutlineMarkEmailRead />
            </span>
            tk506089@gmail.com
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vero
        provident quos nesciunt reiciendis ipsa eaque, est tenetur cumque culpa
        et nihil eum dignissimos optio officiis sint totam vel magnam soluta
        pariatur! Ex corporis facilis deserunt aliquam, eos quae iste dolor
        perspiciatis autem, vero voluptatum delectus architecto non, odio
        quibusdam mollitia nostrum libero! Temporibus deserunt id vitae, omnis
        eius rerum excepturi, illo, beatae doloremque blanditiis commodi fuga
        possimus laboriosam dignissimos aut eos cupiditate magnam eveniet.
        Voluptatum, ipsam? Architecto blanditiis error consequatur atque?
        Tenetur, quas suscipit officia nostrum quae incidunt dicta reprehenderit
        ducimus autem repellat dolorum vitae molestiae facilis aut asperiores,
        temporibus assumenda sit commodi vero officiis. Autem dicta eius, quos,
        similique quam temporibus eligendi voluptatem neque iure quo ea laborum.
        Ut iste neque aliquam vero explicabo non, facere amet enim, illum
        ratione facilis adipisci iusto temporibus molestias ipsam? Aut beatae
        ducimus iste cumque omnis voluptatum recusandae unde esse odio sit
        autem, molestias ratione, culpa voluptas accusamus libero laudantium?
        Placeat nisi quaerat voluptate. Aut at veniam sunt atque error quia ex
        quis! Dolorum sit doloribus atque cupiditate odio sint aperiam sed quam
        voluptate, rem harum eligendi quia blanditiis, soluta, odit asperiores
        architecto voluptas eaque rerum voluptates perspiciatis maxime fuga
        minima laboriosam? Amet nam tempora nulla commodi? Assumenda, harum
        saepe animi odit corrupti sunt, at quo aliquid natus, cum tempore
        cupiditate? Laudantium expedita sequi facere voluptatem ipsam debitis,
        maiores ratione ea minima tempore ipsum libero necessitatibus odit
        possimus fuga cum numquam ipsa natus autem distinctio consequatur
        commodi qui suscipit? Exercitationem labore reprehenderit aperiam
        placeat dignissimos laudantium corrupti delectus mollitia nostrum
        aspernatur ratione consequuntur maxime ex blanditiis quas temporibus,
        officia accusamus atque voluptates consectetur odit nam, natus ad.
        Repellendus ad voluptatum delectus nihil enim, quia perspiciatis
        voluptatibus consectetur ut rem reprehenderit sapiente mollitia
        reiciendis error deserunt natus minima quam dolore voluptate eveniet
        illo?
      </p>
    </>
  );
}

export default Home;
