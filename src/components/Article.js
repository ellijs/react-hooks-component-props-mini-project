import React from "react"

function Article({title, date ="January 1, 1970", preview, minutes}) {
    console.log(minutes)
    let emoji;
    let emojiNum;
    
    if (minutes <30) {
        emoji = "☕️"
        emojiNum = Math.ceil(minutes/5)
    } else {
        emoji = "🍱"
        emojiNum = Math.ceil(minutes/10)
    }

    return (
        <article>
            <h3>
                {title}
            </h3>
            <small>
                {date}  <span>&#8226;</span>   {emoji.repeat(emojiNum)} {minutes} min read
            </small>
            <p>
                {preview}
            </p>
        </article>
    )
}

export default Article