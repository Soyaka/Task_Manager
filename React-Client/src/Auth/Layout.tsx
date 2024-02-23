
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Task } from "../components/types";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import axios from "axios";

export default function App() {
  const [selected, setSelected] = useState<Key>("login");
  const [name, setname] = useState("")
  const [login, setlogin] = useState("")
  const [redirect, setredirect]= useState(false)
  const [pwd, setpwd] = useState("")

  type Key = string | number;

  const handleTabChange = (newSelection: Key) => {
    setSelected(newSelection)
  }

  const handleLogin = async (login: string , pwd : string)=>{
    const {data : succes}= await Login(login, pwd)
    succes && setredirect(true)
  }
  const handleSignup = async (name :string , login: string , pwd : string)=>{
    const {data : succes}= await SignUp(name, login, pwd)
    succes && handleTabChange("login")
  }
 
  return (
    <>
    {redirect&& <Navigate to="/dashboard" replace />}
    <div className="flex flex-col w-[50%] ">
      <Card className="max-w-full w-[340px] h-[400px] ">
        <CardBody className="overflow-hidden opacity-90 hover:opacity-100 ">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            color="danger"
            onSelectionChange={handleTabChange}
          >
            <Tab key="login" title="Login" >
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" onChange={(e) => setlogin(e.target.value)} />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={e => setpwd(e.target.value)}
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" color="danger" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button onClick={()=>handleLogin( login, pwd)} fullWidth color="danger">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name"
                  placeholder="Enter your name" type="text"
                  onChange={e => setname(e.target.value)} />
                <Input isRequired label="Email"
                  placeholder="Enter your email" type="email"
                  onChange={(e) => setlogin(e.target.value)} />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={e => setpwd(e.target.value)}
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" color="danger" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button onClick={()=> handleSignup(name , login , pwd)} fullWidth color="danger">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
    </>
  );
}


const Login = async (login: string, pwd: string): Promise<{ data: Task[], success: boolean }> => {
  try {
    const res = await axios.post("http://localhost:5555/login", {
      login: login,
      pwd: pwd
    }, {
      withCredentials: true
    });
    return {
      data: res.data,
      success: res.status === 200
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      data: [],
      success: false
    };
  }
};

const SignUp = async (name: string, login: string, pwd: string): Promise<{ data: string, succes: boolean }> => {
  try {
    const res = await axios.post("http://localhost:5555/signup", {
      name: name,
      login: login,
      pwd: pwd
    });
    return {
      data: res.data,
      succes: res.status === 200
    }

  }
  catch (error) {
    console.log(" can't signup successfuly ", error)
    return {
      data: "",
      succes: false
    };
  }

}