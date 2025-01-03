Thought Process:
First I needed to create a new project, so I created a new folder on my local computer and opened it in VS Code. Then I opened the command palette for VS code and selected to install playwright in the folder for the new project. This created all of the new filed and environments needed to write my test. Next, I changed the test directory in the config file and added the timeout of 5000000. After that, I started by manually testing the site and inspecting the checkerboard to see what type of elements were available. After noting that each board space had its own name element I played the game, capturing an enemy piece on the third move. Noting that the movements and the way to interact with the game were repetitive, I noted that I could use a loop for this portion. After I made 5 legal moves, I verified the XPath needed to click the restart button, the XPath for the message at the bottom that I will use to verify that it was my turn to make a move, and the XPath for the message that is displayed when it is a new game. 

After that I started writing code, I wrote a Reusable function that would verify that we were on the correct page by getting the title of the page we were on and comparing it to the title of the page we were supposed to be on and printing out if the titles were a match. 
The next Reusable function that I wrote is called Move piece. This function does most of the work for this test case. It first verifies that it is our turn to make a move by making sure that the screen says "Make a move". If it does then we proceed and make the move, giving ample time for the screen to update. This function takes in the page, XPath destination, and XPath of where we want to move the piece. If the move can't be made we print that out to the screen.
The last reusable function that I wrote clicks on the restart with a provided Xpath as a parameter, then verifies that it was restarted by checking for the text "Select an orange piece to move" which is only displayed when the game is reset. 
