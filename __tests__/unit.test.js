// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber test', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(false);
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});

test('isEmail test', () => {
  expect(isEmail('inchulkim@yahoo.com')).toBe(true);
  expect(isEmail('ink007@ucsd.edu')).toBe(true);
  expect(isEmail('ink007@ucsd')).toBe(false);
  expect(isEmail('ink007@ucsd.123')).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('isStrongPassword test', () => {
  expect(isStrongPassword('Password')).toBe(true);
  expect(isStrongPassword('a1234')).toBe(true);
  expect(isStrongPassword('1234')).toBe(false);
  expect(isStrongPassword('Password_woohooooo')).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('isDate test', () => {
  expect(isDate('12/31/2020')).toBe(true);
  expect(isDate('1/1/2020')).toBe(true);
  expect(isDate('12/31/20')).toBe(false);
  expect(isDate('12-31-2020')).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('isHexColor test', () => {
  expect(isHexColor('123abc')).toBe(true);
  expect(isHexColor('#123')).toBe(true);
  expect(isHexColor('123abcd')).toBe(false);
  expect(isHexColor('#12345')).toBe(false);
});
