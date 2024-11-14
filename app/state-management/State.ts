import { create } from "zustand";
import {db, tx, id, Cursors} from '../utils/db'
import { User } from "@instantdb/react";


interface EmailState{
    signinEmail: string
    setSigninEmail: (signinEmail: string) => void
}

interface EmailButtonState{
    signinButtonEmail: boolean
    setSigninButtonEmail: (signinButtonEmail: boolean) => void
}

interface AuthState{
    user: User
    setUser: (user: User) => void
}

export const useSigninEmailStore = create<EmailState>()((set) =>({
    signinEmail: '',
    setSigninEmail: (signinEmail: string) => set({signinEmail})
}))

export const useSigninButtonEmailStore = create<EmailButtonState>() ((set) =>({
    signinButtonEmail: false,
    setSigninButtonEmail: (signinButtonEmail: boolean) => set({signinButtonEmail})
}))

export const useAuthStore = create<AuthState>() ((set) =>({
    user: null,
    setUser: (customUser) => {
        const response = customUser
        set({user: response})
    }
}))

export const useAuthUser = () =>{
    const {user} = db.useAuth()
    return () => useAuthStore.getState().setUser(user)
}
