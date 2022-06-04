

# ETH Memos

## Description
This is a basic desktop application designed to allow users to simply create, read, and update memos. It is built with a React frontend framework and a MongoDB, Express Server, and Node.js backend. This project originated as a coding-challenge for a company called Nuance, a decentralized blog-posting Dapp built on the ICP (Internet Computer Protocol) blockchain. I intend to refactor this application in the future to utilize either Motoko or Solidity in the backend so that users can store their memos with the peace of mind and security that comes with having data stored on the blockchain.

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [License](#license)
  - [Tests](#tests)
  - [Next Steps](#next-steps)
  - [Questions](#questions)


## Installation
In order to get this applicaiton running on your local machine, you must have Node.js installed on your computer and follow the steps below:
* Go to the MongoDB atlas site here: https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&adgroup=115749704103&gclid=Cj0KCQjwheyUBhD-ARIsAHJNM-O_VIbRGGCxGtinMzw0QQJdOaCBCDH9m1Y5U9LWiAwLOQxzN4FuYO8aAktAEALw_wcB
* Create a MongoDB account, create a cluster, and create a user with access to the newly created cluster. Remember the username and password. Then, in the Network Access tab, either add your IP address or choose "allow access from anywhere" to add a universal IP address (universal IP necessary for deployment).
* Next, clone the repository into a directory of your choice. 
* Once cloned, change directory into the root directory of this project which you should be able to do with the command ```cd eth-memos```
* Next, open the project in the IDE of your choice and create a .env file in the root directory of the project and add the following key: `JAWSDB_MARIA_URL`. Next, go to MongoDB and click "connect" on your cluster. Click the "Connect Your Application" option and copy the connection string that appears and paste it into your .env file as the value to the JAWSDB key you created there. Be sure to replace your password in the connection string with the password for the user you created in MongoDB.
* Then run the command  ```npm istall``` in the terminal in the root directory of the project to install the necessary dependencies. 
* Then run ```npm start``` in the root directory of the project to start the applicaiton.
* Check https://localhost:3001 to veiw the application on your local machine.

## Usage
N/A

## Technologies
* React.js 
* JavaScript 
* Bootstrap/React-Bootstrap
* Express
* MongoDB
* Node.js
* Morgan npm
* Axios npm
* Cors npm

## License


  [MIT](https://opensource.org/licenses/MIT)
  

  ![License: MIT](https://img.shields.io/badge/License-MIT-9cf)

## Tests
N/A

## Next Steps
* As I learn more about writing Smart Contracts with Solidity and Motoko Canisters, I intend to refactor this application to be built with either a Motoko or Solidity backend so that memos created in this application can be stored on the blockchain.

## Questions
For additional questions please contact:
* The Privacy Dev
* Email: theprivacydev@protonmail.com
* https://github.com/theprivacydev
