import React, { Component } from 'react'
import db from "../../Firebase/firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
class TinderCards extends Component {
    state={
        peoples: [
            
        ]
    }

    componentDidMount(){
        db.collection("peoples").onSnapshot(snapshot=>{
            this.setState({peoples: snapshot.docs.map(ele=>{
                return{
                    id: ele.id,
                    data: ele.data()
                }
            })})
        })
    }
    render() {
        return (
            <div className="tinderContainer">
                <TinderCard className="swipe swipe__last" key={"last"} preventSwipe={["up","down","left","right"]}>
                            <div 
                            className="card card__last">
                                <h3>:( Sorry Couldn't Find More Matches</h3>
                            </div>
                        </TinderCard>
                {this.state.peoples.map(ele=>{
                    return(
                        <TinderCard className="swipe" key={ele.id} preventSwipe={["up","down"]}>
                            <div style={{backgroundImage: `url(${ele.data.url})`}}
                            className="card">
                                <h3>{ele.data.name}</h3>
                            </div>
                        </TinderCard>
                    )
                })}
            </div>
        )
    }
}


export default TinderCards;