import React,{Component} from 'react';
import './style.css';

import UpcomingItem from '../UpcomingItem/UpcomingItem';
import FinishedItem from '../FinishedItem/FinishedItem';


class ToDos extends Component{
    constructor(){
        super();
        this.state = {
            UpcomingLists : [
                'lau nha',
                'Cho meo an'
            ],

             Finisheds : [
                'Lam bai tap',
                've que'
            ]
        }
    }
    finish(index){
        return() =>{
            this.state.Finisheds.push(this.state.UpcomingLists[index]);
        }
        
    }
    render(){
        return(
            <div className="ToDos">
                <p> DAILIST </p>
                <p className="title">Upcoming</p>
                {
                    this.state.UpcomingLists.map((item, index) =>(
                        <UpcomingItem onClick={finish(index)} toDo={{item:item, index:index
                        }}  key={index} />
                    ))
                }
                <p className="title">Finished</p>
                {
                    this.state.Finisheds.map((item,index) => (
                        <FinishedItem toDo = {{item:item, index:index}} />
                    ))
                }
                <i class="fas fa-plus-circle"></i>
            </div>

        );

    }

}

export default ToDos;