import { useState } from 'react';
import dms from "./img/Dms.svg"


const AddComment = ({onAdd}) => {
    const [text, setText] = useState("")


    const onSubmit = (e) =>  {
        e.preventDefault()
 
        if(!text) {
            alert('please add a comment')
            return
        }

        onAdd({text})

        setText(' ')
    }
    return ( 
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" value={text} 
                onChange={(e) => {
                    setText(e.target.value)
                }} placeholder="Say Some thing"/>
                {/* <img type='submit' value='Save Text' src={dms} alt="submit" /> */}
                
            </div>
            
        </form >
    )
}

export default AddComment
