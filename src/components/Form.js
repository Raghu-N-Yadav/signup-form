import React from "react";
import { Link } from "react-router-dom";
import validator from 'validator';
const { addUser } = require('../js/userData')

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: {
                password: '',
                confPassword: '',
                name: '',
                age: '',
                email: '',
                check: false
            },
            errors: {
                name: 'Invalid name',
                age: 'Invalid age',
                email: 'Invalid email',
                password: 'Invalid password',
                check: 'Please accept Terms and Conditions'
            },
            isError: false,
            noData: '',
            isDone: false,
            final: "Form Submitted Successfully"

        }
    }
    handleChange = ({ target }) => {
        let input = this.state.input;
        let errors = this.state.errors
        this.setState({ isDone: false })

        // console.log(target.name)
        // console.log(this.state)
        if (target.name === 'check') {
            // console.log(target.checked)
            input[target.name] = target.checked
            if (target.checked) {
                errors[target.name] = ''
            } else {
                errors[target.name] = 'Please accept Terms and Conditions'
            }
            this.setState({ input, errors })
        } else {
            input[target.name] = target.value.trim()
            if (input[target.name].length < 1) {
                errors[target.name] = `Invalid ${target.name}`
            } else {
                if (target.name === 'email' && !validator.isEmail(target.value, { blacklisted_chars: '#*&', })) {

                    errors[target.name] = `Invalid ${target.name}`
                }
                else {
                    errors[target.name] = ''

                }
            }
            // errors[target.name] = ''
            this.setState({ input, errors })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        let input = {}
        let errors = {
            name: 'Invalid name',
            age: 'Invalid age',
            email: 'Invalid email',
            password: 'Invalid password',
            check: 'Please accept Terms and Conditions'
        }

        if (validator.isEmpty(this.state.input.password) ||
            validator.isEmpty(this.state.input.confPassword) ||
            validator.isEmpty(this.state.input.email) ||
            validator.isEmpty(this.state.input.age) ||
            validator.isEmpty(this.state.input.name) ||
            this.state.input.check === false) {

            this.setState({ isError: true })
        } else if (this.state.input.password !== this.state.input.confPassword) {
            this.setState({
                // errors: "Password doesn't match. Try again ",
                noData: "Password doesn't match. Try again"
            })
        } else {
            const x = addUser(this.state.input)
            console.log(x)
            input['password'] = ''
            input['confPassword'] = ''
            input['name'] = ''
            input['email'] = ''
            input['age'] = ''
            input['check'] = false
            this.setState({
                input: input,
                errors: errors,
                isError: false,
                noData: '',
                isDone: true
            })
        }

        // console.log(this.state)
        // console.log(e.target[0])
    }
    render() {
        return (
            <div className="d-flex justify-content-center mt-3">

                <div className="m-3">
                    <div className="text-success rounded-3 fs-6">{this.state.isDone ? this.state.final : undefined}</div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input
                                value={this.state.input.name}
                                // className="input"
                                id="name"
                                type="text"
                                class="form-control border-0"
                                // placeholder="Your Name"
                                name="name"
                                onChange={this.handleChange}
                            // required
                            >
                            </input>
                            <div className="text-danger rounded-3 fs-6">{this.state.isError ? this.state.errors.name : undefined}</div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input
                                class="form-control border-0"
                                // className="input"
                                id="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.input.email}
                            // type="email"
                            // placeholder="Your email"
                            // required
                            >
                            </input>
                            <div className="text-danger rounded-3 fs-6">{this.state.isError ? this.state.errors.email : undefined}</div>
                        </div>

                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input
                                value={this.state.input.age}
                                name="age"
                                onChange={this.handleChange}
                                className="form-control border-0"
                                id="age"
                                type="number"
                                // placeholder="Your Age"
                                min="18"
                                max="120"
                            // required
                            >
                            </input>
                            <div className="text-danger rounded-3 fs-6">{this.state.isError ? this.state.errors.age : undefined}</div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Password</label>
                            <input
                                className="form-control border-0"
                                name="password"
                                id="pass"
                                type="password"
                                // placeholder="set Password"
                                // required
                                value={this.state.input.password}
                                onChange={this.handleChange}>
                            </input>
                            <div className="text-danger rounded-3 fs-6">{this.state.isError ? this.state.errors.password : undefined}</div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Confirm your password</label>
                            <input
                                className="form-control border-0"
                                name="confPassword"
                                id="confPass"
                                type="password"
                                // placeholder="confirm Password"
                                // required
                                value={this.state.input.confPassword}
                                onChange={this.handleChange}>
                            </input>
                            <div className="text-danger rounded-3 fs-6">{this.state.noData}</div>
                        </div>
                        <div className="mb-3">
                            <input
                                id="checkbox"
                                class="form-check-input"
                                name="check"
                                onChange={this.handleChange}
                                checked={this.state.input.check}
                                type="checkbox"
                            >
                                {/* <label class="form-check-label" for="checkbox"></label> */}
                            </input>
                            <label class="form-check-label">Accept <span className="text-danger">Terms and Conditions</span></label>

                            <div className="text-danger mt-3 fs-6">{this.state.isError ? this.state.errors.check : undefined}</div>
                        </div>
                        <button className="btn btn-primary mt-3">Sign Up</button>
                    </form>
                    <div className="mt-3 d-flex gap-3">
                        <p className=" ">Already have account</p>
                        <Link
                            className=""
                            to="/">Login
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}