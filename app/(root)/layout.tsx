import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    Navbar
    {children}
    footer
    </>
  )
}

export default layout