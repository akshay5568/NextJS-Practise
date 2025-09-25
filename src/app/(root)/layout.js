
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftComponent from '../../components/LeftComponent';
import RightComponent from '../../components/RightComponent';
import { auth } from '@clerk/nextjs/server';



export default async function RootLayout({ children }) {
  const link = [
    {link:"/",name:"Home"},
    {link:"/about",name:"About"},
    {link:"/",name:"Transaction"},
    {link:"/",name:"Jobs"},
    {link:"/",name:"Contect"}
  ];

  const {isAuthenticated} = await auth();
  
  return (
    <main>

     <Navbar user={isAuthenticated}/>
        <div className="flex items-center">
        <LeftComponent data={link}/>  
        {children}
        <RightComponent/>
        </div>
        <Footer/>
    </main>
  );
}
