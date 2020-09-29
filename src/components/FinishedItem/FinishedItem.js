import React ,{Component} from 'react';
import './style.css';


class FinishedItem extends Component{
    render(){
        let toDoFinished  = this.props.toDoFinished;
        return(
            <div className="FinishedItem">
                {
                    toDoFinished.map((item , index) =>(
                        <div className="itemFinished" key={index}> 
                            <span>{index}.</span>
                            <span>{item}</span>
                        </div>
                    ))
                }
            </div>
            
        );
    }
}
export default FinishedItem;