const router = require("express").Router();
const md = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
  // DO YOUR MAGIC
});

router.get("/:id", md.checkAccountId, async (req, res, next) => {
res.json(req.account)
});

router.post(
  "/",
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
    try {
      res.json("post account ");
    } catch (err) {
      next(err);
    }
    // DO YOUR MAGIC
  }
);

router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
    try {
      res.json("update accounts");
    } catch (err) {
      next(err);
    }
    // DO YOUR MAGIC
  }
);

router.delete("/:id", (req, res, next) => {
  try {
    res.json("delete accounts");
  } catch (err) {
    next(err);
  }
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
  // DO YOUR MAGIC
});

module.exports = router;
