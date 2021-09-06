import "./CommentSidebar.css"
import { useState } from "react"
import Comment from "./Comment"
import AddComment from './AddComment'
import Header from "./Header"



const CommentSidebar = () => { 
    const [showAddComment, setShowAddComment] = useState(false)
     const [comments, setComments] = useState([
    {
        id: 1,
        name: 'John Doe',
        day: "Today, 18:34",
        comment: "I' m refering to this boarder please lets make quick changes to it.",
        reply: "View reply"
    },
    {
        id: 2,
        name: 'John Doe', 
        day: "Today, 18:34",
        comment: "I' m refering to this boarder please lets make quick changes to it.",
        reply: "View reply"
    },
    {
        id: 3,
        name: 'John Doe',
        day: "Today, 18:34",
        comment: "I' m refering to this boarder please lets make quick changes to it.",
        reply: "View reply"
    },
    {
        id: 3,
        name: 'John Doe',
        day: "Today, 18:34",
        comment: "I' m refering to this boarder please lets make quick changes to it.",
        reply: "View reply"
    },
])

    // Deleting and adding comment
    const addComment = (text, onAdd) => {
       const id = Math.floor(Math.random() * 10000) + 1
        const newComment =  {id, ...text }
        setComments([...comments, newComment])
    }
    return (
        
        <div className="comment-bar-container">
            <Header  onAdd={() => setShowAddComment(!showAddComment)} /> 
             <div className="comment">
        
                </div>
            {showAddComment && <div className="wrapper">
                    <Comment comments={comments} />
                    <AddComment onAdd={addComment}/>

            </div>}
            
        </div>
    )
}

export default CommentSidebar
