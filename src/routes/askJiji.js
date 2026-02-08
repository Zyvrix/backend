import express from "express";
import supabase from "../supabase.js";

const router = express.Router();

// helper to clean question
function extractTopic(query) {
  return query
    .toLowerCase()
    .replace("what is", "")
    .replace("explain", "")
    .replace("define", "")
    .replace("about", "")
    .replace("?", "")
    .trim();
}

router.post("/", async (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Query is required" });
  }

  const topicKeyword = extractTopic(query);

  // 🔥 FIXED MATCHING
  const { data: topics, error } = await supabase
    .from("topics")
    .select("*")
    .ilike("title", `%${topicKeyword}%`)
    .limit(1);

  if (error) {
    return res.status(500).json({ error: "Failed to fetch topic" });
  }

  if (!topics || topics.length === 0) {
    return res.json({
      answer: "Sorry, I don't have content for this topic yet.",
      resources: []
    });
  }

  const topic = topics[0];

  const { data: resources } = await supabase
    .from("resources")
    .select("type, url")
    .eq("topic_id", topic.id);

  res.json({
    topic: topic.title,
    answer: topic.description,
    resources
  });
});

export default router;
