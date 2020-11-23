import React from 'react'
import { useHistory } from 'react-router-dom'

export default function GoBack() {
    const history = useHistory()
    return (
        <div style={{float:"left"}}>
            <button className='goBack' onClick={() => history.goBack()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        </div>
    )
}
