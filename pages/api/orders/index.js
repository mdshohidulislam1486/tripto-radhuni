import nc from 'next-connect';
import Order from '../../../models/order';
import { isAuth } from '../../../utilities/auth';
import db from '../../../utilities/db';
import { onError } from '../../../utilities/error';

const handler = nc({
  onError,
});
handler.use(isAuth);
handler.post(async (req, res) => {
  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  });
  const order = await newOrder.save();
  res.status(201).send(order);
});

export default handler;