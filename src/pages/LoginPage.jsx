import { useForm } from 'react-hook-form';
import login from '../css/LoginPage.module.css'
let LoginPage = () => {
    const { handleSubmit ,register,reset } = useForm()

    let submit=(data)=>{
        console.log(data);
        reset()
    }
    return (
        <>
            <center>
                <div className={login.LoginPage_main}>
                    <form onSubmit={handleSubmit(submit)} action="" method="">
                        <h1>LOGIN</h1><br />
                        <label htmlFor="">Email</label><br />
                        <input type="email"   {...register('email',{required:true})} /><br />
                        <label htmlFor="">Password</label><br />
                        <input type="password"   {...register('password',{required:true})} /><br /><br />
                        <button  className={login.loginbtn}>Login</button>
                    </form>
               </div>
            </center>
        </>
    )
}

export default LoginPage;