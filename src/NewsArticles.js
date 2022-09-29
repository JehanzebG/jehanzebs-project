export default function NewsArticles(articles) {
  console.log("articles", articles);

  return (
    <ul>
      {articles.articles.map((articles) => (
        <li key={articles.article_id}>{articles.title}</li>
      ))}
    </ul>
  );
}
