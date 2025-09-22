
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";


export default function RootLayout({ children }) {
  const link = [
    {link:"/",name:"Home"},
    {link:"/about",name:"About"},
    {link:"/",name:"Transaction"},
    {link:"/",name:"Jobs"},
    {link:"/",name:"Contect"}
  ];
  return (
    <main>
        <Navbar/>
        <div className="flex items-center">
        <LeftComponent data={link}/>  
        {children}
        <RightComponent/>
        </div>
        <Footer/>
    </main>
  );
}
