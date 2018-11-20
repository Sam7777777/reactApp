import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Heading from './heading';
import Footer from './footer';

const apiEndpoint = 'http://localhost:5000/api/counts';

class CounterForm extends Component {
    state = {
        count: {
            date: '',
            sum: '',
            description: ''
        },
        data: []
    }

    baseState = { ...this.state.count };

    handleChange = ({ currentTarget: input }) => {
        const count = { ...this.state.count };
        count[input.name] = input.value;
        this.setState({ count });
    }

    handleSubmit = async (e) => {
        // e.preventDefault();
        this.setState({ count: this.baseState });
        console.log("Base State:", this.baseState);
        const params = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Credentials': true
            }
        };
        const count = { ...this.state.count };
        count.date = moment().toISOString();
        await axios.post(apiEndpoint, count, params);
    }


    async componentDidMount() {
        const res = await axios.get(apiEndpoint);
        this.setState({ data: res.data });
    }

    render() {

        const { date, sum, description } = this.state.count;

        return (
            <React.Fragment>
                <Heading />
                <div id="formContainer">
                    <form id="mainForm" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="col-5 align-self-center">
                                <input
                                    defaultValue={date}
                                    type="text"
                                    name="date"
                                    placeholder="Введите дату"
                                    className="form-control border-0"
                                    onChange={this.handleChange}
                                    onFocus={(e) => e.currentTarget.type = "Date"}
                                    onBlur={(e) => e.currentTarget.type = "Text"}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-5 align-self-center">
                                <input
                                    defaultValue={sum}
                                    type="text"
                                    name="sum"
                                    placeholder="Введите сумму"
                                    className="form-control border-0"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-5 align-self-center">
                                <input
                                    defaultValue={description}
                                    type="text"
                                    name="description"
                                    placeholder="Введите описание"
                                    className="form-control border-0"
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="col">
                                <button className="btn btn-danger" id="submitBtn">Добавить</button>
                            </div>
                        </div>
                    </form>
                </div>

                <Footer
                    data={this.state.data}
                />

            </React.Fragment>
        );
    }
}

export default CounterForm;