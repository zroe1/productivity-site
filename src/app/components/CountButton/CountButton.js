'use client';
import React, { useEffect, useState } from 'react';
import styles from './CountButton.module.css'

const CountButton = (props) => {
  // console.log(props);
  const [currentCount, setCurrentCount] = useState(0)

  const updateCount = () => {
    // console.log(currentCount)
    setCurrentCount(currentCount + props.incrementBy)
  }

  const buttonStyle = {
    color: props.buttonColor,
  }

  useEffect(() => {
    if (currentCount == 50) {
      setCurrentCount(0)
    }
  }, [currentCount])

  return (
    <div>
      <button className={styles.border} style={buttonStyle} onClick={updateCount}>+{props.incrementBy}</button>
      <p>{currentCount}</p>
    </div>
  )
}

export default CountButton