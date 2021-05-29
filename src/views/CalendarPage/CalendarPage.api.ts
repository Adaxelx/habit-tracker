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

export const postEvent = async (token: string | undefined, event: EventSend, id?: string) => {
  const response = await fetch(`${APIpaths.EVENTS}${id ? `${id}/` : ''}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(event),
  });

  if (response.status === 201) {
    return true;
  }

  const { message } = await response.json();
  throw new Error(message);
};

export const postLabel = async (token: string | undefined, label: LabelSend, id?: string) => {
  const response = await fetch(`${APIpaths.LABELS}${id ? `${id}/` : ''}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: id ? 'PUT' : 'POST',
    body: JSON.stringify(label),
  });
  if (response.status === 200 && id) {
    return response.json();
  }
  if (response.status === 201) {
    return true;
  }

  const { message } = await response.json();
  throw new Error(message);
};

export const deleteLabel = async (token: string | undefined, id: string) => {
  const response = await fetch(`${APIpaths.LABELS}${id}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'DELETE',
  });

  if (response.status === 204) {
    return true;
  }

  const { message } = await response.json();
  throw new Error(message);
};

export const deleteEvent = async (token: string | undefined, id: string) => {
  const response = await fetch(`${APIpaths.EVENTS}${id}`, {
    headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
    method: 'DELETE',
  });

  if (response.status === 204) {
    return true;
  }

  const { message } = await response.json();
  throw new Error(message);
};
