type RandomUser = {
  firstName: string;
  lastName: string;
  userName: string;
  userEmail: string;
  userPassword: string;
};

const FirstName = ['quick', 'lazy', 'happy', 'sad', 'cool', 'hot'];
const LastName = ['lion', 'tiger', 'bear', 'eagle', 'shark', 'cat', 'dog'];

function randomItem(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)];
}

function randomNumber(length: number): string {
  return Math.floor(
    Math.random() * Math.pow(10, length)
  )
    .toString()
    .padStart(length, '0');
}

export function generateRandomUser(): RandomUser {
  const firstName = `${randomItem(FirstName)}`;
  const lastName = `${randomItem(LastName)}`;
  const userName = `${randomItem(FirstName)}_${randomItem(LastName)}_${randomNumber(4)}`;
  const userEmail = `${userName}_${randomNumber(3)}@example.com`;
  const userPassword = randomNumber(8);

  return {
    firstName,
    lastName,
    userName,
    userEmail,
    userPassword,
  };
}
