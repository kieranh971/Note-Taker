# Note-Taker
This is a note taking application that allows a user to write and save notes. Using ExpressJS and deployed with Heroku, the app allows users to create and view their own notes!

When the user launches the application, they are taken to a home page.
When the user clicks "Get Started" button, they are redirected to the note taking page to add notes as needed.
The user can enter a title and text to their notes.
When the user enters text in both field, a save icon will display
When the user clicks the save icon, the user will see their new note saved to the left hand column. The user can save as many notes as they need
When the user clicks on previous notes, they should be able to view them
If the user would like to add a new note, the user can click on the + icon to add another note.

# Instalation
User must run npm install to install all depedencies. To use the app on a local computer, the user can run node server.js in your integrated terminal. This will deploy the app at http://localhost:3001.
Otherwise, you can deploy the Note-Taker app on Heroku by following this link: https://young-springs-31965.herokuapp.com/

# Github Repo
View the code here: https://github.com/kieranh971/Note-Taker
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```