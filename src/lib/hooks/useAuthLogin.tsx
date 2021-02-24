import { useHistory } from 'react-router-dom'
import { useIsLogin } from '@/redux/context'

export default function useAuthLogin(needLogin = true) {
  const isLogin = useIsLogin()
  const history = useHistory()
  // console.log('11111111111111')
  // debugger
  if (!isLogin && needLogin) {
    history.replace('/')
  }
}
