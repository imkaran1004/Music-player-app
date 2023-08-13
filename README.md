# music-player-app

This project include functionalities like upload songs, search songs and play or pause songs. it includes addtional functionalities with playlist like create, view and add songs in playlists.

So you can upload songs,play or pause songs and upload your own songs from your device.

This application is completely authenticated and include fully authenticated SignUp and Login functionality.

# Available Scripts

In the project directory, you can run:

### `npx create-react-app my-app`
allows you to create React project. open http://localhost:3000/ to see your app.
### `npm start`

By using this command you can run your front-end


### `node/nodemon index.js`

By using this command you can run your back-end

# Database 
mongoDB cloud or mongoDB Compass can be used as the database for this project. The database connection can be configured in the `index.js` file which is in backend, with the appropriate values for the following properties:

```properties
    const url = "mongodb+srv://username:<password>@cluster0.my2k6el.mongodb.net/?retryWrites=true&w=majority";
    username=[username]
    password=[password]
```

after making connection with database, you can add base data to your database.
Note: you must have login first in mongoDB atlas when you run your frontend. otherwise, it will show error when you try to fatch data.

# Endpoints
- http://localhost:3000/login
- http://localhost:3000/signup
- http://localhost:3000/home
- http://localhost:3000/search
- http://localhost:3000/Library
- http://localhost:3000/myMusic
- http://localhost:3000/uploadSong


# Preview
<img width="960" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/3a0be9c3-0d02-467f-a8a1-ee55cc58cc5e">

<img width="945" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/67fb38fc-f65c-4362-ad49-ff2bb4826aa0">

<img width="960" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/6698d64b-444b-4695-8225-c7533d136ba1">

<img width="960" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/e35cf34b-4510-4fd5-8308-5290c1fd0769">

<img width="960" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/ab96c6d7-a4c6-4a34-9dcd-f3acc23004bf">

<img width="960" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/68f080ae-d379-401a-9344-6b9ed4129e12">

<img width="960" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/2c0cfdb7-7a9d-4e20-9d11-e99e133a16de">

<img width="959" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/ac0745ec-831a-4d60-94a9-734a7f2b99f7">

<img width="960" alt="image" src="https://github.com/imkaran1004/Music-player-app/assets/106981565/51803a4a-9a89-4b29-8035-4712c6c06290">
