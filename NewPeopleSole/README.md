# People Sol

People Sol is HRMS mobile application for HR

## Installation

It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system. Once you have npm installed you can run the following both to install and upgrade Yarn:

```bash
npm install --global yarn
```

## Steps to setup environment.

### 1.chocolatey Installation :

copy and paste the following command in cmd. make sure you have opened cmd as administrator user in windows.

```javascript
>@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

To check whether chocolate installed or not in system check chocolate version by below command
```javascript
>choco -version or choco -v
```

### 2.Install node & Python
```javascript
>choco install nodejs.install - responsible for node js installation
```
```javascript
>choco install python2 - responsible for python2 installation
```

Note: If you have already installed Node on your system, make sure it is version 4 or newer. 
If you already have a JDK on your system, make sure it is version 8 or newer.

### 3.Installing Java (For Android Support.)

If you have already java installed machine skip this option or otherwise install java from 
http://www.oracle.com or else use below command
```javascript
>choco install jdk8
```

### 4.JDK Setup

Make sure you have set Jdk path as environment variable as ####JAVA_HOME as system variable.

### 5.Install The React Native CLI 

Install this using 
```javascript
>npm install -g react-native-cli
```
### 6.Download Android SDK & Xcode

Download Android studio from https://developer.android.com/studio/index.html.

### 7.Install node_modules pkg using yarn.
```javascript
>yarn install --save. 
```
OR
```javascript
>yarn
```

### 8.Update all Pods for iOS env
```javascript
>pod install
```


## Contributing

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)