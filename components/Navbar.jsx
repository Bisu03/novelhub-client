import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaSearch, FaUser, FaUserAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [InputWidth, setInputWidth] = useState(false);
  const router = useRouter();

  const HandleExtend = () => {
    setInputWidth(true);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const ref = useRef();

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
        setInputWidth(false);
      }
      if (InputWidth && ref.current && !ref.current.contains(e.target)) {
        setInputWidth(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [show, InputWidth]);

  return (
    <>
      <nav
        className={`fixed flex flex-wrap items-center justify-between lg:py-3 py-1.5  ${
          colorChange ? "navbar-glassmorphism" : "bg-skin-color4"
        } w-full z-[1000] `}>
        <div className="flex justify-between items-center w-full container mx-auto px-18">
          <div className="lg:text-3xl text-xl h-full p-1 w-48 cursor-pointer">
            <Link href={"/"}>
              <span className="text-skin-base font-semibold font-mono">
                Web
              </span>
              <span className="text-skin-red font-semibold font-mono">
                Novel
              </span>
            </Link>
          </div>

          <div className="flex  w-full pl-5">
            <div className=" text-lg font-medium h-full p-1  cursor-pointer">
              <span className="text-skin-base ">Category</span>
            </div>
            <div className="text-lg font-medium h-full p-1 pl-3 cursor-pointer">
              <span className="text-skin-base ">Author</span>
            </div>
            <div className="text-lg font-medium h-full p-1 pl-3 cursor-pointer">
              <span className="text-skin-base ">Ranking</span>
            </div>
            <div className="text-lg font-medium h-full p-1 pl-3 cursor-pointer">
              <div className=" dropdown dropdown-hover ">
                <label
                  tabIndex={0}
                  className=" text-skin-base flex place-items-center ">
                  Others <RiArrowDownSFill />{" "}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-skin-color7 menu p-2 shadow rounded-box w-52">
                  <li>
                    <a className="text-skin-base text-base">Bookmark</a>
                  </li>
                  <li>
                    <a className="text-skin-base text-base">All Novels</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="flex justify-end items-center w-48 lg:w-full space-x-3 lg:space-x-4 md:space-x-8 "
            ref={ref}>
            <Link href="/search">
              <div
                className="justify-center flex border-none bg-skin-color7 w-auto rounded-full p-1"
                onClick={HandleExtend}>
                <div className="content-center grid text-skin-base bg-skin-color7 ml-3 p-2">
                  <FaSearch />
                </div>
                <input
                  type="Search"
                  placeholder="Search for Topic, Author, Novel.."
                  className={` mx-3 ${
                    InputWidth ? " w-64" : " w-16"
                  }  text-skin-base bg-skin-color7 border-none ease-in-out duration-300 outline-none`}
                />
              </div>
            </Link>

            <div
              data-tip="notification"
              className="tooltip tooltip-bottom justify-center cursor-pointer indicator flex border-none bg-skin-color7 w-auto rounded-full p-2">
              <span className="  top-2  indicator-item indicator-top indicator-end badge badge-accent">
                9
              </span>
              <MdNotifications className="text-skin-base h-6 w-6 " />
            </div>
            <div
              data-tip="Profile menu"
              className="tooltip tooltip-bottom justify-center flex border-none bg-skin-color7 cursor-pointer w-auto rounded-full p-2"
              onClick={() => setShow(!show)}>
              <FaUser className="text-skin-base h-6 w-6 " />
            </div>
            <>
              {/* <div
                className="flex items-center justify-center w-[34px] h-[34px] lg:w-[36px] lg:h-[36px] cursor-pointer"
                onClick={() => setShow(!show)}>
                <Image
                  src={
                    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  }
                  alt="profile image"
                  width={180}
                  height={180}
                  className="object-cover rounded-full"
                />
              </div> */}
            </>

            {/* <>
                  <button className=" md:block py-1 w-36 bg-skin-primary text-skin-base rounded-2xl">
                    Login
                  </button>
                  <button className="hidden lg:block py-1 w-36 bg-skin-primary text-skin-base rounded-2xl">
                    Register
                  </button>
               
              </> */}

            {show && (
              <div
                className={`absolute h-auto w-auto bg-skin-color7 top-12 lg:top-16 md:top-16 rounded-2xl`}>
                <ul className="menu menu-compact  lg:menu-normal w-56 p-2 rounded-box text-skin-base">
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>
                      Notification
                      <span className="indicator-item indicator-top indicator-end badge badge-accent">
                        99+
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>Setting</a>
                  </li>
                  <li>
                    <a>Announcement</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                  <li>
                    <a className=" flex w-full justify-between  border-none cursor-pointer bg-skin-color7 ">
                      <p>Mode</p>
                      <input data-tip="Dark"  type="checkbox" className="tooltip tooltip-bottom toggle" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
