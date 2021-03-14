import React from 'react';

const Conditions = (props) => {
    return (
        <div>
                 {props.error && <small>Please enter a valid city.</small>}

{props.isLoaded && <div />}
            { props.weather.cod === 200 ? 
            <div>
           
                <p>It is Currently</p> 
                <p>{Math.round(props.weather.main.temp - 273.15)} degrees Celius outside in {props.weather.name}</p>
                </div>
                : null } 

        </div>
    )

}

export default Conditions;
