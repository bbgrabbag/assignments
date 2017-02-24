angular.module("myApp")

.service("httpService", ["$http", "issueDatabase", function ($http, issueDatabase) {

    this.loadIssues = function (url) {
        return $http.get(url)
            .then(function (gotten) {
                issueDatabase.issues = gotten.data;
            })
    };

    this.addNewCause = function (newIssue, url) {
        newIssue.upvotes = 0;
        newIssue.downvotes = 0;
        newIssue.comments = [];
        return $http.post(url, newIssue)
            .then(function (posted) {
                issueDatabase.issues.push(posted.data);
            });
    };



    this.addUpvote = function (id, issue, url) {
        issue.upvotes += 1;
        return $http.put(url, issue)
            .then(function (put) {
                issueDatabase.issues[id] = put.data;
            });
    };

    this.addDownvote = function (id, issue, url) {
        issue.downvotes += 1;
        return $http.put(url, issue)
            .then(function (put) {
                issueDatabase.issues[id] = put.data;
            })
    };

    this.addComment = function (id, comment, issue, url) {
        issue.comments.push(comment);
        return $http.put(url, issue)
            .then(function (put) {
                issueDatabase.issues[id] = put.data;
            })
    };

    this.deleteIssue = function (id, issue, url) {
        return $http.delete(url)
            .then(function (deleted) {
                  
            for(var i = 0; i < issueDatabase.issues.length; i++){
                if (issueDatabase.issues[i]._id == id){
                     issueDatabase.issues.splice(i, 1);
                }
            };
            console.log(deleted);
                },
                function (deleted) {
                    console.log(deleted)
                });
    };

}]);