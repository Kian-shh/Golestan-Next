'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo-fr.png"
import { useState } from "react";

const headerobj = [
  {
    name: "صفحه اصلی",
  },
  {
    name: "شرکت گلستان",
    dropdown: [
      {
        name: "معرفی شرکت"

      },
      {

        name: "تاریخچه گلستان"

      },
      {

        name: "اخبار و اطلاعیه ها"

      },
      {

        name: "مسئولیت های اجتماعی"


      },
      {

        name: "سازمان فروش"

      },
      {

        name: "سازمان توزیع"


      },
      {

        name: "برندها"

      },


    ]
  },
  {
    name: "محصولات",
    dropdown: [
      {
        name: "چای",


      },
      {
        name: "ناتس",


      },
      {
        name: "ادویه و چاشنی",


      },
      {
        name: "برنج",


      },
      {
        name: "زعفران و زرشک",


      },
      {
        name: "دمنوش",


      },
      {
        name: "حبوبات و غلات",


      },
      {
        name: "عصاره های گیاهی",


      },
      {
        name: "قند و شکر",


      },
      {
        name: "هاتی نودل",


      },
      {
        name: "سایر محصولات",


      },
      {
        name: "گل کیس",


      },


    ]
  },
  {
    name: "وبلاگ",
    dropdown: [
      {
        name: "مجله گستان",


      }


    ]
  },
  {
    name: "قرعه کشی",
  },
  {
    name: "استخدام",
  },
  {
    name: "تماس با ما",
    dropdown: [
      {
        name: "دفتر مرکزی"

      },
      {

        name: "صدای مصرف کنندگان"
      },
      {
        name: "ارتباط با مشترکین",

      },


    ]
  },
  {
    name: "EN",
  },
]

const Header = () => {
  const [active, setActive] = useState({ category: "", index: -1 })
  const [openmenu, setOpenMenu] = useState(false)

  const hamburgerMenu = () => {
    setOpenMenu(!openmenu)


  }

  function dropdownClick(category, index) {
    setActive((prev) => {
      if (prev.category === category && prev.index === index) {
        return {
          category: "",
          index: -1
        }
      }
      return { category, index }
    })
  }

  return (
    <section className=" h-auto bg-[#201e1e] md:w-[1521px] fixed  xs:w-full z-10 " >
      <div className="  md:hidden    " >
        <div className="flex justify-center w-full">
          <Image src={Logo} alt="" />


        </div>
        <div className="" >
          <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"
            className={`text-gray-400 w-[10%] py-2 mx-4 h-[10%] `} onClick={hamburgerMenu}>
            <g clip-path="url(#clip0_429_11066)">
              <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="currentcolor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_429_11066">
                <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)" />
              </clipPath>
            </defs>
          </svg>
          <div className={` xs:overflow-Scroll  ${openmenu ? "h-[100%] flex flex-col  w-[100%] " : "hidden "} transition-all duration-2000 `} >
            {headerobj?.map((item, index) => (
              <div className={`group   w-full  px-5 py-3   `} key={index}>
                <Link className=" group-hover:text-white text-gray-400   w-full" href={"/"} onClick={() => dropdownClick("TWO", index)}>{item.name}</Link>
                {/* <hr className=" transform rotate-90 w-[50px] -translate-x-17" /> */}
                <div className={` ${active.category === "TWO" && active.index === index ? "overflow-y-auto max-h-screen scroll-webkit " : ""}  w-[100%] h-auto  group `}>
                  {item.dropdown && active.category === "TWO" && active.index === index && (
                    item.dropdown?.map((items, i) => (
                      <div key={i} className={` `}>

                        <div className=" group-hover:text-white    w-[100%] px-5 py-4 h-full" >
                          <p className=" text-gray-400 hover:text-white cursor-pointer">
                            {items.name}
                          </p>

                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>


        </div>

      </div>
      <div className=" md:-[80%] md:flex md:justify-between md:gap-x-48 relative xs:hidden  ">
        <div className="w-fit cursor-pointer">

          <Image src={Logo} alt="" className="  w-fit h-[100px] absolute bottom-0 -translate-52 translate-y-12" />
        </div>
        <div className=" w-[70%] gap-5  flex p-[27px]   ">
          {headerobj?.map((item, index) => (
            <div className={`group  relative w-full divider divide-white ${active.category === "ONE" && active.index === index ? "text-white" : "text-gray-300"}  `} onClick={() => dropdownClick("ONE", index)} key={index}>
              <Link className=" group-hover:text-white text-gray-300   w-full" href={"/"}>{item.name}</Link>
              {/* <hr className=" transform rotate-90 w-[50px] -translate-x-17" /> */}
              <div className="  absolute top-7 w-[180px] h-auto hidden group-hover:block group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
                {item.dropdown && (
                  item.dropdown?.map((items, i) => (
                    <div key={i} className={`  `}>

                      <div className="bg-gray-800   w-[100%] px-5 py-2 h-auto" >
                        <p className=" text-gray-400 hover:text-white cursor-pointer">
                          {items.name}
                        </p>

                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;