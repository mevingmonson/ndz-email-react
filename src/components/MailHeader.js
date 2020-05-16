import React from 'react'

const MailHeader = (props) => {
    return (
        <>
            <div className="row pl-3 pt-3 ">
                <h4>NDZ Mail</h4>

                <input className="ml-5 mr-1" type="text" placeholder="Search.." name="search" />
                <button className="btn btn-primary mr-5" type="submit"><i className="fa fa-search"></i></button>
                <p className="p-0">{props.user}</p>
            </div>

        </>
    )
}

export default MailHeader
