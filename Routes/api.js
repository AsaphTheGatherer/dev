const express = require('express');
const router = express.Router();
// Assume sentimentAnalysis is a function you wrote to perform sentiment analysis
const { sentimentAnalysis } = require('../model/sentimentAnalysis');

router.post('/analyze', async (req, res) => {
  const { text } = req.body;
    try {
        const result = await sentimentAnalysis(text);
            res.json({ result });
              } catch (error) {
                  res.status(500).json({ error: 'Error analyzing text' });
                    }
                    });

                    module.exports = router;