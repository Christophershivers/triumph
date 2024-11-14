'use client'
import Image from "next/image";
import { useAuthStore } from "./state-management/State";
import {db} from './utils/db'
import Link from "next/link";

export default function Home() {
  //const {user} = useAuthStore()
  
  const {isLoading, user, error} = db.useAuth()
  console.log(user)
  return (
    <div className="">
      {user ? user.email: <h1>null</h1>}
      <Link href='/signin'>click signin</Link>
    </div>
  );
}
