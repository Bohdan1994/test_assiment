export class mockAPI {
  getAllUsers = async () => {
    return [
      {
        "id": 1,
        "status": "approved",
        "user": {
          "id": 24,
          "name": "Joe",
          "lastName": "Bloggs",
          "phone": "+353 1234567",
          "email": "joe@gmail.com"
        },
        "role": "Administrator"
      },
      {
        "id": 2,
        "status": "approved",
        "user": {
          "id": 25,
          "name": "Sarah",
          "lastName": "Connors",
          "phone": "+353 1234567",
          "email": "sarah@gmail.com"
        },
        "role": "Administrator"
      },
      {
        "id": 4,
        "status": "approved",
        "user": {
          "id": 26,
          "name": "Joespeh ",
          "lastName": "Bloggs",
          "phone": "+353 1234567",
          "email": "Joespeh@gmail.com"
        },
        "role": "Standard"
      },
      {
        "id": 6,
        "status": "approved",
        "user": {
          "id": 26,
          "name": "Mathew ",
          "lastName": "Murphy",
          "phone": "+222 222222",
          "email": "mathew@gmail.com"
        },
        "role": "Standard"
      },
      {
        "id": 3,
        "phone": "+353 1234567",
        "status": "invited",
        "role": "Administrator"
      },
      {
        "id": 5,
        "phone": "+222 123434645",
        "status": "invited",
        "role": "Standard"
      }
    ]
  }
}