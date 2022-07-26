import { MenuItem, TextField, Button } from '@mui/material'
import React from 'react'
import './Home.css'
import Categories from '../../Data/Catrgories.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../Components /ErrorMessage/ErrorMessage.js'

const Home = ({name, setName, fetchQuestions}) => {
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
            setError(true)
            return
        }
        else{
            setError(false)
            fetchQuestions(category, difficulty)
            navigate('/quiz')
        }
    }


  return (
    <div className='content'>
        <div className='settings'>
            <span style={{fontSize:30}}>Quiz Settings</span>
            <div className='settings__select'>
            {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                <TextField 
                    label="Your name" 
                    variant="outlined"
                    style={{ marginBottom:25}}
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                    select
                    label="Select Category"
                    variant="outlined"
                    style={{ marginBottom: 30 }}
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    >
                        {
                            Categories.map((catg)=>(
                                <MenuItem key={catg.category} value={catg.value}>
                                    {catg.category}
                                </MenuItem>
                            ))
                        }
                </TextField>

                <TextField
                    select
                    label="Select Category"
                    variant="outlined"
                    style={{ marginBottom: 30 }}
                    value={difficulty}
                    onChange={(e)=>setDifficulty(e.target.value)}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                </TextField>
                
                <Button 
                    onClick={handleSubmit}
                    variant='contained'
                    color='primary'>
                        Start
                </Button>
            </div>
        </div>
        <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  )
}

export default Home