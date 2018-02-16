import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import { connect } from 'react-redux';

import { getConnections } from '../actions/connections';

class Connections extends Component {
  componentDidMount() {
    this.props.getConnections();
  }

  render() {
    let connections = undefined;

    if (this.props.connections) {
      connections = this.props.connections.map(connection => (
        <ListItem
          key={connection.id}
          avatar={connection.avatar_url}
          caption={connection.login}
          legend={connection.name}
        />
      ));
    } else {
      connections = <ListSubHeader caption="No Connections" />;
    }

    return (
      <div className="connectionsContainer">
        <List selectable ripple>
          <ListSubHeader caption="Your Connections" />
          {connections}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    connections: state.connectionReducer
  };
};

export default connect(mapStateToProps, { getConnections })(Connections);
