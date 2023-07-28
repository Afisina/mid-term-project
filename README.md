# mid-term-project
This is a [tokopedia play](https://www.tokopedia.com/play/channels) clone application built using Express.js and MongoDB, allowing users to view videos with thumbnails, see related products, and interact with comments. 


## Requirements
1. Node.js
2. MongoDB
3. Postman (for API testing)
   

## Database Structure
![Untitled Workspace](https://github.com/Afisina/mid-term-project/assets/39270680/4e92eeba-6e0e-419f-81df-c11814a17221)
The UML diagram represents the MongoDB database schema for the application, consisting of four collections: Video, Product, Comment, and User.

1. Video Collection:
   - The Video Collection stores information about videos.
   - Each video document is uniquely identified by the '_id' field.
   - It includes the following fields:
      - videoID: A unique identifier for the video.
      - thumbnailUrl: The URL of the video thumbnail image.
      - title: The title of the video.
      - description: The description of the video.

2. Product Collection:
   - The Product Collection stores information about products associated with videos.
   - Each product document is uniquely identified by the '_id' field.
   - It includes the following fields:
      - productID: A unique identifier for the product.
      - videoID: The ID of the video the product is associated with (referencing Video Collection).
      - photoProduct: The URL of the product photo/image.
      - link: The URL of the product page.
      - title: The title of the product.
      - price: The price of the product.

3. Comment Collection:
   - The Comment Collection stores comments related to videos.
   - Each comment document is uniquely identified by the '_id' field.
   - It includes the following fields:
      - videoID: The ID of the video the comment is associated with (referencing Video Collection).
      - userID: The ID of the user who submitted the comment (referencing User Collection).
      - comment: The text of the comment.
      - timestamp: The timestamp of when the comment was submitted.

4. User Collection:
   - The User Collection stores user information.
   - Each user document is uniquely identified by the '_id' field.
   - It includes the following fields:
      - username: The username of the user.
      - avatar: The URL of the user's avatar/photo.

Relationships:
- The Video Collection has a one-to-many relationship with the Product Collection.
   - Each video can have multiple associated products.
   - Each product is associated with only one video.
- The Video Collection also has a one-to-many relationship with the Comment Collection.
   - Each video can have multiple associated comments.
   - Each comment is associated with only one video.
- The Comment Collection has a relationship with the User Collection.
   - Each comment is associated with a specific user.
   - The 'userID' field in the Comment Collection references the '_id' field of the corresponding user in the User Collection.

With this database schema and relationships, user information (username and avatar) can be associated with comments, allowing the application to display the username and avatar for each comment.


## API Structure
```bash
/api
|-- /video
|   |-- POST  /create                    # Create a new video
|   |-- GET   /list                      # Get all videos
|   |-- GET   /:videoID                  # Get video details by videoID
|
|-- /product
|   |-- POST  /create                    # Create a new product
|   |-- GET   /list                      # Get all products
|   |-- GET   /:videoID                  # Get products by videoID
|
|-- /comment
|   |-- GET   /:videoID                  # Get comments by videoID
|   |-- POST  /submit-comment            # Submit a new comment
|
|-- /user
|   |-- POST  /create                    # Create a new user
|   |-- GET   /list                      # Get all users
|   |-- GET   /:userID                   # Get a user by userID
|   |-- PUT   /:userID/update-username   # Update username for a user
|   |-- PUT   /:userID/update-avatar     # Update avatar for a user
|
```

## API Contract
### #Video
#### POST /create
Create a new video and returns the new object
- URL Params

None
- Headers

Content-Type: application/json
- Data Params
```
{
   videoID: string,
   thumbnailUrl: string,
   title: string,
   description: string
}
```
- Success Response

code: 200
content: ```{ <video_object> }```
## Installation
1. Clone the repository
```bash
git clone https://github.com/Afisina/mid-term-project.git
```
2. Install dependencies
```bash
cd mid-term-project
npm install
```
3. Setting Up MongoDB Connection (change database url in the .env file)
```javascript
DATABASE_URL = mongodb://127.0.0.1/tokopedia_play_clone
```
4. Start the server
```
npm install
```
5. The server should be running on http://localhost:3000
