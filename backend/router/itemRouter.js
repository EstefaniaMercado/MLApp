const { Router } = require('express');
const router = Router();
const itemService = require('../service/itemService')

router.get('/:id', async(req, res) => {
    let id = req.params.id;
    try {
        const item = await itemService.getItem(id)
        if (item != null) {
            res.json(item)
        } else {
            res.status(400).json({ message: 'error' })
        }
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

module.exports = router;