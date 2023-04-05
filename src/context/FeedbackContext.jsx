import {createContext, useState, React} from 'react'
import {v4 as uuidv4} from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feeback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feeback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This is feeback item 3',
            rating: 7
        },
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false,

    })
    //To add feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    //To delete feedback
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    //Set item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    //Set item to be updated
    const updateFeedback = (id, updatedItem) =>{
       setFeedback(feedback.map((item)=> item.id === id ? {...item,
         ...updatedItem} : item))
    }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext