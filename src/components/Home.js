import React from 'react'
import '../css/home.css'

export default function Home() {
  return (
    <div className='container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100%', flexDirection: 'column' }}>

      <img src='default_img.jpg' className='backgroundImg' />
      <div className='backgroundText'>
        Welcome to
        <h1>Tagore Centre for Green Technology Business Incubation (TCGTBI)</h1>
      </div>
      <div className='news'>
        <div className='title'>News and Update</div>
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>

        </ul>
       
      </div>

    </div>
  )
}
