# Quiz Web App

## Overview
The Quiz Web App is an interactive platform designed to evaluate users across various skill sets through a series of questions. Users can take quizzes on topics such as Linux, DevOps, and more, answer questions one at a time, and receive a score report at the end. The app is built using React, React Router for navigation, and consumes a mock API for fetching questions.

## Features
- **Home Screen**: Users can start the quiz with a single click, which initiates an API request to fetch questions.
- **Topics Screen**: Users can view and select various topics to take quizzes based on their interests.
- **Question Screen**: Questions are displayed one by one, including optional images, and users can select answers before proceeding.
- **Score Report**: After the quiz, users receive a score report detailing their performance.
- **Responsive Design**: The app is designed to be user-friendly and responsive across different devices.

## Technology Stack
- **Frontend**: React
- **Routing**: React Router
- **State Management**: React hooks (`useState`, `useEffect`)
- **Styling**: CSS for custom styles
- **Mock API**: Quiz API (for question retrieval)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quiz-web-app.git
    cd quiz-web-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## API Endpoints
1. **Start Quiz**
   - **URL**: `/api/quiz/start`
   - **Method**: POST
   - **Description**: Starts a new quiz and fetches questions.
   - **Request Body**:
     ```json
     {}
     ```

2. **Submit Response**
   - **URL**: `/api/quiz/submit`
   - **Method**: POST
   - **Description**: Submits the user's response for a specific question.
   - **Request Body**:
     ```json
     {
       "questionId": "string",
       "selectedAnswers": ["string"],
       "timeTaken": "number" // time in seconds
     }
     ```

3. **Finish Quiz**
   - **URL**: `/api/quiz/finish`
   - **Method**: POST
   - **Description**: Completes the quiz and retrieves the score report.
   - **Request Body**:
     ```json
     {}
     ```

## Screens
- **Home Screen**: Users can click the “Start” button to begin the quiz and are redirected to the quiz topic selection screen.
- **Topics Screen**: Displays a grid of available topics with images and question counts. Users can click on a topic to start the quiz.
- **Question Screen**: Displays one question at a time with multiple-choice answers. Users must select at least one option before proceeding. An API request is made to submit the user's response before showing the next question.
- **Report Screen**: Shows the total score, number of correct and incorrect answers, and includes a “Start Again” button to retake the quiz.

## Deployment
To deploy the web app, you can use platforms like Vercel or Netlify. Follow the specific platform documentation for deployment steps.

## Documentation
Ensure to review the code comments for clarity. A detailed explanation of the app's functionality and design choices is provided throughout the codebase.

## Best Practices
- Follow REST guidelines for URL patterns and response status codes.
- Maintain clean code with proper commenting for readability.
- Implement error handling and logging for production readiness.

## Bonus Features (if time permits)
- Containerization using Docker.
- Enhanced error logging and exception handling.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Thanks to the online communities and resources that provided guidance throughout the development process.
