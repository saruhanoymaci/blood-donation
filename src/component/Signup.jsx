import React from 'react'
import "./assets/Signup.css"

function Signup() {
    return (
        <div className="signup">
            <form>
                <div class="form-floating mb-4">
                    <input type="input" class="form-control" id="floatingInput" placeholder="Username" />
                    <label for="floatingInput">Username</label>
                </div>
                <div className="d-flex">
                    <select class="form-floating form-select form-select-md mb-4" aria-label=".form-select-lg example">
                        <option selected>Select blood type</option>
                        <option value="0">0</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                    </select>
                    <select class="form-floating form-select form-select-md mb-4" aria-label=".form-select-md example">
                        <option selected>RH Factor</option>
                        <option value="1">RH (+)</option>
                        <option value="2">RH (-)</option>

                    </select>
                </div>
                <div class="form-floating mb-4">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>


                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
        </div>
    )
}

export default Signup
