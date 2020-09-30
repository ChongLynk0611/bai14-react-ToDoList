import React ,{Component} from 'react';
import './style.css';


class FinishedItem extends Component{
    render(){
        let toDoFinished  = this.props.toDo;
        return(
            <div className="FinishedItem">
                <div className="itemFinished" > 
                    <span>{toDoFinished.index}.</span>
                    <span>{toDoFinished.item}</span>
                </div>
            </div>
            
        );
    }
}
export default FinishedItem;