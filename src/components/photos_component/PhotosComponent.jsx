import { useState, useEffect } from 'react'
import Nav from '../nav/Nav'
import axios from 'axios'

const PhotosComponent = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(reponse => {
            // console.log(reponse)
            // console.log(reponse.data)
            setPhotos(reponse.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
    return (
        <div className="container-fluid">
            <Nav />
            <h1 className="mt-5 mb-4">Photos</h1>
            <div className="row">
                {photos.map(photo => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={photo.id}>
                        <div className="card">
                            <img src={photo.thumbnailUrl} alt={photo.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {photo.title}
                                </h5>
                                <p className="card-text">
                                    ID : {photo.id}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotosComponent