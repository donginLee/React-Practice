import React, { useState } from 'react';

function fetchDataFromServer() {

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const randomNumber=Math.random();
        if(randomNumber<0.5){
            resolve('Data fetched successfully!');
        }
        else{
            reject(new Error('Failed to fetch data.'));
        }
        }
        ,1000);});
}

function MyComponent() {
    const [data,setData]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    async function fetchData(){
        setData("");
        setLoading(true);
        setError(null);

        try{
            const response = await fetchDataFromServer();
            setData(response);
        }
        catch(err){
            setError(err.message);
        }
        setLoading(false);

    }
    return (
    <div>
        <button onClick={fetchData} > 데이터 불러오기 </button>
        {loading ? <div>로딩중</div> : null}
        {data ? <div>{data}</div>:null}
        {error ? <div>{error}</div>:null}
    </div>
  );
}

export default MyComponent;