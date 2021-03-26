import React, { useState, useEffect } from 'react';
import './Image.css'
const Image = () => {
    const arrayImages = [
        'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    ]
    //const [Images, setImages] = useState(arrayImages[0])
    //let url = Images[0]
    const [index , setIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (index < arrayImages.length - 1) {
              setIndex(index+1)
            }
            else {
                setIndex(0)
            }
          
      }, 100000)
  }, [index, arrayImages.length])
    return (
        <div className="image">
            <img
                className="image__logo"
                alt="not found"
                src = {arrayImages[index]}
            ></img>
        </div>
    )
}

export default Image
