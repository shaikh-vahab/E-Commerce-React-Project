import { useForm } from 'react-hook-form';
import style from "../css/login.module.css"
import { NavLink } from 'react-router-dom'

// import { Form } from 'react-router-dom';


function Login() {
    const { register, handleSubmit, reset, formState } = useForm()
    const { errors } = formState
    const submit = (data) => {
        console.log(data);  
        reset();
    }

   
    return (
        <>
            <div className={style.bg}>
                <div className={style.boxcon}>
                    <div className={style.containt}>
                        <form onSubmit={handleSubmit(submit)}>
                            <h1>REGISTER+</h1>
                            <input type="text" placeholder="Username"{...register("username", { required: { value: true } })} /><br /><br />
        
                            <input type="text" placeholder="Email" {...register('email', { required: { value: true } })} /><br /><br />

                            <input type="text" placeholder="Password"{...register('password', { required: { value: true } })} /><br /><br />

                            <button className={style.singnbtn} type="submit" >Sign Up</button><br /><br />
                            <NavLink to='/LoginPage'><p style={{ color: 'black' }}>I Have Allready Account / LOGIN</p>
                                <button className={style.btn}>LOGIN</button>
                            </NavLink> 

                        </form>

                    </div>


                </div>
            </ div>
        </>
    )
}

export default Login