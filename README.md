
---

# Online Blog Application - MERN Stack

Welcome to **Online Blog Application**, a blog platform built using the **MERN stack** (MongoDB, Express, React, Node.js). Users can create, read, update, and delete blog posts. The application supports image uploads, search functionality, filters, pagination, and more!

Check out the live version of the blog application here:✨ [Live Blog Application](https://blogbuster20.vercel.app/signin)

## Features

### CRUD Operations:
- **Create**: Add new blog posts with titles, messages, tags, and optional images.
- **Read**: View a list of existing blog posts with title, message, tags, and creation date.
- **Update**: Edit existing posts with new content, tags, and images.
- **Delete**: Remove blog posts from the database.

### Search & Filter:
- Search posts by keywords or tags.
- Filter posts based on specific tags to narrow down results.

### Pagination:
- Posts are displayed with pagination for easy navigation.
- Customize the number of posts per page.

### Image Support:
- Upload images while creating new posts.
- Images are displayed with the posts.

### Responsive Design:
- The application adapts to mobile, tablet, and desktop devices.

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT for secure user authentication

## Installation Guide

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/online-blog-application.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd online-blog-application
   ```

3. **Install Dependencies**:
   - Frontend dependencies:
     ```bash
     cd client
     npm install
     ```
   - Backend dependencies:
     ```bash
     cd ..
     npm install
     ```

4. **Setup Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```bash
   # Backend environment variables
   MONGO_URI = 'mongodb://localhost:27017/blogDB'
   JWT_SECRET = 'your-secret-key'

   # Frontend environment variables
   REACT_APP_API_BASE_URL = 'http://localhost:5000'
   ```

5. **Run the Application**:
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

6. **Access the Application**:
   Open your browser and go to `http://localhost:3000` to use the application.

## How It Works

- **Create a Post**: Fill out the form with title, message, tags, and upload an image (optional). Click "Submit" to create a new post.
- **Read & Navigate**: Browse posts, search by keywords, filter by tags, and view posts in paginated format.
- **Edit or Delete Posts**: Click "Edit" to modify posts or "Delete" to remove them.
- **Search & Filter**: Use the search bar to find posts by keywords or tags, and filter results based on tags.

## Security Features

- **JWT Authentication**: Secure login using JWT tokens.
- **Environment Variables**: Store sensitive data like `JWT_SECRET` and `MONGO_URI` securely in the `.env` file.
- **Image Upload Security**: Secure handling of uploaded images.

## Future Enhancements

- Real-time comments on blog posts.
- Advanced search algorithms.
- Custom tag management.
- User profile pages with personalized content.

## Contributing

Feel free to fork this repository, report issues, or submit pull requests if you'd like to contribute.

---

Thank you for checking out the **Online Blog Application**! Enjoy blogging and sharing your thoughts!

---
