import React from 'react'

const Header = ({ children }) => {
  return (
    <header className="usa-header usa-header--basic">
      {children}
    </header>
  )
}

export default Header