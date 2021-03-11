var router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to adopPet API');
})

router.use('/usuarios', require('./usuarios'))
router.use('/mascotas', require('./mascotas'))

module.exports = router;