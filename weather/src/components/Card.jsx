import React from 'react'

const Card = ({ title, temp, humidity, description, error }) => {
    //styles for the card.
    const divStyle = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'aliceblue',
        width: '350px',
        height: '250px',
        boxShadow: '3px 3px 8px black',
        margin: '15px',
        position: 'relative'

    };




    return (
        //check to see if the user input is valid or not, if it is not, then we display an error in the block. Otherwise we get the data and display that. 
        <div style={divStyle}>
            {error ? (
                <p style={{ color: 'red', textAlign: 'center' }}>An error occured</p>
            ) : (
                <>
                    <h1>{title}</h1>
                    <h4>Temperature: {temp} Celsius</h4>
                    <h4>Humidity: {humidity}</h4>
                    <h4>Description: {description}</h4>
                </>
            )}
        </div>
    )
}

export default Card
