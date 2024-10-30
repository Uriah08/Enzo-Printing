"use client"

import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';

const AdminPage = () => {

  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if(!isAuthenticated) return <div>Not Logged in</div>

  return (
    <div className='w-full h-full'>
      {/* <div className='border border-zinc-300 w-full max-w-[1200px] place-self-center'>
        <div className='flex gap-3'>
          <h1>Products</h1>
          <h1 className=''></h1>
        </div>
      </div> */}
    </div>
  );
}

export default AdminPage