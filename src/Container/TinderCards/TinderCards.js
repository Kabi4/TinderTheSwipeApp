import React, { Component } from 'react'
import db from "../../Firebase/firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { connect } from 'react-redux';
import * as actionCreators from "./../../Store/ActionCreator/index";

class TinderCards extends Component {
    state={
        peoples: [
            
        ],
        matches: []
    }

    componentDidMount(){
        db.collection("users").onSnapshot(snapshot=>{
            this.setState({peoples: snapshot.docs.map(ele=>{
                if(ele.data().uid===this.props.user.uid){
                    this.props.setdocnumber(ele.id);
                }
                return{
                    id: ele.id,
                    data: ele.data()
                }
            }).filter(ele=> ele.data.uid!==this.props.user.uid)})
        })
    }

    UNSAFE_componentWillUpdate(){
        if(this.props.docid){
            db.collection("users").doc(this.props.docid)
            .collection("matches")
            .onSnapshot(snapshot=>{
                this.setState({matches: snapshot.docs.map(ele=>{
                    return ele.data().uid;
                })})
                let prevstate = [...this.state.peoples];
                let matchesDocid = [];
                prevstate = prevstate.filter(ele=>{
                    const index = this.state.matches.findIndex(uid=>uid===ele.data.uid)
                    if(index>-1){
                        matchesDocid.push({
                            uid: this.state.matches[index],
                            docid: ele.data.id
                        })
                        return false;
                    }else{
                        return true;
                    }
                });
                this.setState({peoples: [...prevstate]});
                this.props.setMatches(matchesDocid)
            });
        }
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


const mapStateToProps = (state)=>{
    return{
      user: state.auth.user,
      userdocid: state.auth.docid
    }
  }

const mapDispatchToProps = (dispatch)=>{
    return{
        setdocnumber: (id)=>{dispatch(actionCreators.setdoc(id))},
        setmatchesDocs: (matches)=>{dispatch(actionCreators.setMatches(matches))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TinderCards);