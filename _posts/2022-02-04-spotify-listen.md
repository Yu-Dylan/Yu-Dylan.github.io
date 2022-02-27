---
title: Listen to Spotify with me!
author: Dylan Yu
date: 2022-02-04
categories: [Blogging, Music]
tags: [music, spotify, software]
math: true
mermaid: true
---

Instructions on how to connect to or set up a listening server, because I'm cheap and won't pay for Spotify Premium. Make sure you know how to get to command line/terminal.

# Installing and using Spicetify
1. Go here: <https://spicetify.app/docs/getting-started/simple-installation> and follow the installation tutorial.
2. Type `spicetify` into command line.

# Installing Listen Together
As far as I'm aware, Windows has a UI ("Marketplace" will show up on the left sidebar) but MacOS doesn't. For Windows, you can use Marketplace and download Listen Together by FlafyDev in the Extensions section, but the following should work for both operating systems:

3. Save the following file to your `Extensions` folder inside your `.spicetify` folder: <https://raw.githubusercontent.com/FlafyDev/spotify-listen-together/main/compiled/listenTogether.js>.
   1. For Windows, you can find the `Extensions` folder at `%userprofile%\.spicetify\Extensions\` in File Explorer.
   2. For MacOS, `~/.config/spicetify/Extensions` in Folders.
4. In command line, run `spicetify config extensions listenTogether.js` followed by `spicetify apply`.

# Joining a server
5. Click the Listen Together icon (it's colored red and blue) and click "Join a server."
6. Type in the server address and your name, then click join.
   1. If you're someone I know, contact me for the server link.
   2. If you want to host your own server, [deploy to Heroku](https://github.com/FlafyDev/spotify-listen-together#creating-a-server).
7. To request host, click the Listen Together icon and click "Request host."
