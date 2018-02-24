import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './UserCard.css';
import Button from 'react-toolbox/lib/button/Button';
import { getConnectionsIds, createConnection } from '../../actions/connections';
import { getCurrentUser } from '../../actions/user';

import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';

class UserCard extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getConnectionsIds();
  }

  addConnection = connection => {
    // Hides the clicked button
    connection.currentTarget.style.visibility = 'hidden';
    // Passes in the value of 'userId' of the clicked button
    this.props.createConnection(connection.currentTarget.attributes[0].value);
  };

  render() {
    return (
      <div className="user-card-container">
        <Card className="user-card" raised>
          <CardTitle
            className="user-card-title"
            avatar={logo}
            subtitle={this.props.user.name}
            title={this.props.user.login}
          />
          <CardMedia
            className="UserAvatar"
            aspectRatio="square"
            image={this.props.user.avatar_url}
          />
          <CardText>{this.props.user.bio}</CardText>
          <div className="user-card-actions">
            <CardActions>
              {this.props.connectionsIds.includes(this.props.user.id) ||
              this.props.user.id === this.props.currentUser ? (
                ''
              ) : (
                <Button
                  className="add-connection-button"
                  userid={this.props.user.id}
                  onClick={this.addConnection}
                >
                  Add Connection
                </Button>
              )}
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUserReducer,
    connectionsIds: state.connectionReducer
  };
};

export default connect(mapStateToProps, {
  getConnectionsIds,
  createConnection,
  getCurrentUser
})(UserCard);
