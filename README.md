# **Student API Documentation**
Base URL: `https://seb-2-pt-api.onrender.com/`

## **Student Model**
| Field           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| `name`         | String | ✅ Yes    | The student's full name     |
| `favoriteColor`| String | ❌ No     | The student's favorite color |
| `favoriteMovie`| String | ❌ No     | The student's favorite movie |

---

## **Endpoints**

### **1. Create a New Student**
**`POST /students`**  
**Request Body:**
```json
{
  "name": "John Doe",
  "favoriteColor": "Blue",
  "favoriteMovie": "Inception"
}
```
**Response (201 Created):**
```json
{
  "_id": "65bc12345eab90123456",
  "name": "John Doe",
  "favoriteColor": "Blue",
  "favoriteMovie": "Inception",
  "__v": 0
}
```

---

### **2. Get All Students**
**`GET /students`**  
**Response (200 OK):**
```json
[
  {
    "_id": "65bc12345eab90123456",
    "name": "John Doe",
    "favoriteColor": "Blue",
    "favoriteMovie": "Inception"
  },
  {
    "_id": "65bc12345eab90123457",
    "name": "Jane Doe",
    "favoriteColor": "Green",
    "favoriteMovie": "The Matrix"
  }
]
```

---

### **3. Get a Single Student**
**`GET /students/:id`**  
**Example:** `/students/65bc12345eab90123456`  
**Response (200 OK):**
```json
{
  "_id": "65bc12345eab90123456",
  "name": "John Doe",
  "favoriteColor": "Blue",
  "favoriteMovie": "Inception"
}
```
**Error (404 Not Found):**
```json
{ "message": "Student not found" }
```

---

### **4. Update a Student**
**`PUT /students/:id`**  
**Example:** `/students/65bc12345eab90123456`  
**Request Body (Only send fields you want to update):**
```json
{
  "favoriteColor": "Red"
}
```
**Response (200 OK):**
```json
{
  "_id": "65bc12345eab90123456",
  "name": "John Doe",
  "favoriteColor": "Red",
  "favoriteMovie": "Inception"
}
```
**Error (404 Not Found):**
```json
{ "message": "Student not found" }
```

---

### **5. Delete a Student**
**`DELETE /students/:id`**  
**Example:** `/students/65bc12345eab90123456`  
**Response (200 OK):**
```json
{ "message": "Student deleted successfully" }
```
**Error (404 Not Found):**
```json
{ "message": "Student not found" }
```

---

## **Error Handling**
- **400 Bad Request** → Invalid request body
- **404 Not Found** → Student not found
- **500 Server Error** → Internal server error
