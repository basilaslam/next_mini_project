import { FormEvent } from "react"
import instance from "../../axios/axios"
import { json } from "stream/consumers"


function loginForm(props: any){

    const signUp = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        console.log(formData.get('username'))
      let response = await instance.post('/user/signUp',formData,{
        withCredentials: true, headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    return (<>
    
    <form onSubmit={(e:FormEvent<HTMLFormElement>)=>{
        signUp(e)
    }}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            
            <input name="username" type="text" className="form-control" id="username" placeholder="Username" v-model="username"/>
            <label htmlFor="age">age :</label>
            <input name="age" type="text" className="form-control" id="age" placeholder="enter yout age"/>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className="form-control" id="password" placeholder="password"/>
            <button type="submit">submit</button>
        </div>
    </form>
    
    </>)

}

export default loginForm