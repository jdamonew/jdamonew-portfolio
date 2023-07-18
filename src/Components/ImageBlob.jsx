import React from 'react'
import "../Styles/Components/ImageBlob.scss";

const ImageBlob = () => {
  return (
    <div className='blob-image'>
        <img
            className='blob-image_image'
            src='https://lh3.googleusercontent.com/pw/AIL4fc9Q6aPSSvdsM7ebI3yUCOcJ0ysw0yqf6CVzptBuKJiX3OhaiyrLPaP4cZZmanv0_I6Mxlru3Wec5CMAUod84C-Blv1Qh5NKxm-Ry2038STSwJQPgw2MGSWt0fIvzCYCfNCvU5vHHaWk8Pxu6p13OWGecg=w575-h520-s-no?authuser=0'/>
        <div className='blob-image_blob'></div>
    </div>
  )
}

export default ImageBlob