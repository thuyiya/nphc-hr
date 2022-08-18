# NPHC-HR
### Intro

Help nphc HR dept build an MVP employee salary management webapp to manage employees'salaries.

### Description

The app contains an employee list with the following information:

- id - unique alphanumeric ID assigned by the company.
- username - unique alphanumeric login assigned by the company.
- fullName - possibly non-unique name. May not be in English, so please use UTF-8 encoding.
- salary - decimal that is >= 0.00.

This is an MVP for us to gather more feedback. As a result, we have omitted a login feature as we are not sure how we are going to control usage nor what kind of authentication mechanism we will be using.
As part of a multi-disciplinary scrum team, you have been assigned to work on the frontend tasks for 3 stories, and your super awesome team member will be working on the backend. In order not to block you, he has created a set of mock static API endpoints for you to develop with first. However, you may also write your own backend APIs for a more dynamic integration with the frontend, as long as it still meets the business logic requirements.


Frontend is developed using React (Typescript application) and the Backend is developed using (Typescript application with Nodejs)

The Rest Api is developed using Express

Go to `localhost:3000` for access fronend, And to access backend use `localhost:8000`.

### Get Started

#### To run simple run of the application


**Let's build, test and deploy system as each**


### Frontend

#### Third party libraries

- ReactJS (18.2.0)
- craco (6.4.5)
- antd (4.22.5)
- Typescript (4.7.4)
- Jest and React Testing Library (13.3.0)

Frist of all you have to install packages 
```
npm install 
```
For run the application in develop mode
```
npm run start
```

`npm run build` Runs the built app in production mode.

Server on `0.0.0.0:3000`, url: `http://localhost:3000`

Use the  
```
npm run test
```
for see all the tests

##### Documented By _Thusitha Jayalath_
