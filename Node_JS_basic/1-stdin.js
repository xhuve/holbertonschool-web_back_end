process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const stuName = process.stdin.read();
  if (stuName !== null) {
    process.stdout.write('Your name is: ', stuName);
  }
  process.stdin.resume();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
