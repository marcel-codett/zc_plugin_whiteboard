import person1 from "./img/person1.png"
 
const Comt = ({comm}) => {
    return (
        <div>
            <div className="comt">
            <img  src={person1}></img>
            </div>
            <div className="cmt-body">
            <h3>{comm.name}</h3>
            <p>{comm.comment}</p>
            </div>
            <div className="cmt-footer">
                <p>{comm.reply}</p>
                <p>{comm.day}</p>
            </div>

        </div>
    )
}

export default Comt
