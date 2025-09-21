

export async function GET () {
       const data = [
         {name:"Aditya", age:20},
         {name:"Akshay", age:58},
         {name:"Salman", age:59},
       ]
       return Response.json(data) 
}


