# React Coffee Shop Website

## Production Demo

### Live Demo

[Coffee Shop Website](https://react-coffee-shop.vercel.app)

### Previews

#### Desktop Preview

![Desktop Preview](/assets/desktopPreview.gif)

#### Mobile Preview

![Mobile Preview](/assets/mobilePreview.gif)

## Description

### Website Description

A website where people can order coffee drinks to go from a coffee shop. Users can order coffee as a guest or use
their created account. Authenticated users can also view their previous orders.

### Project Description

#### Goal
The goal of this project was to show the ability to use the tools mentioned below and implement the features shown 
below. Another goal was to have experience with the Javascript frameworks and libraries I had learned. With these 
tools, I created a responsive website that communicates with the backend to fetch and store: cart sessions, available 
drinks, orders, and registered users. My decision to create a coffee shop website was due to my favorite morning hobby 
of drinking espresso drinks and making them.

#### Development Process

The database used in this project is MongoDB. Originally the drinks and cart sessions were in Firebase, but I wanted 
more experience working with MongoDB. I also started with only ReactJS, but then decided to create a full-stack project
with NextJS. With NextJS, it was easy to host the project on Vercel for production and implement serverless functions.

The features mentioned below started as to do features I wanted to implement (Please see my previous commits to see
how that process went through). I started out with a project I did partially guided by
[Maximilian](https://github.com/maxschwarzmueller)'s React course in the project named 
[Food Order Page](guide-code/tree/17-practice-food-order-http-forms). The first page I had was the menu page, then the 
home page, then the authentication page, and finally the account page. These four pages have multiple React components 
and CSS modules for the styling.

Each time I finished a page, I move to debug and checked how many times a component rendered to make sure I was not 
making unnecessary renders, and if so, I would try to change my component structure first and then use React’s hooks 
like Callback, React.memo, and useMemo. I also checked how many times the backend server was called and restructured my
code to minimize server calls, like using Vercel’s SWR hook for data caching.

### Tools

- **Javascript** and **NodeJS**
- **CSS** modules
- **ReactJS** component framework
- **NextJS** fullstack/production framework
- **MongoDB** database
- **NextAuth** user authentication
- **Redux** state management
- **bcryptjs** cryptography
- **Framer Motion** animation
- **Vercel** hosting

### Features

The following features are in check list order due to they were to do to lists but are now completed, hence the
checkmark.

- [x] Ported to NextJS
- [x] React Context states to Redux State
- [x] Page animation using framer motion
- [x] Menu list animation using framer motion
- [x] Cart Button animation when cart item was added/removed using framer motion
- [x] Droplist amount for a drink item
- [x] Modal animation using framer motion
- [x] Drink items in cart animation using framer motion
- [x] Loading Animation
- [x] Cart button animation on hover
- [x] Empty Cart Button when viewing the cart module
- [x] Remove item completely from the list with trash icon as button when viewing cart
- [x] Underline the current page in the navigation bar
- [x] Backend connection using MongoDB for orders, drinks, and previous cart sessions
- [x] Status message display orders if it is successful, invalid, or a server error occurred
- [x] Environmental Variables to use for MongoDB credentials
- [x] Form validation at the front-end and back-end
- [x] Welcome and Menu Pages
- [x] Drink images in the drink list using NextJS Image
- [x] CSS rework
- [x] Mobile compatible
- [x] Icons: tab and bookmark
- [x] Create accounts (Authentication)
- [x] Display status message  for signing or creating an account if it is successful, invalid input, or a server error 
occurred
- [x] Status message display for sign in or creating an account if it is successful, invalid input, or server error
- [x] Change account password
- [x] Status message display for changing a password if it is successful, invalid input, or server error occurred
- [x] Greet signed in user in the home page
- [x] Password hashing to store in MongoDB using bcryptjs
- [x] Orders created from guests or sessions
- [x] API routes protected (unauthorized users)
- [x] Hovering on pictures shows the source/link to the source
- [x] User is asked to checkout as guest/sign in if they are not already signed in
- [x] MongoDB Vercel optimization
- [x] Cart sessions from user sessions stored in the server
- [x] Cart sessions from guest sessions stored in the browser's local storage
- [x] Cart session saved in authenticated user database if logged in after saving cart items while in guest session
- [x] Receipt after checkout
- [x] Past Order History from the profile page
- [x] Past Order animation using framer motion

### File Structure
```
react-coffee-shop
├── assets
│   ├── coffee-drinks.jpg
│   ├── coffee-shop.jpg
│   ├── coffeeLove.jpg 
│   ├── coffeeWhiteBackground.jpg
│   ├── desktopPreview.gif 
│   ├── mobilePreview.gif
│   └── source.txt
│    ./react-coffee-shop/components
│    ├── Auth
│    │   ├── AuthForm.js
│    │   ├── AuthForm.module.css
│    │   ├── SignIn.js
│    │   └── SignUp.js
│    ├── Cart
│    │   ├── Cart.js
│    │   ├── Cart.module.css
│    │   ├── CartContent.js
│    │   ├── CartContent.module.css
│    │   ├── CartItem
│    │   │   ├── CartItem.js
│    │   │   ├── CartItem.module.css
│    │   │   ├── CartItemList.js
│    │   │   └── CartItemList.module.css
│    │   └── Checkout
│    │       ├── Checkout.js
│    │       ├── Checkout.module.css
│    │       ├── GuestCheckout.js
│    │       └── RegisteredCheckout.js
│    ├── Drinks
│    │   ├── AvailableDrinks.js
│    │   ├── AvailableDrinks.module.css
│    │   ├── DrinkItem
│    │   │   ├── DrinkItem.js
│    │   │   ├── DrinkItem.module.css
│    │   │   ├── DrinkItemForm.js
│    │   │   ├── DrinkItemForm.module.css
│    │   │   ├── DrinkItemList.js
│    │   │   └── DrinkItemList.module.css
│    │   ├── DrinksSummary.js
│    │   └── DrinksSummary.module.css
│    ├── Layout
│    │   ├── HeadMeta.js
│    │   ├── Icons
│    │   │   ├── CartCheck.js
│    │   │   ├── CartIcon.js
│    │   │   ├── ClearCart.js
│    │   │   └── CompanyIcon.js
│    │   ├── Layout.js
│    │   ├── Layout.module.css
│    │   └── NavBar
│    │       ├── CartModal.js
│    │       ├── HeaderCartButton.js
│    │       ├── HeaderCartButton.module.css
│    │       ├── MainNavigation.js
│    │       └── MainNavigation.module.css
│    ├── PastOrders
│    │   ├── DisplayPastOrders.js
│    │   ├── DisplayPastOrders.module.css
│    │   ├── PastOrderList.js
│    │   ├── PastOrderList.module.css
│    │   ├── PastOrders.js
│    │   └── PastOrders.module.css
│    ├── Profile
│    │   ├── PasswordForm.js
│    │   ├── PasswordForm.module.css
│    │   ├── UserProfile.js
│    │   └── UserProfile.module.css
│    ├── Receipt
│    │   ├── Receipt.js
│    │   ├── Receipt.module.css
│    │   ├── ReceiptItem.js
│    │   └── ReceiptItem.module.css
│    ├── UI
│    │   ├── Card.js
│    │   ├── Card.module.css
│    │   ├── LoadingSpinner.js
│    │   ├── LoadingSpinner.module.css
│    │   ├── Modal.js
│    │   └── Modal.module.css
│    └── Welcome
│        ├── WelcomeMessage.js
│        └── WelcomeMessage.module.css
├── drinksData
│   ├── coffee.js
│   └── drinks.json
├── pages
│   ├── HomePage.module.css
│   ├── _app.js
│   ├── _document.js
│   ├── account
│   │   ├── AccountPage.module.css
│   │   └── index.js
│   ├── api
│   │   ├── auth
│   │   │   ├── [...nextauth].js
│   │   │   └── signup.js
│   │   ├── cart
│   │   │   └── cart.js
│   │   ├── menu
│   │   │   └── drinks.js
│   │   ├── order
│   │   │   └── order.js
│   │   └── user
│   │       └── change-password.js
│   ├── auth
│   │   ├── AuthPage.module.css
│   │   └── index.js
│   ├── index.js
│   └── menu
│       ├── MenuPage.module.css
│       └── index.js
├── public
│   ├── drinkImages
│   │   ├── americano.jpg
│   │   ├── cappuccino.jpg
│   │   ├── coldBrew.jpg
│   │   ├── cortado.jpg
│   │   ├── dripCoffee.jpg
│   │   ├── espresso.jpg
│   │   ├── flatWhite.jpg
│   │   ├── icedLatte.jpg
│   │   ├── latte.jpg
│   │   ├── macchiato.jpg
│   │   ├── nitroBrew.jpg
│   │   └── source.txt
│   └── favicon
│       ├── android-chrome-192x192.png
│       ├── android-chrome-512x512.png
│       ├── apple-touch-icon.png
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── favicon.ico
│       ├── safari-pinned-tab.svg
│       ├── site.webmanifest
│       └── source.txt
├── store
│   ├── cart
│   │   ├── cart-actions.js
│   │   └── cart-slice.js
│   ├── fetcher
│   │   └── fetch-items.js
│   ├── index.js
│   └── ui
│       └── ui-slice.js
├── styles
│   └── globals.css
└── utils
    ├── animations
    │   └── animation.js
    ├── auth
    │   └── auth.js
    └── db
        ├── db-drinks-util.js
        ├── db-util.js
        ├── input-validation.js
        └── mongodb-client.js
```
