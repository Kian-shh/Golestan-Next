import Image from "next/image"
import footer_icon1 from "../../../public/footer-icon1.png"
import footer_icon4 from "../../../public/footer-icon4.png"
import footer_icon3 from "../../../public/footer-icon3.png"
import footer_icon2 from "../../../public/footer-icon2.png"
import Link from "next/link"

const Footer = () => {
    const footerobj = [
        {
            image: footer_icon1,
            name: "چای گلستان",
            tea_items: [
                {
                    name: "چای ممتاز هندوستان",

                },
                {
                    name: "چای ممتاز ارل گری",

                },
                {
                    name: "چای سیلان عطری",

                },
                {
                    name: "چای ممتاز سیلان",

                },
                {
                    name: "چای صبحانه گلستان",

                },
            ]




        },
        {
            image: footer_icon4,
            name: "تی بگ گلستان",
            tea_items: [
                {
                    name: "تی بگ بلک لاین",

                },
                {
                    name: "تی بگ ارل گری",

                },
                {
                    name: "دمنوش نعناع",

                },
                {
                    name: "دمنوش بابونه",

                },
                {
                    name: "دمنوش چای سبز",

                },
            ]




        },
        {
            image: footer_icon3,
            name: "ادويه گلستان",
            tea_items: [
                {
                    name: "زعفران ممتاز خراسان",

                },
                {
                    name: "ادویه کاری",

                },
                {
                    name: "ادویه ماست و خیار",

                },
                {
                    name: "فلفل سیاه خالص",

                },
                {
                    name: "زردچوبه ممتاز",

                },
            ]




        },
        {
            image: footer_icon2,
            name: "حبوبات گلستان",
            tea_items: [
                {
                    name: "لوبیا قرمز ممتاز",

                },
                {
                    name: "لوبیا چیتی گلستان",

                },
                {
                    name: "عدس کانادایی",

                },
                {
                    name: "نخود زودپز کرمانشاه",

                },
                {
                    name: "لوبیا سفید گلستان",

                },
            ]




        }





    ]



    return (<>
        <div className="font-[Kalameh] ">
            <div className="h-[100px] bg-red-500 ">
                <div className=" h-[80%] bg-gray-200 text-neutral items-center flex gap-3 w-full p-[20px] justify-center">
                    <a href="" className="hover:bg-pink-500">آپارات</a>
                    <a href="" className="hover:bg-green-500 ">مجله گستان</a>
                    <a href="" className="hover:bg-blue-500 ">تلگرام</a>
                    <a href="" className="hover:bg-red-800 ">اینستاگرام</a>
                    <a href="" className="hover:bg-cyan-500 ">لینکدین</a>
                    <a href="" className="hover:bg-blue-500">فیسبوک</a>


                </div>

            </div>


            <footer className="footer  sm:footer-horizontal md:footer-vertical md:flex md:justify-center md:items-center    p-10 ">
                <div className="w-[100%] h-auto">

                    <div className=" md:flex  md:justify-center w-[100%] md:items-baseline md:gap-5  ">
                        {footerobj?.map((items, index) => (
                            <div key={index}>

                                <nav className="flex flex-col justify-center items-center" >
                                    <Image src={items.image} alt="" className="md:w-full md:h-auto" />
                                    <h1 className=" w-fit mb-4 text-center border-t-2 border-gray-400 border-b-2 p-2 ">{items.name}</h1>
                                    <div>
                                        {items.tea_items.map((item, i) => (
                                            <div key={i}>
                                                <Link href={"/pages"} className="my-2 text-right cursor-pointer text-gray-400 hover:text-white transition-all duration-200">  {item.name} </Link>

                                            </div>

                                        ))}
                                    </div>
                                </nav>
                            </div>




                        ))}

                    </div>
                    <div className="m-auto xs:w-full md:w-fit mt-20">
                        <p className="w-[100%] pb-2 text-center">All Right Reserved Golestan Company 2022-2025</p>
                        <p className="w-[100%] text-center">Design By: Golestan Studio</p>
                    </div>



                </div>



            </footer>

        </div>



    </>);
}

export default Footer;