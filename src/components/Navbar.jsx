


import Link from "next/link";
const Navbar = ({user}) => {

  const id1 = Math.floor(Math.random() * 100 + 1);
   const profileName = "aditya";
  return (
    <div className="text-red-600 w-full bg-amber-100 p-3 flex items-center gap-3 justify-between">   
      <Link href={'/'}>NAVBAR</Link>
      <div className="text-sm text-blue-600 gap-3 flex items-center">
      {user && <Link href={'/about'}>About</Link>}
     {user && <Link href={`/profile/${id1}`}>Profile</Link>}
      {user && <Link href={`/todo`}>Todo App Useing NextJs</Link>}
      {user &&  <Link href={`/dummy-data`}>Data From Dummy</Link>}
     {user &&  <Link href={`/server-side-data-rendering`}>Server</Link>   }
      {user || <Link href={`/signin`}>SignIn</Link>}
      {user && <Link href={`/weather-app`}>Weather APP</Link>}
      </div>
    </div>
  );
};

export default Navbar;
