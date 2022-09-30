import TopicsCard from "./TopicsCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const loadTopics = async () => {
      const response = await axios.get(
        "https://jehanzebsapp3.herokuapp.com/api/topics"
      );
      setTopics(response.data.topics);
    };
    loadTopics();
  }, []);
  console.log(topics);
  return (
    <main>
      <h2>Topics</h2>
      <ul>
        {topics.map((topics) => (
          <li key={topics.slug}>{topics.description}</li>
        ))}
      </ul>
    </main>
  );
};

export default Topics;
