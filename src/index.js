import 'dotenv/config';
import models from './models';

models.User.findAll()
  .then(users => console.log(users))
  .catch(error => console.log(error));

models.User.findOne({ where: { username: 'alain.chevanier' } })
  .then(user => console.log(user))
  .catch(error => console.log(error));

models.User.findOne({ where: { username: 'other.user' } })
  .then(user => console.log(user))
  .catch(error => console.log(error));