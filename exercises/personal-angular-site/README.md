http://coursework.vschool.io/personal-angular-site/

tags: angularjs, services, ngRoute, API integration
gooal: build  a complete website that allows a user to interact with an API

Resources:
https://dev.battle.net/
https://www.reddit.com/r/starcraft/wiki/new#wiki_watching_and_streaming
https://dev.battle.net/docs/read/oauth

The basic process is as follows:

1. Request an authorization code by opening a new window or redirecting the user to the authorization URL: https://<region>.battle.net/oauth/authorize

2. Handle the callback from the authorization service to get the actual authorization code.

3. Request a token, using the authorization code, via the token URL via HTTPS POST: https://<region>.battle.net/oauth/token, 

4. The response from this call will contain a token (assuming you did everything correctly) 

5. Call the Battle.net profile API for the game you are interested in, such as https://<region>.api.battle.net/wow/user/characters or https://<region>.api.battle.net/sc2/profile/user.

6. The data returned from this will contain the profile (list of characters) for that game.



brainstorm: 
Look up match history stats
