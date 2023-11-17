import React, { useEffect, useRef, useState } from 'react'
import '../css/home.css'
import axios from 'axios';
import { htmlToText } from 'html-to-text';

export default function Home() {

  const [newsList,setNewsList]=useState([
    {
      title:'News1',
      url:'https://nl.lipsum.com/',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting'
    },
    {
      title:'News2',
      url:'https://nl.lipsum.com/',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting'
    },
    {
      title:'News3',
      url:'https://nl.lipsum.com/',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting'
    },
    {
      title:'News4',
      url:'https://nl.lipsum.com/',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting'
    },
    {
      title:'News5',
      url:'https://nl.lipsum.com/',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting'
    },
  ])

  

  useEffect(() => {
    
    startImageTransition();

    function startImageTransition() {
      var images = document.getElementsByClassName('test')

      for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
      }
      var text = document.getElementsByClassName('backgroundText');
      var nav=document.getElementsByClassName('nav');
      var top = 1;

      var cur = images.length - 1;

      setInterval(changeImage, 8000);

      async function changeImage() {


        var nextImage = (1 + cur) % images.length;
        text[0].style.zIndex = (top +1);
        nav[0].style.zIndex = (top + 2);
        
        images[cur].style.zIndex = (top+1);
        images[nextImage].style.zIndex = top;

        await transition();

        images[cur].style.zIndex = top;

        images[nextImage].style.zIndex = top + 1;

        top = top +1;

        images[cur].style.opacity = 1;

        cur = nextImage;

      }

      function transition() {
        return new Promise(function (resolve, reject) {
          var del = 0.01;

          var id = setInterval(changeOpacity, 10);

          function changeOpacity() {
            images[cur].style.opacity -= del;
            if (images[cur].style.opacity <= 0) {
              clearInterval(id);
              resolve();
            }
          }

        })
      }
    }

  })
  
  
  


  return (
    <div className='container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100%', flexDirection: 'column', }}>
      <div style={{ margin:'2vh',marginTop:'17vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h3 >Tagore Centre for Green Technology Business Incubation (TCGTBI)</h3>
        An initiative of
        <b>Indian Institute of Engineering Science and Technology, Shibpur (IIEST, Shibpur)</b>
        and
        <b>Nationational Science and Technology Enterprenureship Development Board, GoI </b>
      </div>

      <div className='backgroundImg'>
        <img src='default_img.jpg' className='test'></img>
        <img src='background2.jpg' className='test'></img>
        <div className='backgroundText'>
          Welcome to
          <h1>Tagore Centre for Green Technology Business Incubation (TCGTBI)</h1>
        </div>
      </div>



      <div className='news'>
        <div className='title'>News and Update</div>
        <AutoScrollContainer items={newsList}/>

      </div>

    </div>
  )
}

const AutoScrollContainer = ({ items }) => {


  return (
      
        <ul className="scroll-list">
            {items && items.map((item, index) => 
            <li style={{listStyle:'none'}}>
                <a href={item.url}>{item.title}</a>
                <div>{item.text}</div>
            </li>
            )}
            <div  className="list-bottom"></div>
        </ul>
    
  )
}
