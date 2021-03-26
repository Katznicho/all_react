import React, {useState,useEffect} from 'react'
import './Images.css';
function Images() {
    const [image, SetImage] = useState([
        'https://media5.picsearch.com/is?oyavMhlgkWvHJHizMHcO0_vujOxBRw8Zf4q9W3ldVJ8&height=320',
        'https://media4.picsearch.com/is?e865K33I4RTog2XCt-IE2K9H_esXe447bp4Qy5OnyNo&height=223',
        'https://media1.picsearch.com/is?OSBDMjRDb8FHvcxPP9M1JenzrKkxtHegm_LQXDMAPgI&height=318',
        'https://media4.picsearch.com/is?tiZptYcjBOwPSmiA0xuqEG1bgpomBgSqu-EVzPOR6sM&height=247'
    ])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (index < image.length - 1) {
                setIndex(index+1)
            }
            else {
                setIndex(0)
            }
        },10000)
    }, [index])

    return (
        <div className="images">
            <img
                className = "images__logo"
                alt="not found"
                src = {image[index]}
            ></img>
        </div>
    )
}

export default Images
