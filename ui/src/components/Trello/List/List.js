import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from './Card/Card';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddListButton: true,
            newListNameEntered: '',
            newCardNameEntered: '',
            showListTitle: true,
            updatedListtitleEnterd: '',
        };

        this.handleAddNewList = this.handleAddNewList.bind(this);
        this.handleNewListNameChange = this.handleNewListNameChange.bind(this);
        this.handleNewCardNameChange = this.handleNewCardNameChange.bind(this);
        this.handleUpdatingListtitle = this.handleUpdatingListtitle.bind(this);
    }

    handleAddNewList = () => {
        this.setState({showAddListButton: false});
    }

    handleNewListNameChange = (e) => {
        this.setState({newListNameEntered: e.target.value});
    }

    addNewList = (boardid, e) => {
        if(e.key === 'Enter' && this.state.newListNameEntered !== ''){
            // console.log('id===', id, this.state.updatedBoardTitle);
            this.props.addNewListToBoard(boardid, this.state.newListNameEntered);
            this.setState({showAddListButton: true});
        }
    }

    handleNewCardNameChange = (e) => {
        this.setState({newCardNameEntered: e.target.value});
    }

    addNewCard = (boardid, listid, e) => {
        if(e.key === 'Enter' && this.state.newCardNameEntered !== ''){
            // console.log('id===', id, this.state.newCardNameEntered);
            this.props.addNewCardToList(boardid, listid, this.state.newCardNameEntered);
        }
    } 

    updateCardDetailsToListInStateFromListjs = (boardid, listid, cardid, updatedCardName) => {
        this.props.updateCardDetailsToList(boardid, listid, cardid, updatedCardName);
    }

    handleUpdatingListtitle = () => {
        this.setState({showListTitle: false});
    }

    handleUpdateListTitleChange = (e) => {
        this.setState({updatedListtitleEnterd: e.target.value});
    }

    updateListtitle = (boardid, listid, e) => {
        if(e.key === 'Enter' && this.state.updatedListtitleEnterd !== ''){
            // console.log('id===', id, this.state.updatedListtitleEnterd);
            this.props.updateListtitleHandle(boardid, listid, this.state.updatedListtitleEnterd);
            this.setState({showListTitle: true});
        }
    }

    render() {
        
        // console.log('this.props.listDataForBoard--', this.props.listDataForBoard);

        return (
            <div>
                <div className="boardTitle">{this.props.listDataForBoard.boardtitle}</div>
                <div className="listFlex111">
                    <div className="listArea">
                    {this.props.listDataForBoard.lists.map((list) => {
                        return (
                            <div key={list.listid} className="listFlex">
                                <div className="list">
                                    {this.state.showListTitle ? 
                                    (
                                    <strong onClick={this.handleUpdatingListtitle}>
                                        {list.listtitle}
                                    </strong>
                                    ) : (
                                    <TextField
                                        label="Provide list Name"
                                        onChange={this.handleUpdateListTitleChange}
                                        margin="normal"
                                        placeholder="Hit Enter"
                                        onKeyPress={(e) => this.updateListtitle(this.props.listDataForBoard.boardid, list.listid, e)}
                                    />
                                    )}
                                    <hr />
                                    <Card listDataForLists={list}
                                    attachingBoardid={this.props.listDataForBoard.boardid}
                                    updateCardDetailsToListFromListjs={this.updateCardDetailsToListInStateFromListjs} />
                                </div>
                                <div className="addCardInput">
                                    <TextField
                                        label="New Card Name"
                                        onChange={this.handleNewCardNameChange}
                                        margin="normal"
                                        placeholder="Hit Enter"
                                        onKeyPress={(e) => this.addNewCard(this.props.listDataForBoard.boardid, list.listid, e)}
                                    />
                                </div>
                                
                            </div>
                            
                        )
                    })}
                    {this.state.showAddListButton ? 
                    ( 
                        <div className="addListButton">
                            <Button color="secondary" onClick={this.handleAddNewList}>
                                Add new List...
                            </Button>
                        </div>
                    ) : 
                    (<div>
                        <TextField
                        label="List Name"
                        onChange={this.handleNewListNameChange}
                        placeholder="Hit Enter"
                        margin="normal"
                        autoFocus
                        onKeyPress={(e) => this.addNewList(this.props.listDataForBoard.boardid, e)}
                        />
                    </div>)
                    }

                    </div>
                    
                   
                </div>
            </div>
        );
    }

}

export default List;