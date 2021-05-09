# Work-Day-Scheduler
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Links:
```
Live Site: 
     https://ctinengyn.github.io/Work-Day-Scheduler/
   
Code Repo: 
     https://github.com/ctinengyn/Work-Day-Scheduler
  
Issues & Explanation:
     https://github.com/ctinengyn/Work-Day-Scheduler/blob/main/README.md

```
## Application Description

This is a basic day planner app that loops through the hours of 8am - 5pm(typical working hours) for a specific date, which is the current day that the user opens the app. The app uses moment.js to handle time. The app also allows the user to enter and save text into any description field that has a class of future. The data will be saved to the localStorage of the browser. The past hours are highlighted gray, the current hour red, and future hours green.

## Narrative to try to accomplish:
1.  Create an simple app that uses bootstrap, jquery, moment.js, fontawesome, & google fonts
2.  App is a simple day scheduler of typical working hours in a day.
3.  Follows specific current date of when the user opens the app and use those hours of that day.
4.  Allow the user to save text for each hour and change row color depending if it is a past, present for future hour.
5.  Data of text is to be stored in localStorage of the browser until page is restarted. Refreshed page should still keep the localStorage.

## Pseudo code for html
1.  typical
2.  allows save button to have the icon "save" optional
3.  font families
4.  use of bootstrap component
5.  list timeblocks from 24 hour clock and 12 hours clock translation
6.  jquery and moment links from https://cdnjs.com/libraries/moment.js/

## Pseudo code for css
1.  typical setup using html attributes and classes

## Pseudo code for js
1.  tells engine to load 1)html & 2)css first.
2.  display current day & time.
3.  get nearby values.
4.  taken the change from the sibling html description attribute
5.  taken the change from the parent html id attribute
6.  set items in local storage.
7.  load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
8.  get current number of hours.
9.  use of moment.js
10. loop over time blocks
11. check if we've moved past this time, click into css/html given classes of past, present, or future
12.  re-run function