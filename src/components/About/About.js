import React, { Component } from 'react'
import classes from "./About.css";
import Title from "../Title/Title";
export default class About extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Title name="Github Link for Project"/>
        <a href="https://github.com/eu-clid/reactC"><h1>Github</h1></a>
        <h2>Created by Novin and Vignesh</h2>
      </div>
    )
  }
}
