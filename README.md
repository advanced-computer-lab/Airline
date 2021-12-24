<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/advanced-computer-lab/Zone-A-squared.git">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">AS Airlines System</h3>

  <p align="center">
    An Airline Reservation System through which an admin can create, update, or delete flights and users can reserve and pay for round-trip flights
    <br />
    <a href="https://github.com/advanced-computer-lab/Zone-A-squared"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/advanced-computer-lab/Zone-A-squared">View Demo</a>
    ·
    <a href="https://github.com/advanced-computer-lab/Zone-A-squared/issues">Report Bug</a>
    ·
    <a href="https://github.com/advanced-computer-lab/Zone-A-squared/issues">Request Feature</a>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MongoDB](https://mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Material UI](https://mui.com/)
* [Stripe Payment API](https://stripe.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow the steps below to start the application 

### Prerequisites

* Download Node.js from https://nodejs.org/en/download/
* Create a MongoDB Atlas Cluster

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/advanced-computer-lab/Zone-A-squared
   ```
2. Install NPM packages in both the frontend and backend directories
   ```sh
   npm install
   ```
3. Create a file named ".env" in the backend directory
4. Paste the following in the .env file (remove /example/ and place your own data )
   ```sh
   AIRLINE_DB_URI=/Enter the connection string from mongoDB cluster/
   AIRLINE_NS=/Enter mongoDB database name/
   PORT=5000
   EMAIL=/Enter an email that you would like the website notification emails be sent from/
   PASSWORD=/enter the password of the email you entered above/
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- Admin System
    - Create New Flights
    - Search For Existing Flights using any or all of the flight details as criteria
    - View Existing flights' details
    - Edit Existing flights(Changes are reflected on existing user bookings)
    - Delete Existing Flights(Existing user bookings that contain flight are cancelled and affected users are emailed)
- User System
    - Sign up/login
    - Edit User Profile
    - Search for available flights using any, or all of the flight details such as departure/destination airports, number of adults/children, desired cabin class, and departure/return dates
    - View available departure flights and all their details
    - Select one of the available departure flights
    - View available return flights that match the previously selected return flight and with a further date
    - Select one of the available return flights
    - Review a summary of the trip selection with both flights and total price
    - User must be logged in to continue booking
    - Select the chosen number of seats in the chosen cabin from a seatmap of the departure flight
    - Select the chosen number of seats in the chosen cabin from a seatmap of the return flight
    - View a final summary of the trip with the both flights, chosen seats, and total price to pay
    - Pay for booking using Stripe API
    - if payment is accepted the booking is created(an email is sent with booking details)
    - View all user's existing bookings
    - Edit the chosen seats on one of the flights
    - Mail the booking to the email registered to the user
    - Change the booking to another round-trip and pay difference only
    - Cancel the booking(an email is sent with refund amount)   

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
