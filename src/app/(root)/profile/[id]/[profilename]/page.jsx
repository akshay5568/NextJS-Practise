'use client'
const { useParams } = require("next/navigation")

const ProfileName = () => {
    const {id,profilename} = useParams();

     return (
        <div className="p-3 w-full">
            <h1>Profile Name : {profilename}</h1>   
            <h1>Profile ID : {id}</h1>
        </div>
     )
} 

export default ProfileName;