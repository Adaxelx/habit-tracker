import APIpaths from 'constants/APIpaths';

export const getEvents = async (token: string | undefined, from: string, to: string) => {
  const response = await fetch(`${APIpaths.EVENTS}?from=${from}&to=${to}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  }

  const { message } = await response.json();
  throw new Error(message);
};
