import Link from "next/link";
import UserDetails from "./server-side-data-rendering/UserDetails";


const Home = async () => {
   const id1 = Math.floor(Math.random() * 100 + 1);
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await res.json();

   const profileName = "aditya";
   return (
      <div className="w-full h-screen">
         <h1>Hello,it is Home page for the project.</h1>
     </div>
   )
} 

export default Home;