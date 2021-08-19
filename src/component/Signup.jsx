import React from 'react'
import "./assets/Signup.css"

function Signup() {
  return (
    <div className="signup">
      <form>
        <div class="row g-2 mb-3">
          <div class="col-md">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInputGrid" placeholder="name@example.com" />
              <label for="floatingInputGrid">Name</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInputGrid" placeholder="name@example.com" />
              <label for="floatingInputGrid">Surname</label>
            </div>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="d-flex">
          <select class="form-floating form-select  mb-3" aria-label=".form-select-lg example">
            <option selected>Select blood type</option>
            <option value="0">0</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
          </select>
          <select class="form-floating form-select mb-3" aria-label=".form-select-md example">
            <option selected>RH Factor</option>
            <option value="1">RH (+)</option>
            <option value="2">RH (-)</option>
          </select>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">City</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password Again</label>
        </div>
        <div className="mb-3">
          <label >Two password must be same.</label>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div >
  )
}

export default Signup
