/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                {this.props.data.map(el => {
                    return <table key={Math.random()} className="table table-borderless table-sm">
                        <thead>
                            <tr>
                                <th>Сегодня</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>{el.description}</th>
                                <th>{el.sum}</th>
                            </tr>
                        </tbody>
                    </table>
                })}
            </React.Fragment>
        );
    }
}

export default Footer;