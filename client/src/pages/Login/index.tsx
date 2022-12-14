import { Button, Input } from '../../components'
import { imgLogin } from '../../assets'
import { ContainerS, FormContainerS, FormS } from '../../components/Form/style'
import { useForm, useFormState } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { ErrorS } from '../../components/Error/style'
import { LoginRequest } from '../../contexts/Auth/util'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const schema = object({
    email: string().email('Insert a valid email!').required('Required field*'),
    password: string()
      .required('Required field*')
      .min(6, 'The password must have, at least, 6 characters')
      .max(16, 'Your passsord is too long')
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const navigate = useNavigate()
  const onSubmit = async (data: any) => {
    try {
      await LoginRequest(data.email, data.password)
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <ContainerS>
        <img src={imgLogin} alt="Illustration" />
        <FormContainerS>
          <h1>Welcome</h1>
          <FormS onSubmit={handleSubmit(onSubmit)}>
            <>
              <Input
                type="text"
                label="Email"
                required
                {...register('email')}
              />
              <ErrorS>
                <>{errors?.email?.message}</>
              </ErrorS>
              <Input
                type="password"
                label="Pasword"
                required
                {...register('password')}
              />
              <ErrorS>
                <>{errors?.password?.message}</>
              </ErrorS>

              <Button type="submit">Login</Button>
            </>
          </FormS>
        </FormContainerS>
      </ContainerS>
    </>
  )
}

export { Login }
