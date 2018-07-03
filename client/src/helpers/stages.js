const STAGES = {
  firstStage :'First stage',
  round16: 'Round of 16',
  quarterFinals: 'Quarter-finals',
  semiFinals: 'Semi-finals',
  thirdPlace: 'Play-off for third place',
  final: 'Final',
}

const getAll = () => STAGES;
const getStageName = (id) => STAGES[id];

export default {
  getStageName,
  getAll
};