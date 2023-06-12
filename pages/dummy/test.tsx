import { GetStaticProps } from 'next';
import React from 'react'
interface UserData {
    name: string;
  }
  
  interface ApiDataProps {
    userData: UserData;
  }

export const getStaticProps: GetStaticProps<ApiDataProps> = async ()=>{
    const res = await fetch('/api/user/umer')
    const data = await res.json()

    return {
        props:{
            userData: data,
        }
    }
}
interface ApiDataProps {
    userData: UserData;
  }

const test:React.FC<ApiDataProps> = ({userData}) => {
  return (
    <>
      {userData ? (
        <p>Name: {userData.name}</p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default test