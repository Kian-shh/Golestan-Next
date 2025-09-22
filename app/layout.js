import "./globals.css";

export const metadata = {
  title: "صفحه اصلی - وبسایت رسمی شرکت گلستان | golestan",
  description: "مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و باtext-gray-400",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className=" w-[1521px] h-auto  m-auto">
        <div className="w-[100%]  h-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
