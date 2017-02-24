http://coursework.vschool.io/rock-the-vote/

tag: full stack application (minus database), express, put, get, post, delete
goal: build a website that allows users to post, update, upvote, downvote and comment on political issues. 
part 2: add a database with mongoDB


updates:
2-20: having issues with track by issue.id and posting/getting. Activate break points on onLoad and addNewIssue. Check to see why req.body isnt getting id's and why there doesnt seem to be any communication between the server and httpService.

2-20: href link instances work across all views. $scope functions need to be prepended with $scope. The view automatically runs every time its pulled up.

Added downvote/upvote functionality that upates server database via put requests. 

Having issues setting an input box to empty from within a ng-repeat.

All four requests are functional. Just need to style now. Look into scopes

notes:
to add database: connect to mongodb via server.js
create schema and register a model with mongoose. Schema tells mongoDB the nature of the object constructor. Model creates the object constructor. 
tailor server.js to interact with mongoDB

Future Improvements:
hide/show comment buttons when writing new comment. 
erase inner inputs upon submission
