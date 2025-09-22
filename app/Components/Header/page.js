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
    name: "شرکت گستان",
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
    <section className="fixed h-auto bg-gray-700 w-fit" >
      <div className=" w-full flex justify-between  relative">
        <div className="w-fit ">

          <Image src={Logo} alt="" className="  w-fit h-[100px] absolute bottom-0 -translate-52 translate-y-12" />
        </div>
        <div className=" w-[70%] gap-5  flex p-[27px] group">
          {headerobj?.map((item, index) => (
            <div className={`  relative w-full  ${active.index === index ? "  text-white" : "text-gray-400"}     `} onClick={() => dropdownClick("ONE", index)} key={index}>
              <Link className="  w-full" href={"/"}>{item.name}</Link>
              {/* <hr className=" transform rotate-90 w-[50px] -translate-x-17" /> */}
              <div className="  absolute top-10 w-[180px] h-auto group   ">
                {item.dropdown && active.category === "ONE" && active.index === index && (
                  item.dropdown?.map((items, i) => (
                    <div key={i} className={`${active.category === "ONE" && active.index === index && "hidden" ? "group-hover:block" : "hidden"}`}>

                      <div className="bg-gray-800  w-[100%] px-5 py-2 h-auto" >
                        <p className=" text-gray-400">
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