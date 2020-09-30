import React ,{Component} from 'react';
import './style.css';


class UpcomingItem extends Component{

    
    render(){
        let toDo = this.props.toDo;
       
        return(
            <div className='UpcomingItem'> 
                <div className="item">
                    <span>{toDo.index}.</span>
                    <span>{toDo.item}</span>    
                </div>
            </div>

        );
    }

}

export default UpcomingItem;