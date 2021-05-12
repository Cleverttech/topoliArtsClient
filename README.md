# Topoli Arts

<br>

## Description

This is app or platform where professional artists as mentors get to offer mentorships courses,
interact with students and also wheere students get to interact with each other.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Signup:** As a user , I can signup to the platform and be a member
- **Login:** As a user , I can login to my already created account
- **Logout:** As a user I can logout from the platform so no one else can modify my information
- **Search through page contents** As a user I can search between different types of courses
- **Create course** As a user(mentor) I can create new courses to my stack of courses.
- **Create Portfolio** As a user(mentor) I can create new portfolio to portfolio items stack
- **Send messages** As a user I can send either direct messages or on the geral chatroom platform
- **Check profile** As a user I can check my profile and updates
- **settings** As a user I can update my registration details

## Backlog

- Chatroom
- One on One chats
- Free course trial

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                         | Component                                 | Permissions                | Behavior                                                      |
| ---------------------------- | ----------------------------------------- | -------------------------- | ------------------------------------------------------------- |
| `/`                          | Loading + LandingPage                     | public `<Route>`           | Home page                                                     |
| `/register`                  | RegisterForm                              | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                     | LoginForm                                 | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login  |
| `/logout`                    | n/a                                       | user only `<PrivateRoute>` | Navigate to homepage after logout, expire session             |
| `/artists`                   | NavBar, ArtistsList, Footer               | public `<Route>`           |                                                               |
| `/artists/:artistId`         | NavBar, Portfolio, Footer                 | public `<Route>`           |                                                               |
| `/profile`                   | NavBar, Profile(Mini-comps), Footer       | user only `<PrivateRoute>` |                                                               |
| `/courses`                   | NavBar, SearchField , CoursesList, Footer | public `<Route>`           |                                                               |
| `/courses/:courseId`         | BuyCourseForm                             | user only `<PrivateRoute>` |                                                               |
| `/courses/:courseId/payment` | CheckoutForm                              | user only `<PrivateRoute>` |                                                               |
| `/users`                     | UsersLists                                | user only `<PrivateRoute>` |                                                               |
| `/forchildren`               | ForChildren                               | public `<Route>`           |                                                               |
| `/forchildren/readings`      | ReadingsForm                              | public `<Route>`           |                                                               |

## Components

- LoadingPage

- LoginForm

- RegisterForm

- NavBar

- SearchField

- Footer

- Profile

- Portfolio

- CheckoutForm

- ArtistsList

- CoursesList

- BuyCourseForm

- UsersLists

- ReadingsForm

## Services

- Auth Service

  - auth.login(user)
  - auth.register(user)
  - auth.logout()

- Mentor Service
  - courses.filter()
  - courses.detail(id)
  - courses.add(id)
  - courses.delete(id)
- External Libraries
  - Stripe npm package
  - Socket.io
  - Material UI

<br>

# Server / Backend

## Models

User model

```javascript
{
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String, default : String}
  role: {type: String}
  courses: {type: Schema.Types.ObjectId,ref:'Course'}
  elements: {type: Schema.Types.ObjectId,ref:'Portfolio'}
}
```

Portfolio model

```javascript
{
  cover: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: [type: String]

}
```

Courses model

```javascript
 {
   mentor: {type: Schema.Types.ObjectId, ref:'User'},
   name: {type: String, required: true},
   description: {type: String, required: true},
   image: {type: String, required: true},
   price: {type: Number, required: true}
   downloadables: {type: Array}
   buyers: [
       type: new Schema ({ userId: userID}, {timestamp: true})
   ],
 }
```

Conversation model

```javascript
{
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }];
}
```

Messages model

```javascript
{
message: {type: String}
sender:  {type: Schema.Types.ObjectId, ref:'User'}
conversationId:  {type: Schema.Types.ObjectId, ref:'Conversation'}
timestamp: {timestamp: true}
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                   |
| ----------- | --------------------- |
| POST        | `/auth/register`      |
| POST        | `/auth/login`         |
| POST        | `/auth/logout`        |
| POST        | `/profile`            |
| GET         | `/courses`            |
| GET         | `/courses/:id`        |
| DELETE      | `/courses/:id/delete` |
| POST        | `/courses/create`     |
| GET         | `/artists`            |
| GET         | `/artists/:id`        |
| POST        | `/artists/:id`        |
| POST        | `/conversations`      |
| POST        | `/messages`           |

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/)
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/)

[Server repository Link](https://github.com/)

[Deployed App Link](https://topoliarts.herokuapp.com/)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/)
