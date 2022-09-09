import { forwardRef, useImperativeHandle, useRef } from "react";

const LoginInput = forwardRef((props, ref) => {

    const inputRef = useRef();

    const getValue = () => {
        return inputRef.current.value
    }
    
    const error = () => {  
        alert("Invalid Credentials")
    }   
    
    useImperativeHandle(ref, () => ({ getValue, error }), [])
    return (
      <input ref={inputRef} {...props} />
    )
  })

  export default LoginInput