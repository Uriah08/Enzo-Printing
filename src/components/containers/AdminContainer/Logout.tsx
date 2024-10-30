"use client"
import { useAuthStore } from "@/store/useAuthStore"
import { useRouter } from "next/navigation"

const Logout = () => {

    const { logout } = useAuthStore()

    const router = useRouter()

    const handleBtn = () => {
      logout()
      router.push('/')
    }

  return (
    <button onClick={handleBtn} className="py-2 px-4 bg-main rounded-full font-medium text-[#f3f3f3]">
        Logout
    </button>
  )
}

export default Logout