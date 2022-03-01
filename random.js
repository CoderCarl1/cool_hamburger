const CODE_WORK = [
  'Compilers intensily bestow',
  'On commencing without ego',
  'Different processes ajar',
  'Exit with zero quick',
];

function backDoorResponse(line) {
  line = line.trim();
  return line[line.length - 1];
}

for (let i = 0; i < CODE_WORK.length; i++) {
  console.log(backDoorResponse(CODE_WORK[i]));
}
