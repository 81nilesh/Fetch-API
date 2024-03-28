import React, { useEffect, useState } from 'react';

const Api = () => {
    const [user, setUser] = useState([]);

    const getUser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        setUser(await response.json());
        console.log(user);
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
            <h2>List of Github users</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>
                    {
                        user.map((curElem) => {
                            return (
                                <div className='col-10 col-md-4 mt-5' key={curElem.id}>
                                    <div className='card p-2'>
                                        <div className='d-flex align-items-center'>
                                            <div className='image'>
                                                <img src={curElem.thumbnailUrl} className="rounded" width="155" alt="" />
                                            </div>
                                            <div className='ml-3 w-100'>
                                                <h4 className='mb-0 mt-0 textLeft'>Nilesh</h4> <span className='textLeft'>{curElem.title}</span>
                                                <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                    <div className='d-flex flex-column'>
                                                        <span className='articales'>Articales</span> <span className='number1'>38</span>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <span className='followers'>Followers</span> <span className='number2'>980</span>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <span className='rating'>Rating</span> <span className='number3'>8.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Api;
