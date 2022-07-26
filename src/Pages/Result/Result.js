import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './Result.css'

const Result = ({name, setScore}) => {
  
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (!name){
      navigate('/')
    }

  },[name, navigate])
  
  return (
    <div className='result'>
      <span className='title'>
          Score:{setScore}
      </span>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Restart
      </Button>
    </div>
  )
}

export default Result