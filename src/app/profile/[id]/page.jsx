'use client'

import Link from "next/link";
import { useParams } from "next/navigation";


const Profile = () => {
    const id = useParams().id;
    const name = "aditya"
   return (
      <div className="p-3">
           <h1 className="mb-3">Hello Aditya Jangid Your ID is: {id}</h1>
           <Link href={`/profile/${id}/${name}`} className="text-yellow-300 border-1 rounded-md">Full Profile Page</Link>
      </div>
   )
}

export default Profile;