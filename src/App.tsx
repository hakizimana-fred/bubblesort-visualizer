import React, { useEffect } from 'react';
import './App.css'
import {bubbleSort} from './Algorithm/BubbleSort'



function App() {
  useEffect(() => {
      appendBars()
  }, [])
  return (
    <div>
     <h2  style={{textAlign: 'center'}}>Bubble sort</h2>

     <div className='bars' id='container'></div>
    </div>
  );
}
const bars: any = 10
const list: number[] = []

function appendBars(){
  const barDiv = document.querySelector('#container') as HTMLElement
        // @ts-ignore
        barDiv.style.width = bars * 20 
        for(let i = 0; i < bars; i++){
          const div = document.createElement('div')
          div.id = 'arrayBar'
          div.className='list-bar'
          div.style.background='teal'
          div.style.color='white'
          const height = Math.floor(Math.random() * 40 * 12)
           list[i] = height
          div.style.height = height + 'px'
         
          // @ts-ignore
          div.textContent = list[i]
          barDiv.appendChild(div)
      }

}

bubbleSort(list)


export default App;
