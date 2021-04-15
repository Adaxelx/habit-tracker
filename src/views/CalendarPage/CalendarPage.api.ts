import APIpaths from 'constants/APIpaths';

export const getEvents = async (token: string | undefined, from: string, to: string) => {
  const response = await fetch(`${APIpaths.EVENTS}?from=${from}&to=${to}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'GET',
  });
  if (response.status === 200) {
    return response.json();
  }
  throw new Error('Something went wrong.');
};

export const getLabels = async (token: string | undefined) => {
  const response = await fetch(`${APIpaths.LABELS}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'GET',
  });
  if (response.status === 200) {
    return response.json();
  }
  throw new Error('Something went wrong.');
};
