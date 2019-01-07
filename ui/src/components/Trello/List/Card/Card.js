import React, { Component } from "react";
import EditSharp from '@material-ui/icons/EditSharp';
import TextField from '@material-ui/core/TextField';

import './Card.css';

class Card extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showCardEditBox: false,
            updatedCardNameEntered: '',
        }

        this.handleUpdateCardNameChange = this.handleUpdateCardNameChange.bind(this);
    }

    handleCardUpdate = () => {
        this.setState({showCardEditBox: true});
    };

    handleUpdateCardNameChange = (e) => {
        this.setState({updatedCardNameEntered: e.target.value});
        // this.setState({showCardEditBox: false});
    }

    updateCardDetails = (listid, cardid, e) => {
        if(e.key === 'Enter' && this.state.updatedCardNameEntered !== ''){
            this.props.updateCardDetailsToListFromListjs(this.props.attachingBoardid, listid, cardid, this.state.updatedCardNameEntered);
            this.setState({showCardEditBox: false});
        }
    }

    render() {
        // console.log('in card class-----', this.props.listDataForLists);
        return (
            
            this.props.listDataForLists.cards.map((card) => {
                return (
                <div className="card" key={card.cardid}>
                    {this.state.showCardEditBox ? 
                    (
                        <div>
                            <TextField
                            id={card.cardid}
                            // label="Name"
                            onChange={this.handleUpdateCardNameChange}
                            onKeyPress={(e) => this.updateCardDetails(this.props.listDataForLists.listid, card.cardid, e)}
                            placeholder={card.cardtitle}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                            />
                        </div>
                    ) :
                    (
                    <div key={card.cardid+Math.random()*123456+''}>
                        <div className="cardText">{card.cardtitle}</div>
                        <div className="editPenCardDiv">
                            <EditSharp className="editPenCard" onClick={this.handleCardUpdate.bind(this)}/> 
                        </div>
                    </div>
                    ) 
                    }
                    

                </div>);
            })
        );
    }

}

export default Card;