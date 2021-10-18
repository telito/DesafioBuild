import { React, useState } from "react";


function ApiNasa() {

    const [result, setResult] = useState('')
    const [cont, setCont] = useState(0)
    function api() {

        fetch('https://api.nasa.gov/planetary/apod?api_key=oRaqR9YOd6MgqlwdR8XQAma0f3fxHkendHDf4qE5')
            .then(T => T.json())
            .then(data => {
                setResult(data)
                setCont(1)
            })
    }
    if(cont == 0){
        api()
    }
    
    return (
        <div> 
        {result.data}      
        </div>
    )
}

export default ApiNasa