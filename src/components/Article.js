import React from "react"

function Article({title, date ="January 1, 1970", preview, minutes}) {
    console.log(minutes)
    let emoji;
    let emojiNum;
    let newArray = []
    
    emojiNum = Math.ceil(minutes/5)
    console.log(emojiNum * "☕️")
    for(let i= 1; i <= emojiNum; i++) {
        if (minutes <30) {
            console.log(newArray.push("☕️"))
        } else {
            newArray.push("🍱")
        }
    }


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