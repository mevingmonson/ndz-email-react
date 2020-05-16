import React, { useState } from 'react'
import MessageSection from './MessageSection'
import MessagePreview from './MessagePreview'
import { connect } from 'react-redux';

const MailBody = (props) => {
    const [activeMail, setActiveMail] = useState(0)

    let list = props.menuList.map(menu => {
        return (
            <div key={menu.id}
                onClick={() => props.clicked(menu.mailbox)}
                className="bg-primary mb-3 p-3 rounded-lg text-white">
                {menu.displayName}
            </div >
        )
    })
    return (
        <div className="row">
            <div className="col-4">
                <h4>Mail Boxes</h4>
                <div>
                    {list}
                </div>
            </div>
            <div className="col-8">
                <MessageSection msgDetails={props.messageDetails} activeMail={activeMail} setActiveMail={setActiveMail} />
                <MessagePreview msgBody={props.messageDetails.length ? props.messageDetails[activeMail]['mailbody'] : ""} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    messageDetails: state.messageDetails,

})

export default connect(mapStateToProps)(MailBody);
