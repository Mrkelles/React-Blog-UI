import React from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur,  vitae assumenda.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        <br/>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste deserunt totam facere praesentium maxime perferendis cumque corporis incidunt? Asperiores sapiente distinctio eaque quo quisquam assumenda vitae suscipit at debitis.
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single