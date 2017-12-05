# socket-example

## Getting Started

* git clone this repo `git clone git@github.com:allaboardapps/socket-example.git`
* cd into the repo `cd socket-example`
* run `npm install`
* run `node index`
* open up http://localhost:3000
* click on the `broadcaster` link and open Chrome Dev Tools
* click on the `client` link and open Chrome Dev Tools
* click on the broadcaster page
* say to your partner, "HOT DAMN THIS AIN'T TOO HARD"

## CaptionPoint Specific

- key "s" now sends status to the client, allowing the broadcaster to jump to a slide and then send status without advancing
- to start a basic remote server using ngrok: ngrok http 3000 - will provide a remote URL to dial in to. Remember to add /client to the end of the URL
- for a friendlier URL, use: ngrok http -region=us -hostname=join.captionpoint.com 3000 (and tell them to go to /client)
- 
