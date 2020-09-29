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
                'Cho meo an',
                'Di cho'
            ],

             Finisheds : [
                'Lam bai tap',
                've que'
            ]
        }
    }
    render(){
        return(
            <div className="ToDos">
                <p> DAILIST </p>
                <p className="title">Upcoming</p>
                <UpcomingItem toDoUpcomings = {this.state.UpcomingLists} />
                <p className="title">Finished</p>
                <FinishedItem toDoFinished = {this.state.Finisheds}></FinishedItem>
                <i class="fas fa-plus-circle"></i>
            </div>

        );

    }

}

export default ToDos;