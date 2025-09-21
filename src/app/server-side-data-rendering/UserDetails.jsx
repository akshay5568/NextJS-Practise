
const UserDetails = ({data}) => {
    return (
         <div>
            {data.map(item => {
                return (
                    <div className="flex w-full justify-between p-3">
                         <h1>{item.name}</h1>
                         <h1>{item.email}</h1>
                    </div>
                )
            })}
         </div>
    )
}

export default UserDetails;