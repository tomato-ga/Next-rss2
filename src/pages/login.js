import React from 'react'
import Header from '@/components/Header'
import SupaAuth from '@/auth/signIn'

const Login = () => {
  return (
    <>
    <Header />
    <SupaAuth />
    </>
  )
}

export default Login;