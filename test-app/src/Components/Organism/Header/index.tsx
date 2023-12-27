import style from './style.module.css'
import { Button } from '@/Components/Atom/Button'
import Logo from '@/Components/Atom/Logo/page'
import React from 'react'

function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <Button>Menu</Button>
    </header>
  )
}

export default Header
