import React, { Component } from 'react';
import EditSharp from '@material-ui/icons/EditSharp';
import TextField from '@material-ui/core/TextField';

import './Board.css'

class Board extends Component {
    constructor(props) {
        super(props);
       this.updateBoardTitle = this.updateBoardTitle.bind(this);
       this.handleBoardTitileChange = this.handleBoardTitileChange.bind(this);
       this.showListInThisBoard = this.showListInThisBoard.bind(this);
    }

    state = {
        updatingBoardTitle: false,
        updatedBoardTitle: '',
        boardtitle: '',
    }

    handleBoardTitileChange = (e) => {
        this.setState({updatedBoardTitle: e.target.value});
    }

    handleBoardTitileUpdate = (e) => {
        console.log('pen clicked');
        this.setState({updatingBoardTitle: true});
    }

    updateBoardTitle = (boardid, e) => {
        if(e.key === 'Enter' && this.state.updatedBoardTitle !== ''){
            // console.log('id===', id, this.state.updatedBoardTitle);
            this.props.updateStateByUpdatedBoardname(boardid, this.state.updatedBoardTitle);
            this.setState({updatingBoardTitle: false});
        }
    }

    showListInThisBoard = (board, e) => {
        console.log('Board clicked', board, e);
        this.props.showListInBoard(board);
    }

    render() {
        return (
            this.props.boardData.map((board) => {
                return (<div className="BoardCss" key={board.boardid} onClick={(e) => this.showListInThisBoard(board, e)}>
                        
                    {this.state.updatingBoardTitle ? (
                            <TextField
                                autoFocus
                                onChange={this.handleBoardTitileChange}
                                key={board.boardid}
                                label="New Board name"
                                placeholder="Hit enter"
                                margin="normal"
                                onKeyPress={(e) => this.updateBoardTitle(board.boardid, e)}
                            />) 
                    : (
                        <div className="wrapTitlePen">
                        <div className="boardTile">
                            <strong>{board.boardtitle}</strong>
                        </div>
                        <div className="editPenDiv">
                            <EditSharp className="editPen" onClick={this.handleBoardTitileUpdate.bind(this)}/> 
                        </div>
                        </div>
                        )}
                </div>);
            })
        );
      }
}

export default Board;