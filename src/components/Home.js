import React from "react";
import { useNavigate } from "react-router";
const { findUser } = require('../js/userData')


function Home() {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = e.target[0].value
        const pass = e.target[1].value
        const x = findUser(user, pass)
        if (x) {
            navigate(`/login`)
        }
        console.log(x)
    }
    return (
        <>
            <div className="p-10 m-5 d-flex gap-4 justify-content-around flex-column-reverse flex-sm-column">
                <div className="border-0 p-4 bg-white lead">
                    <h2 className='text-center fs-1 p-3 text-primary'>BE COOL</h2>
                    <div className="text-secondary ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dui dui.
                            Pellentesque ullamcorper magna nec justo imperdiet commodo.
                            Nullam urna dolor, accumsan quis fringilla eu, malesuada eu velit.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam a dolor condimentum vulputate.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Aliquam pulvinar lorem a ex vestibulum, eu facilisis eros dapibus. Donec eu mi non dolor tincidunt condimentum vitae vitae magna.
                            Phasellus leo nulla, euismod ut sollicitudin sit amet, consequat sit amet tellus. Suspendisse malesuada rhoncus risus nec finibus.
                            Morbi ornare sem metus, quis bibendum risus tincidunt ac. Donec ornare leo nec ultricies congue.
                            Nulla eget velit bibendum, sollicitudin enim eu, ornare turpis.
                            Suspendisse volutpat, nibh quis fermentum rhoncus, sem ipsum aliquam nulla, vitae laoreet risus libero ullamcorper diam.
                            Vivamus vulputate nibh ac eros egestas, quis ornare turpis commodo. </p>
                    </div>
                </div>
                <div className="d-flex flex-column gap-2 align-self-sm-end w-50 justify-content-center">
                    {/* <label for="input" class="form-label">Name</label> */}
                    <form onSubmit={handleLogin} >
                        <input id="input" className=" form-control shadow  border-bottom border-0 bg-light text-dark p-2" type="text" placeholder="username"></input><br />

                        {/* <label for="password" class="form-label">Password</label> */}
                        <input className="border-0 shadow  border-bottom bg-light text-dark p-2 form-control" type="password" placeholder="password"></input><br />
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;