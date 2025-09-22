import UserDetails from "./UserDetails"


export default async function Home(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return <UserDetails data={users} />
}