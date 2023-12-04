# FoundationJS (Series A): A Foundation Guide to JavaScript

## Chapter 2: Ways to Use Javascript

In this chapter, you will have a strong foundation on the following topics: 

1. [Internal or Inline JavaScript](#internal-or-inline-javascript)
2. [Project 1: Personalized Greeting Website](#project-1-personalized-greeting-website)
   
There are a couple of ways to use JavaScript inside your HTML documents. These include the use of **Internal JavaScript** and **External JavaScript**.
    
### Internal or Inline JavaScript

In this approach to use JavaScript, the JavaScript code is  written between the `<script></script>` tag within the HTML document. The script is placed in the `<body>` or `<head>` section of an HTML page.

    Note: It is always a good practice to place scripts at the bottom of the <body> as it enhances the loading speed. 
    Placing a script inside the <head> can make the site slower as it takes time to process the script.

#### Project 1: Personalized Greeting Website

In this project, we will create a simple Personalized Greeting website. This project takes names as input from the user. Once the user submits their name, the website will greet the user.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greeting</title>
</head>
<body>
    <script>
        var userName = prompt("Please Enter your Name: ");
        alert("Hello, " + userName + "! Greetings from JavaScript!");
    </script>
</body>
</html>
```
#### Code Explained!!

The above code snippet showcases the use of internal JavaScript. In this approach of using JavaScript, codes are directly placed within the HTML document. Let's break down the JavaScript code step-by-step:

#### HTML Structure

   `<!DOCTYPE html>`: This declaration defines the document type and version of HTML. In this case, the version is HTML5. 

   `<html lang="en">`: This defines that it is the root element of the HTML document and sets the language to English.

   `<head>`: This section contains meta-information about the document, such as character set, viewport settings, and page title.

   `<meta charset="UTF-8">`: Specifies the character encoding as UTF-8.

   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configures the viewport for responsive design.

   `<title>Greeting</title>`: Sets the title of the HTML document to "Greeting."

#### Body Content

   `<body>`: This is the main content of the HTML document.
   `<script>`: This tag is used to embed JavaScript code within the HTML document.

#### JavaScript
   `var userName = prompt("Please Enter your name:");`: This line declares a variable `userName` and assigns it the value entered by the user through the prompt. The `prompt`         function displays a dialog box with the message `"Please Enter your Name"` and waits for users to input their name.
   
   `alert("Hello, " + userName + "! Greetings from JavaScript!");`: This displays an alert dialog with a greeting. First, it concatenates the string "Hello," with the variable    value stored in the `userName` variable, and the string "! Greetings from JavaScript!" is added to the last.


    



