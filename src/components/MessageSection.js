import React from 'react'
import moment from "moment"


const MessageSection = (props) => {
    let mailList = props.msgDetails.map((item, key) => {
        return (
            <tr key={key} style={{ backgroundColor: key === props.activeMail ? "pink" : "white" }} onClick={() => props.setActiveMail(key)}>
                <td>{`${item.from[0].toUpperCase()}${item.from.slice(1, item.from.indexOf('@'))}`}</td>
                <td>{item.subject}</td>
                <td>{moment(parseInt(item.datetime)).format("DD/MM/YY")}</td>
            </tr>
        )
    })
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">From</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Date</th>
                </tr>
                {mailList}
            </thead>
            <tbody>

            </tbody>
        </table>

    )
}

export default MessageSection;
