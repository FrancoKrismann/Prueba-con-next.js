import userFetch from "@/pages/api/Api"

import UserCard from "@/components/userCard"
export default async function IndexPage (){
  const data = await userFetch()

  return (
    <div>
      <h1>Hello world</h1>
      <UserCard data={data}/>
      
    </div>
  )
}