import React, { Component } from 'react';

// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
import Board from './Board/Board';
import BoardDialog from './Board/BoardDialog/BoardDialog';
import List from './List/List';
import './Trello.css';

class Trello extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            showBoard: true,
            clickedBoard: null,
            useless: '',
            boards: [{
                    boardid: '0',
                    boardtitle: 'Board Title',
                    lists: [{
                        listid: '0',
                        listtitle: 'List title',
                        cards: [{
                            cardid: '0',
                            cardtitle: 'Card title'
                        },
                        {
                            cardid: '1',
                            cardtitle: 'Card title11'
                        },
                        {
                            cardid: '2',
                            cardtitle: 'Card title22'
                        }]
                    },
                    {
                        listid: '1',
                        listtitle: 'List title1',
                        cards: [{
                            cardid: '0',
                            cardtitle: 'Card title'
                        },
                        {
                            cardid: '1',
                            cardtitle: 'Card title11'
                        },
                        {
                            cardid: '2',
                            cardtitle: 'Card title22'
                        }]
                    }]
                }
            ] 
        }; 
    }

    updateStateByNewBoardname = (newBoardName) => {
        this.setState({boards: [...this.state.boards, 
            {
                boardid: Math.random() * 123456789 + '',
                boardtitle: newBoardName,
                lists:[],
            }]});
    };

    updateStateByUpdatedBoardnameHandle = (boardid, updatedTitle) => {
        const  updatedBoarddetails = this.state.boards.map((board) => {
            if(board.boardid === boardid) {
                board.boardtitle = updatedTitle;
            } 
            return updatedBoarddetails;
        });
    };

    handleShowBoardOrList = (board) => {
        this.setState({showBoard: false});
        this.setState({clickedBoard: board});
        // console.log('hide-------------------', board.boardid);
    }

    addNewListToBoardInState = (boardid, newListName) => {
        // console.log('hi added list', boardid, newListName);
        const  stateWithNewList = this.state.boards.map((board) => {
            if(board.boardid === boardid) {
                board.lists.push({listid: Math.random()*987654321+'', listtitle: newListName, cards:[]});
            } 
            return stateWithNewList;
        });
    }

    addNewCardToListInState = (boardid, listid, newCardName) => {
        // console.log('card added- ', boardid, listid, newCardName);
        return this.state.boards.map((board) => {
            if(board.boardid === boardid){
               return board.lists.map((list) => {
                    if(list.listid === listid){
                        list.cards.push({cardid: Math.random()*5678912345+'', cardtitle: newCardName});
                        this.setState({useless: 'test'});
                    }
                })
            }
        })
    }

    updateCardDetailsToListInState = (boardid, listid, cardid, updatedCardName) => {
        // console.log('updating card detail- ', boardid, listid, cardid, updatedCardName);
        return this.state.boards.map((board) => {
            if(board.boardid === boardid){
               return board.lists.map((list) => {
                    if(list.listid === listid){
                        return list.cards.map((card) => {
                            if(card.cardid === cardid){
                                card.cardtitle = updatedCardName;
                                this.setState({useless: 'test1'});
                            }
                        })
                        // list.cards.push({cardid: Math.random()*5678912345+'', cardtitle: newCardName});
                        // this.setState({useless: 'test'});
                    }
                })
            }
        })
    }

    updateListtitleInState = (boardid, listid, updatedListName) => {
        console.log('updating list title- ', boardid, listid, updatedListName);
        return this.state.boards.map((board) => {
            console.log('1111111');
            if(board.boardid === boardid){
               return board.lists.map((list) => {
                    if(list.listid === listid){
                        console.log('uuuuuuuuu');
                        list.listtitle = updatedListName;
                        this.setState({useless: 'test2'});
                    }
                })
            }
            // return stateWithNewCard;
        })
    }

    render() {
      return (
        <div>
        { this.state.showBoard ? (
            <div className="TrelloCss">
            <BoardDialog onDialogBoardnameAdded={this.updateStateByNewBoardname} />
            <div className="boardList">
                <Board boardData={this.state.boards} 
                updateStateByUpdatedBoardname={this.updateStateByUpdatedBoardnameHandle}
                showListInBoard={this.handleShowBoardOrList}/>
            </div>
        </div>
        ) : (
            <div>
                <List listDataForBoard={this.state.clickedBoard}
                addNewListToBoard={this.addNewListToBoardInState}
                addNewCardToList={this.addNewCardToListInState} 
                updateCardDetailsToList={this.updateCardDetailsToListInState}
                updateListtitleHandle={this.updateListtitleInState} />
            </div>
        ) 
        
        }
        </div>
      );
    }
  }
  
  export default Trello;