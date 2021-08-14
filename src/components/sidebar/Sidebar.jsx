import React from 'react'
import { Home, Timeline, TrendingUp, People, Store, AttachMoney, Poll } from "@material-ui/icons"
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h5 className="sidebar-title">Options</h5>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item active">
                            <Home />
                            Home
                        </li>
                        <li className="sidebar-list-item ">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidebar-list-item ">
                            <TrendingUp />
                            Sales
                        </li>
                    </ul>


                </div>
                <div className="sidebar-menu">
                    <h5 className="sidebar-title">Analysing</h5>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <People />
                            Users
                        </li>
                        <li className="sidebar-list-item ">
                            <Store />
                            Products
                        </li>
                        <li className="sidebar-list-item ">
                            <AttachMoney />
                            Transactions
                        </li>
                        <li className="sidebar-list-item ">
                            <Poll />
                            Reports
                        </li>
                    </ul>


                </div>


            </div>
        </div>
    )
}

export default Sidebar
