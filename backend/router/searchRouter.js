const { Router } = require('express');
const router = Router();
const searchService = require('../service/searchService')

router.get('/', async(req, res) => {
    try {
        const items = await searchService.getItems(req.query.search)
        if (items != null) {
            res.json(items)
        } else {
            res.status(400).json({ message: 'error' })
        }
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

module.exports = router;