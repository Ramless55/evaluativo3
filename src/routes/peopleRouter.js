const express = require('express');
const peopleController = require('../controllers/peopleControllers');
//Validator tiene 3 propiedades de utilidad:
  //validator.body()
  //validator.query()
  //validator.params()
const validator = require('express-joi-validation').createValidator({});
const bodySchema = require('../validations/bodyValidator');
const querySchema = require('../validations/queryValidator');
const paramsSchema = require('../validations/paramsValidator');

const router = (People) => {
  const peopleRouter = express.Router();

    const { getAllPeople, getPeopleById, postPeople, deleteById, putPeopleById } = peopleController(People);

    peopleRouter.route('/people').get(validator.query(querySchema) ,getAllPeople).post(validator.body(bodySchema), postPeople);

    peopleRouter.route('/people/:id').get(validator.params(paramsSchema) ,getPeopleById).delete(validator.params(paramsSchema) ,deleteById).put(validator.params(paramsSchema), validator.body(bodySchema), putPeopleById);

  return peopleRouter
}

module.exports = router