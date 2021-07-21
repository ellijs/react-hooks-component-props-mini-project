import React from "react"
import Article from "./Article"

function ArticleList(props) {
    console.log(props)
    const articles = props.articles
    const article = articles.map((prop) =>
    <Article key={prop.id} title={prop.title} date= {prop.date} preview={prop.preview} minutes={prop.minutes}/>)

    return(
       <main>
          {article}
       </main>
    )
}

export default ArticleList