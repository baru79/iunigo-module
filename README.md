# Creating a Module with Button and Input Text styled components

\* created using `create-react-app`

# Introduction

In this tutorial, I'll show you how to use Button and Input Text styled components.

# Tutorial

## Prerequisites

1. An adequate version of [`Node.js`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ node --version
    v12.13.0
    ```

2. An adequate version of  [`npm`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ npm --version
    6.13.10
    ```
3. An adequate version of [`create-react-app`](https://github.com/facebookincubator/create-react-app) is installed. Here's the adequate version I use:

    ```sh
    $ create-react-app --version
    1.3.1
    ```

    In the case of `create-react-app`, you can either install it globally (i.e. `$ npm install -g create-react-app`) or install it locally (i.e. `$ npm install create-react-app`). If you choose the latter, you will have to specify its path whenever you invoke it (e.g. `path/to/node_modules/.bin/create-react-app`).

## Procedure

1. **Create a new React app on your computer.** (5 minutes)

    ```sh
    $ create-react-app iunigo
    ```
    
    * This is the app you will use to test Button and Input components.
    * I opted to give the app `iunigo`, however, you can name differently.
    * This will create a new folder named `iunigo` (or whatever you named your app) on your computer.

2. **Install the `iunigo-module` package as a "dev-dependency" of the app.** (1 minute)

    ```
    $ cd iunigo
    $ npm install iunigo-module --save-dev
    ```
    
3. **Open iunigo app's folder using VisualCode.** (1 minute)

    ```
    $ cd iunigo
    $ code .
    ```

4. **Replace and save App.js with the following example code .** (1 minute)

    ```
    import React from 'react';
    import { ThemeProvider } from 'styled-components'
    import { Button, Input } from 'iunigo-module';

    const theme = {
        size: "small"
    };

    const App = () => (
        <ThemeProvider theme={theme}>
            <div>
                <h4>{theme.size} buttons</h4>
                <Input styles={{ size: "small" }} placeholder="Test" type="file" onChange={(event) => console.log(event.target.value)} />
                <Button styles={{ color: "white", backgroundColor: "primary", size: "large" }} onClick={() => alert(`primary ${theme.size} clicked`)}>
                    Click for primary {theme.size}
                </Button>
                <Button styles={{ color: "white", backgroundColor: "secondary" }} onClick={() => alert(`secondary ${theme.size} clicked`)}>
                    Click for secondary {theme.size}
                </Button>
                <Button styles={{ color: "white", backgroundColor: "success" }} onClick={() => alert(`success ${theme.size} clicked`)}>
                    Click for success {theme.size}
                </Button>
                <Button styles={{ color: "white", backgroundColor: "danger" }} onClick={() => alert(`danger ${theme.size} clicked`)}>
                    Click for danger {theme.size}
                </Button>
                <Button styles={{ color: "white", backgroundColor: "warning" }} onClick={() => alert(`warning ${theme.size} clicked`)}>
                    Click for warning {theme.size}
                </Button>
                <Button styles={{ color: "white", backgroundColor: "info" }} onClick={() => alert(`info ${theme.size} clicked`)}>
                    Click for info {theme.size}
                </Button>
                <Button styles={{ color: "white", backgroundColor: "dark" }} onClick={() => alert(`dark ${theme.size} clicked`)}>
                    Click for dark {theme.size}
                </Button>
                <Button styles={{ color: "white", backgroundColor: "primary" }} loading={{ color: "pink" }} onClick={() => alert(`dark ${theme.size} clicked`)}>
                </Button>
            </div>
        </ThemeProvider>
    );

    export default App;
    ```

5. **Build and Start your app.** (2 minutes)

    ```
    $ cd iunigo
    $ npm run build
    $ npm start
    ```

6. **Open your browser to view the example.** (1 minute)

    ```
    http://localhost:3000/
    ```

    * By default the url is http://localhost:3000/

# API

1. **Button Component**

     ## Props

    ```
    styles={{ color: "white", backgroundColor: "secondary", size: "small", inverse: true }}
    disabled
    loading={{ color: "pink" }}
    ```
    ## Example large enabled Button
    
    ```
    <Button styles={{ color: "white", backgroundColor: "success", size: "large" }} onClick={() => alert('Button clicked!')}>
        Click Me
    </Button>
    ```

    ## Example disabled Button
    
    ```
    <Button styles={{ color: "white", backgroundColor: "success" }} disabled>
        Click Me
    </Button>
    ```

    ## Example loading Button
    
    ```
    <Button styles={{ color: "white", backgroundColor: "success" }} loading={{ color: "red" }} onClick={() => alert('Button Loading clicked!')} />
    ```

2. **Input Text Component**

     ## Props

    ```
    styles={{ color: "white", backgroundColor: "secondary", size: "small" }}
    disabled
    type="text|textarea|date|password|email" (accept all type as a typical input element)
    ```
    ## Example small Input Text
    
    ```
    <Input styles={{ size: "small" }} placeholder="Test" onChange={(event) => console.log(event.target.value)} />
     ```
<<<<<<< HEAD
# Colors
 
=======
# Colors Pre-defined

>>>>>>> Update README.md and helpers.js
    primary: '#007bff'
    secondary: '#6c757d'
    success: '#28a745'
    danger: '#dc3545'
    warning: '#ffc107'
    info: '#17a2b8'
    dark: '#343a40'
    default: 'black'

    * Note: Other custom colors (hex, hsl, rgb) are allowed

# Sizes

    small: '8px'
    default: '16px'
    large: '24px'
<<<<<<< HEAD
=======

    * Note: Other custom sizes (px, em, %) are allowed
>>>>>>> Update README.md and helpers.js
