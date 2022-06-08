import { useFormik, Form, FormikProvider } from 'formik';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { authSchema } from './authSchema';



export default function Login({ setSignUp }: any) {

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: authSchema,
        onSubmit: values => {
            toast.success('Successfully logged in!');
            router.push('/');
        }
    })

    const { handleSubmit, errors, touched, setFieldValue, getFieldProps } = formik;

    return (
        <div>
            <FormikProvider value={formik}>
                <form className="_login mt-4" onSubmit={handleSubmit} >
                    <h4 className="font-weight-bold my-2 mb-4">Login</h4>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input
                            {...getFieldProps('email')}
                            className="form-control" />
                        {errors.email && touched.email && <p className='text-danger font-weight-bold'>
                            {errors.email}
                        </p>}
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password"
                            {...getFieldProps('password')}
                            className="form-control" />
                        {errors.password && touched.password && <p className='text-danger font-weight-bold'>
                            {errors.password}
                        </p>}
                    </div>

                    <div className="row mb-4">


                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    {/* <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button> */}
                    <div className="d-flex justify-content-between">
                        <div className=""></div>
                        <button type="submit" className="site-btn ">Login</button>

                    </div>
                    <div className="text-center mt-4">
                        <p>Not a member? <a className="text-primary font-weight-bold pointer ml-2" onClick={() => setSignUp(true)} >Register</a></p>

                    </div>
                </form>
            </FormikProvider>
        </div>

    )


}