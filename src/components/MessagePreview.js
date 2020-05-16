import React from 'react'

const MessagePreview = (props) => {
    return (
        <div>
            <p dangerouslySetInnerHTML={{ "__html": props.msgBody }} />
        </div>
    )
}

export default MessagePreview
