import React from 'react'
import "../dashboard/SideBar.css";
import pic from "../assets/profile.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideBar = () => {
    return (
        <div className="sidebar">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img src={pic} alt="" className="logo-img" />
            Book Store
          </a>
        </div>
  
        {/* Sidebar items */}
        <div className="sidebar-items">
          <div className="item-group">
            <a href="/admin/dashboard" className="item">
              <i className="fas fa-chart-pie"></i>
              Dashboard
            </a>
            <a href="/admin/dashboard/upload" className="item">
              <i className="fas fa-cloud-upload-alt"></i>
              Upload Book
            </a>
            <a href="/admin/dashboard/manage" className="item">
              <i className="fas fa-inbox"></i>
              Manage Books
            </a>
            <a href="#" className="item">
              <i className="fas fa-user"></i>
              Users
            </a>
            <a href="#" className="item">
              <i className="fas fa-shopping-bag"></i>
              Products
            </a>
            <a href="/login" className="item">
              <i className="fas fa-sign-in-alt"></i>
              Sign In
            </a>
            <a href="/logout" className="item">
              <i className="fas fa-user-plus"></i>
              Log Out
            </a>
          </div>
        </div>
      </div>
    )
}

export default SideBar