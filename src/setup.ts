import '@testing-library/jest-dom';
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

if (expect && matchers) {
  expect.extend(matchers);
}
