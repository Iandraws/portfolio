export function generateUsers(count) {
  console.log('Generating');
  let users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      id: i + 1,
      name: {
        first: 'Name ' + i + 1,
        last: 'Name ' + i + 1,
      },
      email: 'Name_' + i + 1 + '@gmail.com',
      gender: randomBoolean() ? 'Male' : 'Female',
      dob: {
        age: i * 2 + 1,
      },
      color: getRandomColor(),
      active: true,
    });
  }

  return users;
}

export function randomBoolean() {
  return Math.random() < 0.5;
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
