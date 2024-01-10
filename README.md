# TweetHub

## Information
This is a demonstration repository showcasing basic Twitter-like functionality through simple APIs for social media interactions

## Prerequisites
Have the env file placed in the project directory of your machine with the following details:
| Parameter | Description                |
| :-------- | :------------------------- |
| `PORT` | Port for running the server |
| `MONGODB_URI` | MongoDB Connection URI |
| `JWT_SECRET` | Secret to be used for JWT authentication |

## Local Dev Server
To run the backend server:
```bash
$npm install
$npm run dev
```

## API Reference

#### Register new user
```http
POST /auth/signup
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Email Id of the user |
| `password` | `string` | **Required**. Password for the user |

#### Logout user from current session
```http
POST /auth/logout
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Should contain Bearer token |

#### Login user
```http
POST /auth/login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Email Id of the user |
| `password` | `string` | **Required**. Password of the user |

#### Send Message
This will be used to send a message by the logged in user to the feed

```http
POST /message/postmessage
```
| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Should contain  Bearer token |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `content` | `string` | **Required**. The message to be sent |

#### Get Message Feed
This will be used to fetch the message feed for the logged in user

```http
GET /message/getmyfeed
```
| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Should contain Bearer token |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | Pagination number |
| `limit` | `number` | Pagination limit |

#### List Users
This will be used to list all users in the system which can be used as a reference for following an user

```http
GET /user/users
```
| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Should contain Bearer token |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | Pagination number |
| `limit` | `number` | Pagination limit |

#### Follow an User
This will be used to follow an user

```http
POST /user/follow/:id
```
| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Should contain  Bearer token |

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. The ID of the user to be followed |

#### Get Followers Count
This will be used to fetch the number of users who follow the logged in user

```http
GET /users/followers
```
| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Should contain Bearer token |

#### Logout user from all sessions
```http
POST /auth/logoutall
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Should contain  Bearer token |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.