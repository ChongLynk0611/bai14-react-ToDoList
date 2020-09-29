import React ,{Component} from 'react';
import './style.css';


class UpcomingItem extends Component{

    
    render(){
        let ToDoUpcoming = this.props.toDoUpcomings;

        return(
            <div className='UpcomingItem'>
                {
                    ToDoUpcoming.map((item , index) =>(
                        <div className="item" key={index}>
                            <span>{index}.</span>
                            <span>{item}</span>    
                        </div>
                    ))

                    
                }
            </div>

        );
    }

}

export default UpcomingItem;