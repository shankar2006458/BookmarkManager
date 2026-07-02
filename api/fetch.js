export default async function handler(req, res) {
    const url = req.query.url;

    if (!url) {
        return res.status(400).json({
            error: "Missing URL"
        });
    }

    try {
        const response = await fetch(url);

        const html = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");

        res.status(200).send(html);

    } catch (err) {
        res.status(500).json({
            error: "Failed to fetch page"
        });
    }
}