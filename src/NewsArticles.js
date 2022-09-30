import { Link } from "react-router-dom";
export default function NewsArticles(articles) {
  console.log("articles", articles);

  return (
    <main>
      <ul>
        {articles.articles.map((articles) => (
          <li key={articles.article_id}>{articles.title}</li>
        ))}
      </ul>
      <Link to="/topics">Topics</Link>
    </main>
  );
}
