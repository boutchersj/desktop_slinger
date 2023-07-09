# Desktop Automation Framework

### Introduction
Automate tests for your Electron apps using Playwright & TypeScript!

### Tech Stack
- Playwright (ElectronJS app testing support)
- TypeScript (type safety)
- NodeJS (writing to the file system)
- RobotJS (Playwright doesn't do keyboard navigation well within a select menu)

### Getting Started
1. Clone this repository
2. IF ON WINDOWS (maybe just Windows 10, idk), install an extra dependency to support RobotJS keyboard commands BEFORE installing all dependencies (otherwise, [things get weird](https://github.com/octalmage/robotjs/issues/590)):

```npm install -g node-gyp```

3. Install the Visual Studio Tools [with the "Desktop Development with C++" workload](https://github.com/nodejs/node-gyp#installation:~:text=Install%20Visual%20C%2B%2B%20Build%20Environment%3A%20Visual%20Studio%20Build%20Tools%20(using%20%22Visual%20C%2B%2B%20build%20tools%22%20workload)%20or%20Visual%20Studio%20Community%20(using%20the%20%22Desktop%20development%20with%20C%2B%2B%22%20workload)) to support node-gyp
4. To install all dependencies minus unnecessary Playwright browsers (because Electron), run:

```PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci```

4. To run tests, run ```npm test``` from the root directory

### Contribute
My website has plenty of ways to contact me: https://www.stevenboutcher.com.

I prefer LinkedIn or email!