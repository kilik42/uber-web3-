import Head from 'next/head'
import Image from 'next/image'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = {style.wrapper}>
      {/* navbar */}
      <Navbar />
      <div className={style.main}>
        {/* map */}
        <Map/>
      </div>
      <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
            {/* location selector */}
            {/* confirm ride */}
          </div>
      </div>
    </div>
  )
}

const style = {  
  wrapper: `h-screen w-screen flex flex-col`
}