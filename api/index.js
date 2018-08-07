import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({ 
    contests: contests
  });
});


router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

  res.send(contest);
});

export default router;