'use client'

import { useSession } from "next-auth/react"
import Login from "./Login"

export default function AuthClient({children}:{children: React.ReactNode}) {
    const { status } = useSession()
    if (status != "authenticated") {
        return (
            <>
                <h1>AuthClient</h1>
                <Login />
            </>)
    }

    return children;
}