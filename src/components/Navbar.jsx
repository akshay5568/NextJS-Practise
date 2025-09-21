import Link from "next/link";

const Navbar = () => {
  const id1 = Math.floor(Math.random() * 100 + 1);
   const profileName = "aditya";
  return (
    <div className="text-red-600 w-full bg-amber-100 p-3 flex items-center gap-3 justify-between">
      <Link href={'/'}>NAVBAR</Link>
      <div className="text-sm text-blue-600 gap-3 flex items-center">
      <Link href={'/about'}>About</Link>
      <Link href={`/profile/${id1}`}>Profile</Link>
      <Link href={`/todo`}>Todo App Useing NextJs</Link>
      <Link href={`/dummy-data`}>Data From Dummy</Link>
      <Link href={`/server-side-data-rendering`}>Server</Link>
      </div>
    </div>
  );
};

export default Navbar;
