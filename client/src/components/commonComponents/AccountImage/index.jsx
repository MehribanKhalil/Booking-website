import { useGetMe } from '@/hooks/UserHooks';
import React from 'react'

const AccountImage = () => {
  const { data, loading, error } = useGetMe();

  return (
    <div className=' flex justify-center items-center rounded-full mt-1 w-[38px] h-[38px]'>
        <img src={data?.avatar} alt="avatar" className='bg-white rounded-full object-contain  w-full h-full' />
    </div>
  )
}

export default AccountImage