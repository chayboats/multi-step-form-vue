# Multi-step Form - Frontend Montor Challenge

<!-- Screenshot/video -->

This project is a solution to the [Frontend Mentor multi-step form challenge](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). The goal of this challenge is to build a multi-step form that allows users to complete a series of steps to submit their information. This advanced-level challenge focuses on creating a smooth user experience by handling form validation, navigation, and dynamic content display across multiple steps.

## Table of contents

- [Multi-step Form - Frontend Montor Challenge](#multi-step-form---frontend-montor-challenge)
  - [Table of contents](#table-of-contents)
  - [The Challenge](#the-challenge)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Acknowledgments](#acknowledgments)
  - [Contact Me](#contact-me)

## The Challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made
  

## Features

- **Multi-Step Navigation**: Users can navigate between steps of the form, with their progress saved at each step.
- **Form Validation**: Each step includes validation to ensure that users provide the necessary information before proceeding.
- **Dynamic Content**: The form dynamically adjusts based on user inputs and selections.
- **Responsive Design**: The form is designed to be responsive and user-friendly on both desktop and mobile devices.
- - **Local Storage**: User data is saved locally so they can come back to finish the form right where they left off.


## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.x or later)
- npm (version 6.x or later)

### Installation

1. Clone the repository to your local machine:
  
   ```bash
   git clone git@github.com:chayboats/multi-step-form-vue.git
   ```

2. Navigate to the project directory:
   
   ```bash
   cd multi-step-form-vue
   ```

3. Install the necessary dependencies:
   
   ```bash
   npm install
   ```

### Usage

To run the project locally:
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your web browser and go to `http://localhost:5173` to view the application.

## Technologies Used

- **Vue.js**: JavaScript framework for building user interfaces
- **Font Awesome**: Icon library for adding visually appealing icons
- **v-auto-animate**: Vue directive for adding animations to elements
- **PostCSS**: Tool for transforming CSS with JavaScript plugins

## What I Learned
I learned, or rather was reminded, that props are meant to be read-only. A prop should not be manipulated by the child.

In Vue3, ***v-model*** can be used on a component to implement a two-way binding. Adding ***defineModel*** to a const in the script of a component, says that this component will accept a ***v-model*** value. 

This way a value can be binded from the parent to the child. When the child alters the value, the parent's value is being updated as well. 

An example of this can be found in this project between **App.vue** *(the parent)* and **YourInfo.vue** *(the child)*.

## Continued Development

This application is not very accessible. I am using many divs and spans to get the look I want instead of using  actual html form elements. 

In the future, I'd like to see how I could keep the app looking the same visibly, but also ensuring that I meet the needs of all users through ***A11y*** standards. 

## Acknowledgments

This project was inspired by the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Special thanks to the Frontend Mentor community for providing valuable feedback and support.

## Contact Me

If you have any questions, comments, or suggestions, please don't hesitate to reach out. I'd love to hear from you!

**Chaley Boatmon**

- Email: **<u>chaleyboatmon@gmail.com</u>**
- GitHub: [<u>**chayboats**</u>](https://github.com/chayboats)
  
Thank you for visiting my repository!