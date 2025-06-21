import { useMutation } from "@tanstack/react-query"
import { loginUser as loginUserApi } from "../../../../services/apiAuth"
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

const useLogin = () =>{
    const navigate = useNavigate();
    const storeLogin = useAuthStore((state) => state.login);
    const { mutate:isLogin, isPending:isLoggingIn, error: isErrorLogIn } = useMutation({
      mutationFn: loginUserApi,
      onSuccess: (data) =>{
        storeLogin(data.user, data.token);

        alert('Login successful!');
        navigate('/dashboard');
      }, 

      onError: (error) =>{
        console.log(error.message);
      }
    });

    return { isLogin, isLoggingIn, isErrorLogIn };
}

export {useLogin}