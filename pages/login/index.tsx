
import Navbar from "../../src/components/navbar";
import Lform from "../../src/components/form";
let url = '/login'


function login(){

    return(
        <>
        <Navbar/>


        <h1>Login</h1>

        <Lform url={url} type="login"/>
        </>
    )
}


export default login