import React, { useEffect, useState } from 'react'

import { MIN, MAX } from '../../constants'

import './ProgressBar.css'

const ProgressBar = ({ value=0, onComplete = ()=>{} }) => {
  const [percentage, setPercentage] = useState(value)
  const getColor = percentage => percentage > 49 ? '#FFF' : '#000'
  useEffect(() => {
    setPercentage(Math.min(MAX, Math.max(value, MIN)))

    if(value >= MAX) {
      onComplete(true)
    }
  }, [ value ])

  return (
    <div className='progressBar'>
      <div className='percentage' style={{color: getColor(percentage)}}>{percentage}%</div>
      <div className='progress' style={{width: `${percentage}%`}}></div>
    </div>
  )
}

export default ProgressBar