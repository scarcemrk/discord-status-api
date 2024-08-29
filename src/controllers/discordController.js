const discordService = require('../services/discordService');

exports.getActivityStatus = async (req, res) => {
    try {
        const status = await discordService.getActivityStatus();
        res.json({ status });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch activity status' });
    }
};
