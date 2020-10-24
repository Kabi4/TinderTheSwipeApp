import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ChatsPerson from '../../Components/ChatsPerson/ChatsPerson';
import db from '../../Firebase/firebase';
import "./Chats.css"
import {withRouter} from 'react-router-dom';
class Chats extends Component {
    state = {
        chats: []
    }
    componentDidMount(){
        db.collection("users").doc(this.props.userdocid)
        .collection("matches")
        .onSnapshot(snapshot=>{
            this.setState({chats: snapshot.docs.map(ele=>({
                id: ele.id,
                data: ele.data()
            }))})
        });
    }
    render() {
        console.log(this.props)
        return (
            <div className="chats">
                {this.state.chats.length>0?this.state.chats.map(ele=>{
                return <Link to={`/${this.props.user.uid}/${ele.data.uid}`}>
                <ChatsPerson key={ele.id} id={ele.id} name={ele.data.name} message={ele.data.name} uid={ele.data.uid} />
                </Link>;
            }):<h2  style={{color: "gray",textAlign: "center"}}>:( No Prefect Match Till Far</h2>}
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
      userdocid: state.auth.docid,
      user: state.auth.user
    }
}


export default withRouter(connect(mapStateToProps,null)(Chats));