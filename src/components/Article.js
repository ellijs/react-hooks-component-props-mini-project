import React from "react"

function Article({title, date ="January 1, 1970", preview, minutes}) {
    // let emoji;
    // let emojiNum;
    // if (minutes <30) {
    //     emojiNum = Math.ceil(minutes/5)
    //     emoji = 
    // } else {

    // }


    return (
        <article>
            <h3>
                {title}
            </h3>
            <small>
                {date}
            </small>
            <p>
                {preview}
            </p>
        </article>
    )
}

export default Article