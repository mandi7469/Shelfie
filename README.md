
<div align="center">

  <!-- Add additional badges using the following format: -->
  <!-- ![Name](urlToShieldHere)(urlToGithubHere) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributors](https://img.shields.io/github/contributors/hestrain/shelfie.svg?style=plastic&logo=appveyor)](https://github.com/hestrain/Shelfie/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/hestrain/shelfie.svg?style=plastic&logo=appveyor)](https://github.com/hestrain/Shelfie/network/members)
[![Stargazers](https://img.shields.io/github/stars/hestrain/shelfie.svg?style=plastic&logo=appveyor)](https://github.com/hestrain/Shelfie/stargazers)
[![Issues](https://img.shields.io/github/issues/hestrain/shelfie.svg?style=plastic&logo=appveyor)](https://github.com/hestrain/Shelfie/issues)

</div>

<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/hestrain/Shelfie">
  <!-- TODO: Correct this file path to a logo if you would like one; otherwise, delete this a href -->
    <img src="./public/images/Shelfie Logo Teal-Black.png" alt="Logo" width="320" height="160">
  </a>

<!-- TODO: Edit App name -->
  <h3 align="center">Shelfie</h3>

  <p align="center">
  <!-- TODO: Edit App description -->
    Shelfie is an application that allows the user to create and maintain a collection of books that they have read, or wish to read in the future. The application utilizes an SQL database to store persistent data, including books in the users' collections, and comments they have on individual books.
    <br />
    <a href="https://github.com/hestrain/Shelfie"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- TODO: Edit deployment link -->
    <a href="https://github.com/hestrain/Shelfie">View Demo(Coming Soon)</a>
    ·
    <a href="https://github.com/hestrain/Shelfie/issues">Report Bug</a>
    ·
    <a href="https://github.com/hestrain/Shelfie/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- TODO: add your screenshots or demo videos here -->
<!-- Add screenshots using the following format: -->
<!-- ![Screenshot alt description](directPathOfScreenshots) -->
<!-- Add video demos using the following format: -->
<!-- ![Video alt description](directPathOfVideos) -->

This project was built using Node, Express, Handlebars, PostgreSQL, and Sequelize.

### Built With

<div align="center">

<!-- TODO      "bcrypt": "^5.0.0",
    "connect-session-sequelize": "^7.0.4",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-handlebars": "^5.2.0",
    "express-session": "^1.17.1",
    "pg": "^8.11.3",
    "sequelize": "^6.3.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.3"-->

<!-- TODO: Add any additional badges as needed. For more info, visit: https://github.com/hestrain/empty-resources/blob/main/assets/images/shields.md -->

[![Javascript](https://img.shields.io/badge/Language-JavaScript-ff0000?style=plastic&logo=JavaScript&logoWidth=10)](https://javascript.info/)
[![CSS](https://img.shields.io/badge/Language-CSS-ff8000?style=plastic&logo=CSS3&logoWidth=10)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/Framework-Node.js-ffff00?style=plastic&logo=Node.js&logoWidth=10)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/Framework-Express-80ff00?style=plastic&logo=Express&logoWidth=10)](https://expressjs.com/)
[![npm](https://img.shields.io/badge/Tool-npm-00ff00?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/)
[![ExpressSession](https://img.shields.io/badge/Package-Express_Session-00ff80?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/package/express-session)
[![Bcrypt](https://img.shields.io/badge/Package-Bcrypt-00ffff?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/package/bcrypt)
[![Handlebars](https://img.shields.io/badge/Package-Handlebars-0080ff?style=plastic&logo=handlebarsdotjs&logoWidth=10)](https://handlebarsjs.com/)
[![VS Code](https://img.shields.io/badge/IDE-VSCode-0000ff?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-8000ff?style=plastic&logo=PostgreSQL&logoWidth=10)](https://www.postgresql.org/docs/)

</div>

<!-- GETTING STARTED -->

## Getting Started

Once completely built, this application will function as a deployed app on Render.

### Local Installation / Testing

1. Clone the rep

```
git clone https://github.com/hestrain/Shelfie.git
```

2. Install dependencies

```
npm i
```

3. Seed the database

```
npm run seed
```

4. Launch the app in development environment

```
npm run start
```

5. Visit app:

[http://localhost:3001/](http://localhost:3001/)

#### Future Development

- [ ] Add rating module, so that users can rate books
- [ ] Develop comment database, so that users can comment on books and their experience reading

See the [open issues](https://github.com/hestrain/Shelfie/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<!-- LICENSE -->

## License

This project is licensed under the MIT license.

<!-- CONTACT -->

## Contact

<!-- TODO: Add your name, portfolio link, and email if you would like here -->

[Heatherellen Strain](https://github.com/hestrain) - hestrain@gmail.com

[Amanda Changa](https://github.com/mandi7469) - mandi7469@aol.com

[Reina Simms](https://github.com/Reina2024) - simmsreina@gmail.com

[William Allred](https://github.com/AllredW) - allrewil@gmail.com

Project Links:

[Github Repository](https://github.com/hestrain/Shelfie)

<!-- TODO: add your deployment link here -->

[Deployed Website Link](https://shelfie-53sl.onrender.com/)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

<!-- TODO: Add any acknowledgements you would like here -->

Example MVC folder structure provided by 2U Instructional staff [Mary Elenius](https://maryelenius.com/)
