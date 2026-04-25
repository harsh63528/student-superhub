import { useState } from "react";
import useUserStore from "../../data/user.data.js";

const Register = () => {
    const {register, isRegistering} = useUserStore();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error,setError]=useState(null);

    const handleChange=(e)=>{
        
    }
}

export default Register;