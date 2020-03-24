# Emoji Redux Lab

### React, Redux, HTML, CSS, Jest, Enzyme
___

#### Assignment: "For this assignment, you will be refactoring an app that uses basic state management into one that uses Redux for state management.

### Connect to a store

For this assignment, you're going to take an existing application which
changes a face based based on button clicks.

* You've been provided starter code to work with
* Connect `index.js` to the redux store and pass it down to the `App` component
* Remove the state declaration in the container
* extract code from `Moods.js` into the appropriate files
  * create actions, selectors, and reducers
* Map state and dispatch to props in `Moods.js`
* Export the connected `Moods` container

### Create a new reducer

In this assignment, we have a working app that uses Redux for it's state
management. Now, it's time to extend it.

When the page first loads there should be a start button. Upon clicking
the start button your `Moods` container should display. There should be
a timer under the face emoji. When the timer elapses the game should
reset (all state goes back to 0) and you should be sent to the initial
view.

###### Stretch Goals:

* Add more moods
* Use combine reducer to extract all your timer state from
  your button click state"
