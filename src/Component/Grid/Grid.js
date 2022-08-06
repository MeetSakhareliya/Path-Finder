import Rows from './Rows';
import './Grid.css';


const Grid=(props)=>{
    
    const arr = [...Array(props.noRows).keys()].map(x => x++);
    return (
        <>
            <div className="m-5">
                <table className="table">
                    {
                        arr.map((ele, index) => (
                            <Rows
                                key={index}
                                rowNo={ele}
                                noCols={props.noCols}
                            ></Rows>
                        ))
                    }
                </table>
            </div>
        </>
    )
}

export default Grid;