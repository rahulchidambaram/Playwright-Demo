# Playwright Automation

This project is a Playwright-based automation demo for browser testing across multiple browsers. It includes page-object-style test structure and sample login automation scenarios.

## Features

- Cross-browser testing with Chromium, Firefox, and WebKit
- Playwright Test configuration for UI automation
- Example page objects under the `pages` directory
- Test suites under the `tests` directory
- HTML test report generation

## Project Structure

```bash
.
├── pages/
│   └── ...
├── tests/
│   ├── demo/
│   └── login/
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

- Node.js 18 or newer
- npm

## Installation

```bash
npm install
```

## Running Tests

Run the full test suite:

```bash
npx playwright test
```

Run a specific test folder or file:

```bash
npx playwright test tests/login
npx playwright test tests/login/login.spec.ts
```

Open the HTML report after running tests:

```bash
npx playwright show-report
```

## Browser Setup

If Playwright browsers are not installed yet, run:

```bash
npx playwright install
```

## Configuration

The project uses `playwright.config.ts` for test configuration, including:

- Test directory: `./tests/login`
- Parallel execution enabled
- Cross-browser project setup
- HTML reporting
- Trace collection on retry

## Notes

This repository is intended as a starting point for Playwright automation work and can be extended with additional test cases, page objects, and utility helpers.
