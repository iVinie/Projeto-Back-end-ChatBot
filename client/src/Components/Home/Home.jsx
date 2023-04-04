import React, { useState, useEffect } from 'react';
import Loading from '../../assets/img/Loading.gif';
import { timeLink } from '../../assets/js/timeLink';
import '../../assets/css/index.css'

const Home = () => {
    const [effectLoading, setEffectLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const time = Math.floor(Math.random() * 3000) + 8000;
        const timer = setTimeout(() => {
            setIsLoading(false);
            setEffectLoading(false);
        }, time);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className={`Loading ${isLoading ? '' : 'oculto'}`}>
                <div className={`${effectLoading ? 'LoadingDown' : ''}`}>
                    <img src={Loading} alt="loading" />
                </div>
            </div>
            {timeLink()}
        </>
    );
};
export default Home;
