import { create } from "zustand";

interface EmailState{
    signinEmail: string
    setSigninEmail: (signinEmail: string) => void
}

interface EmailButtonState{
    signinButtonEmail: boolean
    setSigninButtonEmail: (signinButtonEmail: boolean) => void
}

export const useSigninEmailStore = create<EmailState>()((set) =>({
    signinEmail: '',
    setSigninEmail: (signinEmail: string) => set({signinEmail})
}))

export const useSigninButtonEmailStore = create<EmailButtonState>() ((set) =>({
    signinButtonEmail: false,
    setSigninButtonEmail: (signinButtonEmail: boolean) => set({signinButtonEmail})
}))