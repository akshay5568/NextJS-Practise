import Link from "next/link";

const LeftComponent = ({data}) => {
    return (
        <div className="bg-blue-950 text-black h-screen w-[40%] text-center">
             {data.map((links,index) => {
                return (
                    <Link key={index} href={links.link} className="block text-white">{links.name}</Link>   
                )
             })}
        </div>
    )
}

export default LeftComponent;