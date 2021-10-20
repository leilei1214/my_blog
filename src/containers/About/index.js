import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    ADD
                </div> 
                <div className="title-list row">
                    <ul>
                        <li className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <Link
                                to="#"
                            >ADD+
                            </Link>
                        </li>
                        <li className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <Link
                                to="#"
                            >
                                ADD+
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
