import React, { Component } from 'react';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Chip from 'react-toolbox/lib/chip/Chip';
import './UserChip.css';

class UserChip extends Component {
  render() {
    debugger;
    return (
      <div className="user-chip-container">
        <Chip className="user-chip">
          <Avatar>
            <img src={this.props.user.avatar_url} />
          </Avatar>
          <span>{this.props.user.login}</span>
        </Chip>
      </div>
    );
  }
}

export default UserChip;
