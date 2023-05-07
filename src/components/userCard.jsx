"use client";
import { useRouter } from "next/navigation"
import Image from "next/image"


function UserCard({data}){
    const router = useRouter()
    return (
        <div>
            <ul>
      {
          data.map((el) => (
          <li key={el.id}
          onClick={() => {
            router.push(`/users/${el.id}`)
          }}>
            <h3>{el.first_name}</h3>
            <Image width="50" height="50"src={el.avatar} alt={el.id}/>
            </li>
        ))
      }
        </ul>
        </div>
    )
}


export default UserCard