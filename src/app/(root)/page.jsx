import { SignIn } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";


const Home = async () => {
   const user  = await currentUser();
   console.log(user)
   return (
      <div className="w-full h-screen text-center">
         <h1>Hello,it is Home page for the project.</h1>
         <h2 className="flex items-center justify-center">{user ? user.firstName : <SignIn/>}</h2>
         <div className="cursor-pointer"><SignOutButton/></div>
     </div>
   )
} 

export default Home;