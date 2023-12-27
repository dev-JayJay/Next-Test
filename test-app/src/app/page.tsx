"use client";

import Header from '@/Components/Organism/Header'
import style from './page.module.css'
import LandingPage from '@/Components/Pages/LandinPage';
import Footer from '@/Components/Organism/Footer';

export default function Home() {
  return (
    <main className={style.body}>
     <Header />
     <LandingPage />
     <Footer />
    </main>
  )
}
