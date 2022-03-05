import React from "react";

export default class Header extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <h1 className="bg-dark text-center text-white p-2 display-7 fw-light"><span className="display-3 fw-normal text-secondary">T</span>alk</h1>
                {/* <span className="signup">SignUp</span> */}
            </div>
        )
    }
}