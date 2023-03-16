import React from 'react'

const NavBar = () => {
  const date = Date()
  const newDate = date.toLocaleString().slice(0, 15)
  return(
    <div>
      <h1 style={{fontSize: '3rem'}}>Task Master</h1>
      <div>
        {newDate}
      </div>
    </div>
  )
}

export default NavBar