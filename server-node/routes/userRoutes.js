const { Router } = require('express');
const { like, liked, productClicked, rate, search, order, myOrders } = require('../controllers/userController');
const { checkUser } = require('../middleware/checkUser');

const router = Router();

router.post('/like', like)
router.post('/liked', liked)
router.post('/productClicked', productClicked)
router.post('/rate', rate)
router.post('/order', order)
router.get('/search', search)

module.exports = router;