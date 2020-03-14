import React, { Component } from 'react'


class CheckUsername extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ''

        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }


    handleSubmitLogin = (event) => {
        event.preventDefault()

        const data = {
            username: this.state.username,
        }

        if (this.state.username === "" && this.state.password === "") {
            alert("Field tidak boleh kosong")
        }
        else if (this.state.username === "") {
            alert("Usename tidak boleh kosong")
        }
        else if (this.state.password === "") {
            alert("Password tidak boleh kosong")
        }

        else {

            Axios.post("http://localhost:3333/verify",
                data)
                .then(res => {
                    console.log(res.data)

                    if (res.status == 200) {
                        try {
                            this.props.history.push('/forgot-password')
                        } catch (error) {
                            console.log(res.data.message)
                            alert(res.data.message)
                        }
                    }
                })
                .catch(res => {
                    alert(res.data.message)
                })
        }
    }



    render() {


        return (
            <div className="bg">
                <div className="container p-5 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-10 mx-auto">
                                            <div className="p-4">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">LOGIN PAGE</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <Input type="text" name="username" className="form-control form-control-user" placeholder="Username..." onChange={(event) => { this.handleCheckUsername(event) }} ></Input>

                                                    </div>


                                                    <Button className="btn btn-primary btn-user btn-block" onClick={(event) => this.handleSubmitLogin(event)} type="submit">Login</Button>

                                                </form>
                                                <hr></hr>
                                                <div className="text-center">
                                                    <Link to="/forgot-password"> Forgot Password?</Link>
                                                </div>
                                                <div className="text-center">
                                                    <Link to="/register" >  Create an Account!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        )
    }
}


export default CheckUsername