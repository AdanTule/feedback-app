import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(5)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) =>{
        if(text === ''){
            setbtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setbtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setbtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text: text,
                rating: rating
            }
            handleAdd(newFeedback)
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>
                How would you rate our service with us?
            </h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
            <div className="input-group">
            <input 
                type='text' 
                placeholder='write a review' 
                onChange={handleTextChange}
                value={text}/>
            <Button type='submit' isDisabled={btnDisabled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm