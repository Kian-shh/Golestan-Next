import Image from "next/image"
import hosp_image from "../../../public/csr-pic1.jpg"
import Image2 from "../../../public/tea-pic1.png"
import "./layout"
import Statistics_1 from "../../../public/statistics-icon-1.png"
import Statistics_2 from "../../../public/statistics-icon-2.png"
import Statistics_3 from "../../../public/statistics-icon-3.png"
import Statistics_4 from "../../../public/statistics-icon-4.png"
import Link from "next/link"
import img_card1 from "../../../public/recipe-pic-Chilakile-1401.jpg"
import img_card2 from "../../../public/recipe-pic2.jpg"
import img_card3 from "../../../public/recipe-pic3.jpg"
import rice_img from "../../../public/image2-new-1.jpg"
import tea_img from "../../../public/image3-new.jpg"
import pistachio_img from "../../../public/image4-new.jpg"
const foodsobj = [
    {
        image: img_card3,
        name: "ماکارونی با سبزیجات",
        description: "ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود"



    },
    {
        image: img_card2,
        name: "سوپ مکزیکی",
        description: "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده"



    },
    {
        image: img_card1,
        name: "چیلاکیله",
        description: "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست"



    },


]
const videoobj = [
    {
        image: Statistics_1,
        name: "سالاد نودل",
        description: "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
        btn_action: "ویدیو های بیشتر"


    },
    {
        image: Statistics_2,
        name: "اینستاگرام هاتی نودل",
        description: "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
        btn_action: "ادامه مطلب"


    },
    {
        image: Statistics_4,
        name: "برنج گلستان",
        description: "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
        btn_action: "مشاهده محصولات"



    },


]

