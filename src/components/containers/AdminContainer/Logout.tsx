"use client"
import { useAuthStore } from "@/store/useAuthStore"

const Logout = () => {

    const { logout } = useAuthStore()

  return (
    <button onClick={logout} className="py-2 px-4 bg-main rounded-full font-medium text-[#f3f3f3]">
        Logout
    </button>
  )
}

export default Logout