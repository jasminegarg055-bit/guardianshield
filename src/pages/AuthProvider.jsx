import { useContext, createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
const Authcontext = createContext();

export default function AuthProvider({children})
{
    const [user, setuser] = useState(
        JSON.parse(localStorage.getItem("user"))
      );
    const[token, settoken]=useState(localStorage.getItem("site")||"");
    const navigate = useNavigate();


    // ADMIN LOGIN
    const loginAction=async(data)=>
    {
        try
        {
            const response = await fetch("http://localhost:5000/api/login",{
                method:"post",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(data),
            })

            const res=await response.json();
            if (res.message) {
                alert(res.message);  
                navigate("/userlogin");
                return;
            }
            throw new Error(res.message);
        }

        catch(err)
        {
            console.error(err);
            alert(err);
        }
      };


    //   SIGNUP PAGE
    const signupAction=async(data)=>
        {
            try
            {
                const response = await fetch("http://localhost:5000/api/user/signup",{
                    method:"post",
                    headers:{
                        "content-type":"application/json",
                    },
                    body:JSON.stringify(data),
                })
    
                const res=await response.json();
                if(res.data)
                {
                    setuser(res.data.user);
                    settoken(res.token);
                    localStorage.setItem("site", res.token);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    alert("You are successfully signed up ✅");
                    navigate("/userlogin");
                    return;
                }
                throw new Error(res.message);
            }
    
            catch(err)
            {
                console.error(err);
                alert(err);
            }
          };
    

     //   SIGNIN PAGE
    const signinAction=async(data)=>
        {
            try
            {
                const response = await fetch("http://localhost:5000/api/user/signin",{
                    method:"post",
                    headers:{
                        "content-type":"application/json",
                    },
                    body:JSON.stringify(data),
                })
    
                const res=await response.json();
                if(res.data)
                {
                    setuser(res.data.user);
                    settoken(res.token);
                    localStorage.setItem("site", res.token);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    alert("You are successfully sign in ✅");
                    navigate("/");
                    return res.data.user; ;
                }
                throw new Error(res.message);
            }
    
            catch(err)
            {
                console.error(err);
                alert(err);
            }
          };


    //  LOGOUT FUNCTION 
    //   const logout=()=>{
    //     setuser(null);
    //     settoken("");
    //     localStorage.removeItem("site");
    //     navigate("/Login");
    //   }
     
    const logout = () => {
        const role = user?.role;
      
        setuser(null);
        settoken("");
        localStorage.removeItem("site");
      
        if (role === "admin") {
          navigate("/login");        // admin login page
        } else {
          navigate("/UserLogin");    // user login page
        }
      };


      return(
        <Authcontext.Provider value={{token, user,setuser, loginAction, logout, signinAction, signupAction}}>
            {children}
        </Authcontext.Provider>
      );
};  

    export const useAuth=()=>
    {
        return useContext(Authcontext);
    };
