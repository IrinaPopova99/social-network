import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;