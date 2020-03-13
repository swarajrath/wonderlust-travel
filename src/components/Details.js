import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <form>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label text-light">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Enter Full Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Departure City</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Trip Start Date</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Trip End Date</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Hotel Type</label>
                            <div class="col-sm-10">
                                <span className="radioMargin">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label text-light" for="exampleRadios2">1</label>
                                </span>
                                <span className="radioMargin">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label text-light" for="exampleRadios2">2</label>
                                </span>
                                <span className="radioMargin">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label text-light" for="exampleRadios2">3</label>
                                </span>
                                <span className="radioMargin">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label text-light" for="exampleRadios2">4</label>
                                </span>
                                <span className="radioMargin">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label text-light" for="exampleRadios2">5</label>
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Numer of Travellers</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label text-light">Enter Phone Number</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </form>
                </fieldset>
            </div>
        )
    }
}
