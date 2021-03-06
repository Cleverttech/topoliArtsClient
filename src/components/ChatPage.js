import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import Loader from './Loader'
import './ChatPage.css'
import io from "socket.io-client";

let socket = ''

class ChatPage extends Component {
    // Assing a ref to the messages div
    messagesEnd = React.createRef()
    state = {
        loading: true, 
        messageList: [],
        currentMessage: '',
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount(){
        //setup your socket connection with the server
        socket = io(`${config.API_URL}`);

        let conversationId = this.props.match.params.conversationId
        axios.get(`${config.API_URL}/api/messages/${conversationId}`)
            .then((response) => {
                this.setState({
                    loading: false, 
                    messageList: response.data
                }, () => {
                    this.scrollToBottom();
                })
            })
        // ensure that the user is connected to a specific chat via webSocket    
        socket.emit("join_chat", conversationId);

        //Handle incoming messages from webSocket
        socket.on("receive_message", (data) => {
            console.log('Got data', data)
            this.setState({
                messageList: [...this.state.messageList, data]
            }, () => {
                this.scrollToBottom();
            })
        });    
    }

    handleMessageInput = (e) => {
        this.setState({
            currentMessage: e.target.value
        })
    }

    sendMessage = async () => {
        // Create the object structure
        let messageContent = {
            chatId: this.props.match.params.conversationId,
            content: {
              sender: this.props.user,
              message: this.state.currentMessage,
            },
          };
          
          // emit it so that everyone connected to the same chat receives the message
        await socket.emit("send_message", messageContent);
        this.setState({
            messageList: [...this.state.messageList, messageContent.content],
            currentMessage: ''
        }, () => {
            this.scrollToBottom();
        })
    }


    render() {
        const Image = '../assets/Background_test.jpg'
        const { loading , messageList} = this.state
        const { user } = this.props

        if (loading) {
            return (<Loader />,
            <h1>Loading all messages . . .</h1>)
        }   

        return (
            <div style={{height: '100%', backgroundImage:`url(${Image})`, backgroundSize:'cover', display:'flex', flexDirection: 'column' , alignItems: 'center'}}>
                <h3>You're in the Chat Page</h3>
                <div className="chatContainer">
                    <div className="messages">
                        {
                            messageList.map((val) => {
                                return (
                                    <div key={val._id} className="messageContainer" id={val.sender.username == user.username ? "You" : "Other"}>
                                        <div className="messageIndividual">
                                            {val.sender.username}: {val.message}
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div style={{ float:"left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                    <div className="messageInputs">
                        <input value={this.state.currentMessage} type="text" placeholder="Message..."
                            onChange={this.handleMessageInput}
                            />
                        <button onClick={this.sendMessage}>Send</button>
                    </div>
                </div>
            </div>
                            
        )
    }
}

export default ChatPage