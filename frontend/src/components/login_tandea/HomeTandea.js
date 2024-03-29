import React, {useEffect, useState} from "react";
import api from "../../api/axiosConfix";

const HomeTandea = () => {
    const [message, setMessage] = useState();
    const getMessage=async()=>{
        try{
            const response=await api.get('/test');

            setMessage(response.data);
        } catch (err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getMessage().then(r => console.log(r));
    }, [])
    return(
        <div>
            {Array.isArray(message) && message.map((item, index) => (
                <div key={item._id || index}>
                    {item.test}
                </div>
            ))}
        </div>
    )
}

export default Home