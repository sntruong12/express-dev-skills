const skills = [
  {
    title: 'JavaScript',
    description: 'programming language brother'
  },
  {
    title: 'Python',
    description: 'programming language sister'
  },
  {
    title: 'Bash',
    description: 'hacking skills brother'
  }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(newSkill) {
  return skills.push(newSkill);
}

function deleteOne(id) {
  skills.splice(id, 1);
}