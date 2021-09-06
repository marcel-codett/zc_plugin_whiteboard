import Comt from "./Comt"

const Comment = ({ comments }) => {
    return (
        <>
            {comments.map((comm) => (<Comt key={comm.id} comm={comm}/>
            ))
                
            }
        </>
    )
}

export default Comment
 