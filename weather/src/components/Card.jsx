import React from 'react'

const Card = ({title, temp, humidity, description, error}) => {
    //styles for the card.
    const divStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'aliceblue',
        width: '250px',
        height: '200px',
        boxShadow: '3px 3px 8px black',
        margin: '15px',
        position: 'relative'

      };

     


  return (

    <div style={divStyle}>
    {error ? (
      <p style={{ color: 'red', textAlign: 'center' }}>An error occured</p>
    ) : (
      <>
        <h3>{title}</h3>
        <h6>Temperature: {temp} Celsius</h6>
        <h6>Humidity: {humidity}</h6>
        <h6>Description: {description}</h6>
      </>
    )}
  </div>
  )
}

export default Card
