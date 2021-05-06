/* IMPORTS */

// Library imports
import React, { Component, useState } from 'react';
import { View, Alert, Button, Modal, Image, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';


// Local file imports
import './mail.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


// Top navigation bar. Contains a logo, the page title, and the user email
class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">

        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <Image style={{width: 50, height: 50}} source={require("./logo_mail.png")} /> &nbsp;&nbsp;
        <a className="navbar-brand" href="#">{this.props.title}</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
          <a className="nav-link" href="#">{this.props.user} <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        </div>

      </nav>
    )
  }
}

export default Header;