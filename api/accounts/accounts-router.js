const router = require('express').Router()
const md = require('./accounts-middleware')


router.get('/', (req, res, next) => {
  try {
   res.json([{}, {}])
  } catch(err) {
    next({ status: 422, message: 'something went wrong'})
  }
  // DO YOUR MAGIC
})

router.get('/:id',
  md.checkAccountId,
  (req, res, next) => {
  try {
    res.json('get accounts by id ')
  } catch(err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.post('/',
  md.checkAccountPayload,
  md.checkAccountNameUnique,
 (req, res, next) => {
  try {
    res.json('post account ')
  } catch(err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.put('/:id',
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
  try {
    res.json('update accounts')
  } catch(err) {
    next(err)
  }
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  try {
    res.json('delete accounts')
  } catch(err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  }) 
  // DO YOUR MAGIC
})

module.exports = router;
