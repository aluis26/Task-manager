# FullStack Architecture

The architecture of the app will be composed by the following elements:
![architecture](./screenshots/graph-architecture.png)

## Front End

The App will be built in React and deployed in Netlify. 
The free version of Netlify (https://www.netlify.com) will allow us to make a continued deployment linked with the new commits of the project in Github.

## Back End and Server

The back end part will be built in Node. The server will be allocated in Heroku (https://www.heroku.com), the free plan allow us to have 10k rows stored.

## Complementary API

At least two other APIs from 3rd parties will be used in this application.
-Wheater information from the localization through Open Wheather map API (https://openweathermap.org)  
-Quotes through the open API of They Said So. (https://theysaidso.com)  
In the first phase of the project, the front end part will connect directly with them.  
In the second part we are planning to make the connection through the back end and maybe store some of the data coming from this APIs:


**Second Phase for API**
![architecture2](./screenshots/graph-architecture-v.2.png)

