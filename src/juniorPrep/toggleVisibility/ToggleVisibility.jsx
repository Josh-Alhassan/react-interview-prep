import React, {useState} from 'react'

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    function handleVisibility () {
        setIsVisible(!isVisible)
    }

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial' }}>
        <button onClick={handleVisibility} style={{padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}} >{isVisible ? 'Hide' : 'Show'}</button>
        {isVisible && <p style={{ 
      marginTop: '10px',
      fontSize: '18px',
      color: '#333'
    }} >Hello World</p>}
    </div>
  )
}

export default ToggleVisibility