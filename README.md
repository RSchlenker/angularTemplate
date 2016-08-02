# __Threadinator__
---
## Structure

### Datastructure
#### Thread

  ```JSON
    {
      "id": 1,
      "title": "Title1",
      "content": "this is a content for a stupid thread",
      "author": "RojO",
      "dateCreated": 1461315207,
      "lastCommented": 1461315212,
      "like": 2341,
      "dislike": 4,
      "comments": 90,
      "color": "#B4FB29",
      "icon": "fa-update"
    }
  ```

#### Comment
  ```JSON
    {
      "id": 12,
      "thread_id": 42,
      "content": "i am a comment",
      "author": "JorO",
      "dateCreated": 1461315245,
      "like": 31,
      "dislike": 8,
      "color": "#FF00F4",
      "icon": "fa-sun"
    }
  ```

### REST API

#### Thread

- `GET`  
  - Route: `/api/ + apiVersion + /thread/:id`  
  - Response:
```JSON
[
  {
    "status": "success",
    "body": [
      {
        "_id": "571f5ec82526d2c729f640a6",
        "id": 1,
        "title": "Why are kittens so fluffy?",
        "content": "I way always wondering why kittens are so fluffy... Maybe someone of you guys can help me with that?",
        "author": "JonnyMcMuff",
        "like": 1000,
        "dislike": 10,
        "comments": {
          "content": "thats because they can't explode"
        },
        "color": "color1",
        "icon": "kitten",
        "__v": 0,
        "dateCreated": "2016-04-26T12:27:52.000Z"
      }
    ]
  }
]
```
- `PUT`
  - Route: `/api/ + apiVersion + /thread`
  - Response: `'{"state": "success"}'`
- `POST`

#### Titlelist

- `GET`
  - Route: `/api/ + apiVersion + /list`
  - Response:
```JSON
[
  {
    "status": "success",
    "body": [
      {
        "_id": "571f5ec82526d2c729f640a6",
        "id": 1,
        "title": "Why are kittens so fluffy?",
        "content": "I way always wondering why kittens are so fluffy... Maybe someone of you guys can help me with that?",
        "author": "JonnyMcMuff",
        "like": 1000,
        "dislike": 10,
        "comments": {
          "content": "thats because they can't explode"
        },
        "color": "color1",
        "icon": "kitten",
        "__v": 0,
        "dateCreated": "2016-04-26T12:27:52.000Z"
      }
    ]
  }
]
```