const Firstpage = () => {
    return (
        <section className="bg-white xs:pt-40  md:pt-17">
            <div className=" bg-linear-to-t from-gray-300 via-[#c1c1c1] to-gray-100  w-full h-auto">
                <div className="   md:w-[80%] flex xs:flex-col xs:justify-center xs:w-[100%] xs:p-4 md:p-10 md:flex-row md:items-center md:justify-between ">
                    <div className=" flex flex-col  md:px-40 w-[100%] h-auto    ">

                        <h1 className=" mt-9 xs:w-full    text-red-600 text-[32px]  text-right">قرعه‌کشی مصرف‌کنندگان گلستان</h1>

                        <p className=" text-black mt-5 text-[22px] ">
                            قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان</p>
                        <p className="md:w-[100%] xs:w-[100%] my-5 xs:leading-8 text-justify">
                            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
                        </p>
                        <button className=" rounded-[6px] px-3 bg-white border-0 text-black hover:text-white hover:bg-red-500  btn w-fit">اطلاعات بیشتر</button>
                    </div>
                    <div className="w-[100%]">
                        <Image src={Image2} alt="golestan-tea" className=" md:w-[420px] md:h-auto " />
                    </div>




                </div>



            </div>
            {/* ----introduction */}

            <div className=" w-fit m-auto">  <hr /></div>
            <div className="w-[100%] bg-white p-[40px]">
                <div className="w-[100%] flex  justify-center items-center">
                    <div className=" md:w-[50%] xs:w-[100%] flex flex-col">
                        <h1 className="text-red-600 font-bold">
                            معرفی گلستان
                        </h1>
                        <p className="text-gray-400 text-justify flex flex-col gap-8 md:leading-8 xs:leading-10">
                            آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید. <span className="  line-clamp-[20px]">هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان است.</span>
                        </p>

                        <div className="mt-20">
                            <h1 className="text-red-500 font-bold">محصولات گلستان​</h1>
                            <p className="text-gray-400  text-justify md:leading-8 xs:leading-10 ">
                                <span className="text-red-500">نام تجاری گلستان</span> قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 w-[60%] gap-5 xs:grid-cols-1    mt-24 m-auto">
                    <div className="w-[100%] ">
                        <div className=" flex flex-col justify-center items-center gap-1">
                            <Image src={Statistics_4} className="" alt="" />
                            <p className="text-gray-400 text-center">سرمایه انسانی</p>
                            <hr className=" w-[100%] mt-4 text-gray-300 m-auto " />
                        </div>


                    </div>
                    <div className="w-full">
                        <div className=" w-full  flex flex-col justify-center items-center gap-1 ">
                            <Image src={Statistics_3} alt="" />
                            <p className="text-gray-400 text-center">مراكز فروش

                            </p>
                            <hr className=" w-[100%] mt-4 text-gray-300 m-auto " />
                        </div>


                    </div>
                    <div className="w-full">
                        <div className=" w-full  flex flex-col justify-center items-center gap-1 ">
                            <Image src={Statistics_2} alt="" />
                            <p className="text-gray-400 text-center"> محصولات گلستان

                            </p>
                            <hr className=" w-[100%] mt-4 text-gray-300 m-auto " />
                        </div>


                    </div>
                    <div className="w-full">
                        <div className=" w-full  flex flex-col justify-center items-center  gap-1">
                            <Image src={Statistics_1} alt="" />
                            <p className="text-gray-400 text-center">مشتریان گلستان

                            </p>
                            <hr className=" w-[100%] mt-4 text-gray-300 m-auto " />
                        </div>


                    </div>

                </div>
            </div>
            <div className="w-full my-10 m-auto text-black"><hr /></div>
            <div className="bg-amber-200 w-full xs:h-auto md:h-[630px] ">
                <div className="  w-full relative ">
                    <div className=" ">
                        <Image src={rice_img} alt="" className="w-full h-[100%]" />
                    </div>
                    <div className="bg-red-500 md:w-[15%] md:bottom-0 md:translate-y-1/4 md:-translate-x-11/12 p-3 md:absolute ">
                        <h1 className="text-[32px]"> برنج گلستان</h1>
                        <p>معرفی محصول</p>
                    </div>
                </div>

            </div>
            <div className="w-full my-10 m-auto text-black"> <hr /></div>

            <div className=" mb-7 w-full flex justify-center items-center ">
                <div className="md:w-[50%] xs:px-10 flex flex-col gap-5 xs:w-full " >
                    <h1 className=" text-red-500 font-bold">
                        رکن اول غذای ایرانی                </h1>
                    <p className=" text-gray-400 md:leading-9 xs:leading-12 text-justify">
                        مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.                </p>
                    <div className="flex gap-2">
                        <button className=" w-fit btn btn-ghost rounded-[8px] text-gray-400 btn-outline mt-6">آشپزخانه گلستان</button>
                        <button className="w-fit btn btn-ghost rounded-[8px] text-gray-400 btn-outline mt-6">محصولات برنج</button>

                    </div>
                </div>

            </div>
            <div className="bg-amber-200 w-full xs:h-auto  md:h-[630px] ">
                <div className=" relative w-full   ">
                    <div className="w-full h-[20%]">
                        <Image src={tea_img} alt="" className=" w-full" />
                    </div>
                    <div className="bg-red-500 md:w-[15%] md:bottom-0 md:translate-y-1/4 md:-translate-x-11/12 p-3 md:absolute ">
                        <h1 className="text-[32px]"> چای گلستان</h1>
                        <p>معرفی محصول</p>
                    </div>
                </div>

            </div>
            <div className="w-full my-10 m-auto text-black"> <hr /></div>
            <div className=" mb-7 w-full flex justify-center items-center ">
                <div className="md:w-[50%] xs:w-[100%] xs:px-12 flex flex-col gap-5 " >
                    <h1 className=" text-red-500 font-bold">
                        سابقه‌ای به قدمت یک عمر             </h1>
                    <p className=" text-gray-400 xs:leading-8">
                        چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.                </p>
                    <p className="leading-8 text-justify text-gray-400"> برای مردمان ایران زمین نام <span className="text-red-500 font-bold"> گلستان</span> با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است..</p>
                    <div className="flex gap-2">
                        <button className=" w-fit btn btn-ghost rounded-[8px] text-gray-400 btn-outline mt-6">محصولات چای</button>

                    </div>
                </div>

            </div>
            <div className="bg-amber-200 w-[100%] xs:h-auto md:h-[630px] ">
                <div className=" relative w-full  ">
                    <div className="w-full h-[100%]">
                        <Image alt="" src={pistachio_img} className="w-full" />
                    </div>
                    <div className="bg-red-500 md:w-[15%] md:bottom-0 md:-translate-x-11/12 p-3 md:translate-y-1/4  md:absolute ">
                        <h1 className="text-[32px]"> پسته گلستان</h1>
                        <p>معرفی محصول</p>
                    </div>
                </div>

            </div>
            <div className="w-full my-10 m-auto text-black"> <hr /></div>
            <div className=" mb-7 w-full flex justify-center items-center ">
                <div className="md:w-[50%] xs:px-12 flex flex-col gap-5 " >
                    <h1 className=" text-red-500 font-bold">
                        آجيل‌های خوش خنده             </h1>
                    <p className=" text-gray-400 xs:leading-8">
                        خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.                </p>
                    <p className="leading-8 text-justify text-gray-400"><span className="text-red-500 font-bold text-justify">پسته گلستان</span> اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.</p>
                    <div className="flex gap-2">
                        <button className=" w-fit btn btn-ghost rounded-[8px] text-gray-400 btn-outline mt-6">ناتس گلستان</button>

                    </div>
                </div>

            </div>
            <div className="bg-[url('https://media.licdn.com/dms/image/v2/D5616AQHoCTOqDqTvSA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1671164946181?e=2147483647&v=beta&t=Uhm7Y04U-hSwTP2fzxT5SpCM0ZKDOeWGTo4WfXTa578')] w-full h-auto bg-fixed bg-cover p-25 bg-center"></div>

            <div className="  h-auto w-full"><h1 className="px-[70px] text-[21px] py-[30px] text-red-500 font-bold">مجله گلستان</h1></div>
            <div className="bg-[#a2d19e] w-full flex justify-center">
                <div className="md:w-[60%] xs:w-[80%] xs:flex-col xs:p-10 md:flex-row md:p-18 flex gap-4   ">
                    {foodsobj.map((item, i) => (
                        <div className="card rounded-[1px]  bg-white md:w-[50%] shadow-2xl" key={i}>
                            <figure>
                                <Image alt="" src={item.image} className="w-full" />
                            </figure>
                            <div className="card-body w-full">
                                <Link href={"/somewhere/:id"} className=" text-red-500 card-title"> {item.name}</Link>
                                <p className="w-[100%] text-gray-300">{item.description}</p>
                                <div className="card-actions ">
                                    <button className="btn btn-outline text-gray-300">ادامه مطلب</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-full  flex justify-center">
                <div className="md:w-[60%] xs:p-10  xs:gap-6 xs:w-[80%]  md:p-18 xs:flex-col md:flex-row md:gap-4 flex xs:justify-center    ">
                    {videoobj.map((item, i) => (
                        <div className="card rounded-[1px] xs:w-full shadow-2xl  bg-white md:w-[50%] " key={i}>
                            <figure>
                                <Image alt="" src={item.image} className="w-full" />
                            </figure>
                            <div className="card-body w-full">
                                <Link href={"/*"} className=" text-red-500 card-title"> {item.name}</Link>
                                <p className="w-[100%] text-gray-300">{item.description}</p>
                                <div className="card-actions ">
                                    <button className="btn btn-outline text-gray-300"> {item.btn_action} </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-full bg-amber-100 h-[600px]">
                <div className="bg-[#02504e] w-full h-[97%] flex justify-center items-center ">
                    <div className="w-[100%] relative flex flex-col  items-center gap-3" >
                        <p>
                            مسئوليت‌های اجتماعی شركت گلستان
                        </p>
                        <hr className="w-full text-[#028883]" />
                        <div className="flex flex-col justify-center items-center">
                            <h1 className=" capitalize text-[#06d8d1]"><span className="text-[24px] text-[#05aca6]">Golestan</span> social responsibility</h1>
                            <p className="capitalize text-gray-400">mahdi hospital</p>
                            <Image alt="" src={hosp_image} className="absolute top-0 md:translate-y-27 xs:translate-y-29  shadow-2xl md:w-[360px] xs:w-[95%] h-auto" />
                        </div>
                    </div>
                </div>


            </div>
            <div className="w-full flex justify-center mt-17">
                <div className="sm:w-[100%]   md:w-[60%] md:flex md:flex-col md:gap-4 p-17">
                    <h1 className="text-red-500 font-bold">مسئوليت‌های اجتماعی گلستان</h1>
                    <p className="text-gray-500 leading-9 sm:w-[100%]">كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. <span className="text-red-500 font-bold">گلستان</span> در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.

                    </p>
                    <button className="btn btn-outline rounded-[8px] hover:bg-red-500 hover:text-white text-gray-500 w-fit">اطلاعات بیشتر</button>
                </div>

            </div>

        </section>);
}

export default Firstpage;