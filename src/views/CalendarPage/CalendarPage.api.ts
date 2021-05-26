import APIpaths from 'constants/APIpaths';
import { EventSend, LabelSend } from 'utils';

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

export const getLabels = async (token: string | undefined) => {
  const response = await fetch(`${APIpaths.LABELS}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  }

  const { message } = await response.json();
  throw new Error(message);
};

export const postEvent = async (token: string | undefined, event: EventSend) => {
  const response = await fetch(`${APIpaths.EVENTS}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'POST',
    body: JSON.stringify(event),
  });

  if (response.status === 201) {
    return true;
  }

  const { message } = await response.json();
  throw new Error(message);
};

export const postLabel = async (token: string | undefined, label: LabelSend) => {
  const response = await fetch(`${APIpaths.LABELS}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'POST',
    body: JSON.stringify(label),
  });

  if (response.status === 201) {
    return true;
  }

  const { message } = await response.json();
  throw new Error(message);
};
