const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/ngoc', (req, res) => {
    res.send('Hoang Kim Ngoc va BTS!')
})
router.get('/phamduyminh', (req, res) => {
    // res.send('<h1> Pham Duy Minh </h1>')
    res.render('sample.ejs')
})

module.exports = router;