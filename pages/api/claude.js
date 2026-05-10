export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { system, userMessage } = req.body;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 1500,
        system,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    const data = await response.json();
    console.log("API response:", JSON.stringify(data).slice(0, 300));
    
    if (data.error) {
      console.error("Anthropic error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    const text = data.content?.[0]?.text || "";
    console.log("Text:", text.slice(0, 200));
    res.status(200).json({ text });
  } catch (e) {
    console.error("Handler error:", e);
    res.status(500).json({ error: e.message });
  }
}