# :shopping_cart: :strawberry: :avocado: Shopping List App :orange: :mushroom: :shopping_cart:
![Image of shopping cart](https://github.com/krisjwood/aws-shopping-list/blob/main/public/images/readme-image.jpg)

## Technology
A simple shopping list app build with the following tech:

* App is built using React & node.js
* It's hosted in a AWS S3 bucket
* Server side is managed by AWS Lambda and API Gateway
* Database is AWS RDS - mySQL

### Why these technologies?
Mainly because this was the brief :speak_no_evil:. I used React because I am familar with the framework. I knew deploying to AWS would be the challenge so wanted to focus most my time on the backend deployment. I used a relational database as it's a simple application with small data storage demands so didn't feel it needed to be over-engineered.

I feel I have met the MVP of the brief however if given more time I would look at the following:
1. Reactor codebase to tidy up code
2. Separation of concerns - use more React components
3. Stretch features:
  - allow user to edit item text
  - export list to csv, print to PDF
  - create multiple lists
  - create an account - authentication using Auth0
  - 
4. Improved CSS and styling
5. Unit and integration testing

## How to install and deploy
Follow the instructions below to run the app locally on your computer. Alternatively, save yourself the trouble and check out the deployed version on AWS - http://shopping-list-react-app.s3-website-ap-southeast-2.amazonaws.com/ :sunglasses:
### In your CLI

1. Clone the repo to your computer 
```
git clone https://github.com/krisjwood/aws-shopping-list.git
```

2. Install dependencies
```
cd aws-shopping-list && npm install 
```

3. Spin up the local server. A browser window will open automatically
```
npm start
```
4. Start adding items!

##