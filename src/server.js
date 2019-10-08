import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';
import models, { sequelize } from './models';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findOne({ where: { username: 'alain.chevanier' } }),
  };
  next();
}); 

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});