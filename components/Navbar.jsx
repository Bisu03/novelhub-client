import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaSearch, FaUser, FaUserAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ color, HandleColorChange }) => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [Notofication, setNotofication] = useState(false);
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
        setMenu(false);
        setInputWidth(false);
      }
      if (InputWidth && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
        setMenu(false);
        setInputWidth(false);
      }
      if (menu && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
        setMenu(false);
        setInputWidth(false);
      }
      if (Notofication && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
        setMenu(false);
        setInputWidth(false);
        setNotofication(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [show, InputWidth, menu,Notofication]);

  return (
    <>
      <nav
        className={`fixed flex items-center justify-between lg:py-3 py-1.5  ${
          color == "Dark"
            ? colorChange
              ? "navbar-glassmorphismdark"
              : "bg-skin-backgroud  "
            : colorChange
            ? "navbar-glassmorphismlight"
            : "bg-skin-secondary"
        } w-full z-[1000] `}>
        <div className="flex justify-between items-center w-full container mx-auto px-18">
          <div className="lg:text-3xl text-2xl h-full p-1 w-48 cursor-pointer">
            <Link href={"/"}>
              <span
                className={` ${
                  color == "Dark" ? "text-skin-base" : "text-skin-grey"
                } font-semibold font-mono`}>
                Web
              </span>
              <span className="text-skin-red font-semibold font-mono">
                Novel
              </span>
            </Link>
          </div>

          <div
            className={`lg:flex md:flex hidden ${
              color == "Dark" ? "text-skin-base" : "text-skin-grey"
            }   w-full pl-5`}>
            <div className="text-lg font-medium h-full p-1 pl-3 cursor-pointer">
              <span>Author</span>
            </div>
            <div className="text-lg font-medium h-full p-1 pl-3 cursor-pointer">
            <Link href={"/bookmarks"}>Bookmark</Link>
            </div>
            <div className="text-lg font-medium h-full p-1 pl-3 cursor-pointer">
              <div className=" dropdown dropdown-hover ">
                <label
                  tabIndex={0}
                  className={` ${
                    color == "Dark" ? "text-skin-base" : "text-skin-grey"
                  } flex place-items-center `}>
                  Others <RiArrowDownSFill />{" "}
                </label>
                <ul
                  tabIndex={0}
                  className={`dropdown-content ${
                    color == "Dark"
                      ? "text-skin-base bg-skin-color7"
                      : "text-skin-grey bg-skin-secondary"
                  }  menu p-2 shadow rounded-box w-52`}>
                  <li>
                    <a className=" text-base">Ranking</a>
                  </li>
                  <li>
                    <a className=" text-base">All Novels</a>
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
                className={`justify-center  lg:flex md:flex hidden border-none ${
                  color == "Dark"
                    ? "text-skin-base bg-skin-color7"
                    : "text-skin-grey bg-skin-color5"
                }  w-auto rounded-full p-1`}
                onClick={HandleExtend}>
                <div
                  className={`content-center grid ${
                    color == "Dark"
                      ? "text-skin-base bg-skin-color7"
                      : "text-skin-grey bg-skin-color5"
                  }  ml-3 p-2`}>
                  <FaSearch />
                </div>
                <input
                  type="Search"
                  placeholder="Search for Topic, Author, Novel.."
                  className={` mx-3 ${InputWidth ? " w-64" : " w-16"}  ${
                    color == "Dark"
                      ? "text-skin-base bg-skin-color7"
                      : "text-skin-grey bg-skin-color5"
                  }  border-none ease-in-out duration-300 outline-none`}
                />
              </div>
            </Link>

            <div
              onClick={() => setNotofication(!Notofication)}
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
            <div
              data-tip="Menu"
              className="tooltip tooltip-bottom justify-center flex lg:hidden md:hidden border-none bg-skin-color7 cursor-pointer w-auto rounded-full p-2">
              <label className=" swap swap-rotate bg-skin-color7 cursor-pointer h-6 w-6">
                <input type="checkbox" onClick={() => setMenu(!menu)} />
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
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
                className={`absolute h-auto w-auto ${
                  color == "Dark" ? " bg-skin-color7" : " bg-skin-secondary"
                }  top-12 lg:top-16 md:top-16 rounded-2xl`}>
                <ul
                  className={`menu menu-compact  lg:menu-normal w-56 p-2 rounded-box ${
                    color == "Dark" ? "text-skin-base " : "text-skin-grey "
                  } `}>
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/profile/234234"}>Profile</Link>
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
                    <Link href={"/announcement"}>Announcement</Link>
                  </li>
                  <li>
                    <Link href={"/bookmarks"}>Bookmark</Link>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                  {/* <li>
                    <a className=" flex w-full justify-between  border-none cursor-pointer  ">
                      <p>Mode</p>
                      <label className="swap swap-rotate">
                        <input type="checkbox" onClick={HandleColorChange} />

                        <svg
                          className="swap-off fill-current w-6 h-6 text-skin-yello "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        <svg
                          className="swap-on fill-current w-6 h-6 text-skin-inverted "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </a>
                  </li> */}
                </ul>
              </div>
            )}
            {menu && (
              <div
                className={`absolute h-auto w-auto ${
                  color == "Dark" ? " bg-skin-color7" : " bg-skin-secondary"
                }  top-12 lg:top-16 md:top-16 rounded-2xl`}>
                <ul
                  className={`menu menu-compact  lg:menu-normal w-56 p-2 rounded-box ${
                    color == "Dark" ? "text-skin-base " : "text-skin-grey "
                  } `}>
                  <li>
                    <a>Bookmark</a>
                  </li>
                  <li>
                    <a>Ranking</a>
                  </li>
                  <li>
                    <a>Author</a>
                  </li>
                  <li>
                    <a>Category</a>
                  </li>
                </ul>
              </div>
            )}

            {Notofication && (
              <div
                className={`absolute h-auto w-auto ${
                  color == "Dark" ? " bg-skin-color7" : " bg-skin-secondary"
                }  top-12 lg:top-16 md:top-16 rounded-2xl`}>
                <ul className="menu w-60 rounded-xl">
                  <div className="flex justify-center  pt-5  ">
                    <button className="btn btn-xs mr-2 border-skin-primary text-skin-inverted ">
                      Announcement
                    </button>
                    <button className="btn btn-xs mr-2 border-skin-primary text-skin-inverted ">
                      Notification
                    </button>
                  </div>
                  <div className="bg-skin-color6 mt-5 flex justify-center w-full ">
                    <p>mark all readed</p>
                  </div>

                  <div className="h-full  flex  items-center   p-4 rounded-lg">
                    <Image
                      src="https://placeimg.com/180/180/arch"
                      width={50}
                      height={50}
                      alt="image"
                      className="rounded-full object-cover resize-none "
                    />
                    <div className="flex-grow ml-2 ">
                      <h2 className="text-skin-base title-font font-medium text-sm ">
                        Server Maintenance
                      </h2>
                      <p className="text-skin-inverted text-xs">
                        posted 1day ago
                      </p>
                    </div>
                  </div>
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
