'use client'
import { db } from './utils/db'
import Link from "next/link";


export default function Home() {
  const { user } = db.useAuth()
  return (
    <div className="h-[120vh]">
      {user ? user.email: <h1>null</h1>}
      <Link href='/signin'>click signin</Link>
    </div>
  );
}
