const onSubmit = async (data, url) =>{
    const body = JSON.stringify(data);
    const response = await fetch(`/api/users/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body
        })
    const responseBody = await response.json();

    if(response)
    {
      try {  
        if(!response.ok)
          setStatus("error")
        else 
            setStatus("success");
        setAlert(true);
        setMessage(responseBody.message);
        setLoading(false);
        }
      catch (error) {
        console.log(error);
      }
        }
  } 
  export default onSubmit