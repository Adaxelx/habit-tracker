export const createRequiredObject = (name: string) => ({
  required: `Field ${name} is required.`,
});

export const validatePattern = (pattern: RegExp) => ({
  pattern: {
    value: pattern,
    message: 'Incorrect characters.',
  },
});

export const emailValidation = validatePattern(
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
);

export const createRestrictedLengthObject = (name: string) => ({
  ...createRequiredObject(name),
  minLength: {
    value: 6,
    message: `Field ${name} must have at least 6 characters.`,
  },
  maxLength: {
    value: 30,
    message: `Field ${name} must have maximum 30 characters.`,
  },
});

const timeValidFuntion = (timeLess: string | undefined, time: string | undefined) => {
  const message = 'Your time is not in boundaries.';
  if (timeLess && time) {
    const [hours, minutes] = time.split(':');
    const [hoursMin, minutesMin] = timeLess.split(':');
    if (hoursMin < hours) {
      return true;
    }
    if (hoursMin === hours) {
      if (minutesMin < minutes) {
        return true;
      }
      return message;
    }
    return message;
  }
  return message;
};

export const createTimeValidation = (min: string | undefined, max: string | undefined) => ({
  validate: {
    min: (value: string) => timeValidFuntion(min, value),
    max: (value: string) => timeValidFuntion(value, max),
  },
});
