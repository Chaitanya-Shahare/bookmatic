# Bookmatic

Bookmatic is a service that orders Amazon books at a fixed interval from a Google Docs list. The service marks the books as ordered in the list after the purchase.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Features](#features)
3. [Milestones](#milestones)
4. [Tickets](#tickets)
5. [Progress](#progress)
6. [Usage](#usage)
7. [Contributing](#contributing)

## Project Setup

1. Clone the repository

    ```bash
    git clone https://github.com/Chaitanya-Shahare/bookmatic.git
    ```

2. Navigate to the project directory

    ```bash
    cd Bookmatic
    ```

3. Install dependencies

    ```bash
    npm install
    ```

4. Configure environment variables (e.g., Google Sheets API credentials, Amazon credentials)
5. Start the project

    ```bash
    npm start
    ```

## Features

- Integrates with Google Sheets to read and update book lists
- Automatically orders books from Amazon at a fixed interval
- Marks ordered books in the Google Sheets list
- Logs activities and errors

## Milestones

### Milestone 1: Setup and Basic Functionality

**Objective**: Establish the foundational infrastructure, integrate with Google Sheets, and set up a basic scheduler.

- [ ] Project Initialization
- [ ] Google Sheets Integration
- [ ] Job Scheduling Setup
- [ ] Book Ordering Logic
- [ ] Logging and Error Handling

## Tickets

### Project Initialization

<details>
  <summary>Ticket 1.1: Initialize Node.js project</summary>
  - **Description**: Initialize a new Node.js project with `npm init`.
  - **Tasks**:
    1. Run `npm init` to create a `package.json` file.
    2. Add relevant project metadata (name, version, description, etc.).
</details>

<details>
  <summary>Ticket 1.2: Install and configure TypeScript</summary>
  - **Description**: Set up TypeScript for the project.
  - **Tasks**:
    1. Install TypeScript and necessary types using `npm install typescript @types/node`.
    2. Create a `tsconfig.json` file with appropriate configurations.
</details>

<details>
  <summary>Ticket 1.3: Set up basic project directory structure</summary>
  - **Description**: Organize the project into meaningful directories.
  - **Tasks**:
    1. Create directories like `src`, `config`, and `logs`.
    2. Create initial files like `src/index.ts`.
</details>

### Google Sheets Integration

<details>
  <summary>Ticket 2.1: Enable Google Sheets API and create service account credentials</summary>
  - **Description**: Set up the Google Sheets API and obtain credentials.
  - **Tasks**:
    1. Enable the Google Sheets API in the Google Cloud Console.
    2. Create a service account and download the credentials JSON file.
</details>

<details>
  <summary>Ticket 2.2: Implement authentication with Google Sheets API</summary>
  - **Description**: Authenticate the application with the Google Sheets API.
  - **Tasks**:
    1. Install necessary libraries like `googleapis`.
    2. Write code to authenticate using the service account credentials.
</details>

<details>
  <summary>Ticket 2.3: Write function to read data from Google Sheets</summary>
  - **Description**: Implement a function to fetch data from a Google Sheets document.
  - **Tasks**:
    1. Write a function that uses the Google Sheets API to read data.
    2. Test the function to ensure it works correctly.
</details>

<details>
  <summary>Ticket 2.4: Write function to update data in Google Sheets</summary>
  - **Description**: Implement a function to update data in a Google Sheets document.
  - **Tasks**:
    1. Write a function that uses the Google Sheets API to update data.
    2. Test the function to ensure it works correctly.
</details>

### Job Scheduling Setup

<details>
  <summary>Ticket 3.1: Install and configure `node-cron` for job scheduling</summary>
  - **Description**: Set up job scheduling to automate tasks.
  - **Tasks**:
    1. Install `node-cron` using `npm install node-cron`.
    2. Configure a basic cron job that runs at a specified interval.
</details>

<details>
  <summary>Ticket 3.2: Implement a basic scheduled task that logs a message</summary>
  - **Description**: Create a simple scheduled task to verify cron setup.
  - **Tasks**:
    1. Write a function that logs a message.
    2. Schedule the function to run at a fixed interval.
</details>

### Book Ordering Logic

<details>
  <summary>Ticket 4.1: Write function to select the next unchecked book from Google Sheets</summary>
  - **Description**: Implement logic to find the next book to order.
  - **Tasks**:
    1. Write a function that reads the Google Sheets data.
    2. Implement logic to find the first unchecked item in the list.
</details>

<details>
  <summary>Ticket 4.2: Write function to mark a book as ordered in Google Sheets</summary>
  - **Description**: Implement logic to update the Google Sheets list.
  - **Tasks**:
    1. Write a function that updates the Google Sheets data to mark a book as ordered.
    2. Test the function to ensure it works correctly.
</details>

<details>
  <summary>Ticket 4.3: Implement integration with Amazon (API or web scraping) to search for books</summary>
  - **Description**: Write code to search for books on Amazon.
  - **Tasks**:
    1. Implement a function that searches for a book on Amazon.
    2. Test the function to ensure it returns the correct results.
</details>

<details>
  <summary>Ticket 4.4: Implement integration with Amazon (API or web scraping) to order books</summary>
  - **Description**: Write code to place an order for a book on Amazon.
  - **Tasks**:
    1. Implement a function that orders a book on Amazon.
    2. Test the function to ensure the order process works correctly.
</details>

### Logging and Error Handling

<details>
  <summary>Ticket 5.1: Set up basic logging</summary>
  - **Description**: Implement logging for the application.
  - **Tasks**:
    1. Install a logging library like `winston`.
    2. Set up logging for different levels (info, error, etc.).
</details>

<details>
  <summary>Ticket 5.2: Implement error handling for Google Sheets operations</summary>
  - **Description**: Add error handling for interactions with Google Sheets.
  - **Tasks**:
    1. Wrap Google Sheets operations in try-catch blocks.
    2. Log errors and provide meaningful error messages.
</details>

<details>
  <summary>Ticket 5.3: Implement error handling for Amazon operations</summary>
  - **Description**: Add error handling for interactions with Amazon.
  - **Tasks**:
    1. Wrap Amazon operations in try-catch blocks.
    2. Log errors and provide meaningful error messages.
</details>

## Progress

| Ticket # | Task Description | Status |
|----------|------------------|--------|
| 1.1      | Initialize Node.js project | Done |
| 1.2      | Install and configure TypeScript | Done |
| 1.3      | Set up basic project directory structure | In Progress |
| 2.1      | Enable Google Sheets API and create service account credentials | To Do |
| 2.2      | Implement authentication with Google Sheets API | To Do |
| 2.3      | Write function to read data from Google Sheets | To Do |
| 2.4      | Write function to update data in Google Sheets | To Do |
| 3.1      | Install and configure `node-cron` for job scheduling | To Do |
| 3.2      | Implement a basic scheduled task that logs a message | To Do |
| 4.1      | Write function to select the next unchecked book from Google Sheets | To Do |
| 4.2      | Write function to mark a book as ordered in Google Sheets | To Do |
| 4.3      | Implement integration with Amazon (API or web scraping) to search for books | To Do |
| 4.4      | Implement integration with Amazon (API or web scraping) to order books | To Do |
| 5.1      | Set up basic logging | To Do |
| 5.2      | Implement error handling for Google Sheets operations | To Do |
| 5.3      | Implement error handling for Amazon operations | To Do |

## Usage

1. Make sure your environment variables are configured correctly.
2. To start the scheduled task that checks and orders books:

    ```bash
    npm run start
    ```

3. Monitor the logs for activity.

## Contributing

Feel free to fork this project and make your own improvements. Submit a pull request with a detailed explanation of your changes.
