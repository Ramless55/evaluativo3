const express = require('express');
const gamesController = require('../controllers/gamesController');
const validator = require('express-joi-validation').createValidator({});
const validatorSchema = require('../validations/gamesValidators');

const router = (Games) => {
  const gamesRouter = express.Router();

    const { getAllGames, getGameById, postGames, deleteGameById, putGameById} = gamesController(Games);

    gamesRouter.route('/games').get(validator.query(validatorSchema.queryValidator) ,getAllGames).post(validator.body(validatorSchema.bodyValidator), postGames);

    gamesRouter.route('/games/:id').get(validator.params(validatorSchema.paramsValidator) ,getGameById).delete(validator.params(validatorSchema.paramsValidator) ,deleteGameById)
                                        .put(validator.params(validatorSchema.paramsValidator), validator.body(validatorSchema.bodyValidator), putGameById);

  return gamesRouter;
}

module.exports = router