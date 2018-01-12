![](banner.png)

# InstaDoge

#### By Arjun Nemani

InstaDoge is an **[Instagram]** for **[Doge] Pics**.

I created InstaDoge as a personal challenge to try to build a complex full stack application with architecture.

I might also explore **[React Native]** for Mobile client development.

My aim is to complete the challenge by the end of **2018**.

This app also serves as reference for future **[React]**, **[Redux]** and **[Redux-Saga]** Projects (as of right now).

The backend is a simple devServer.

The Store API is written in **[Flask]**.

## Installation

Before installing you need:

* Python 3
* Node JS
* [Yarn]

```bash
git clone https://github.com/nemaniarjun/InstaDoge
cd InstaDoge
cd api
python3 install -r requirements.txt
cd ../app
yarn install
```

## Usage

You need 2 terminal windows

#### running api

```bash
cd InstaDoge/api
python3 app.py
```

API Server is now running on localhost:5000/

#### running app

```bash
cd InstaDoge/app
yarn start
```

Open your broswer to localhost:7770/ to bask in the glory of InstaDoge

## What Works?

* [x] Image upload to **[Cloudinary]**
* [x] Drag & Drop Upload using **[React-Dropzone]**
* [x] Cool Animations
* [x] Persistant data store
* [x] Adding, Deleting Comments
* [x] Adding Likes to a Photo
* [x] Fast frontend routing with **[React-Router]**
* [x] API calls to **[Flask]** App

## Whats Left?

### **A whole lot of things**

* [ ] Proper database at backend
* [ ] Migrating completly to ES6 Syntax <3
* [ ] Image-Filter ( **[CSS-Only]** or **[Cloudinary]** Transformations )
* [ ] User Auth
* [ ] User Profile
* [ ] Ability to Follow People
* [ ] Notification Feed
* [ ] Hashtag Support
* [ ] Ability to Mention People
* [ ] Integrating **[Stream]** for Feeds
* [ ] Integrating **[MapBox]** for GeoLocation Data
* [ ] Integrating **[Algolia]** for Search
* [ ] Integrating **[Keen]** for Analytics
* [ ] Integrating **[Sentry]** for Logging
* [ ] Using **[Terraform]** for **[AWS]** / **[DigitalOcean]** auto deploy
* [ ] Native apps using **[React Native]**

## Resources / References

* https://blog.filestack.com/tutorials/create-an-instagram-clone/
* https://learnredux.com
* https://github.com/jportela/redux-saga-persistence/
* https://css-tricks.com/image-upload-manipulation-react/
* http://cabin.getstream.io/
* https://getstream.io/get_started/#end
* https://getstream.io/based-feed-ui-kit-sketch/
* https://getstream.io/blog/building-news-feeds-activity-streams-with-meteor/
* https://getstream.io/personalization/
* https://getstream.io/blog/cabin-react-redux-example-app-imgix/
* https://getstream.io/activity-feed-design/#design-activity-feeds
* https://css-tricks.com/everything-need-know-instagram-api-integration/
* https://github.com/webpack/webpack

[Redux-Saga]: https://github.com/redux-saga/redux-saga
[instagram]: https://instagram.com
[doge]: (https://en.wikipedia.org/wiki/Doge_(meme))
[stream]: https://getstream.io
[mapbox]: https://www.mapbox.com/
[algolia]: https://www.algolia.com/
[keen]: https://www.keen.io/
[sentry]: https://www.sentry.io/
[terraform]: https://www.terraform.io/
[aws]: http://aws.amazon.com
[digitalocean]: http://digitalocean.com
[react-router]: https://github.com/ReactTraining/react-router
[flask]: http://flask.pocoo.org/
[css-only]: https://una.im/CSSgram/
[redux]: http://redux.js.org
[yarn]: http://yarn.io
[cloudinary]: https://cloudinary.com
[react]: http://reactjs.org/
[react native]: https://facebook.github.io/react-native/
[react-dropzone]: https://react-dropzone.js.org/
