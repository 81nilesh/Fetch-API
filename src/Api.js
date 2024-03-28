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
            <h1 className="text-center"><b> List of Github users </b></h1>
            <div className="container mt-5">
                <div className="row">
                    {user.map((curElem) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 mb-4" key={curElem.id}>
                                <div className="card">
                                    <img src={curElem.thumbnailUrl} className="card-img-top rounded" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{curElem.title}</h5>
                                        <div className="bg-primary text-white p-2 rounded d-flex justify-content-between align-items-center">
                                            <div className="d-flex flex-column">
                                                <span className="articles">Articles</span>
                                                <span className="number">{curElem.articles}</span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="followers">Followers</span>
                                                <span className="number">{curElem.followers}</span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="rating">Rating</span>
                                                <span className="number">{curElem.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>

    );
}

export default Api;
