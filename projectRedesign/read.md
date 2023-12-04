# FoundationJS (Series A): A Foundation Guide to JavaScript

## Chapter 2: Ways to Use Javascript

In this chapter, you will have a strong foundation on the following topics: 

1. [Internal or Inline JavaScript](#internal-or-inline-javascript)
   
      1. Code Snippet - Internal JavaScript




There are a couple of ways to use JavaScript inside your HTML documents. These include the use of **Internal JavaScript** and **External JavaScript**.
    
### Internal or Inline JavaScript

In this approach to use JavaScript, the JavaScript code is  written between the `<script></script>` tag within the HTML document. The script is placed in the `<body>` or `<head>` section of an HTML page.

    Note: It is always a good practice to place scripts at the bottom of the <body> as it enhances the loading speed. 
    Placing a script inside the <head> can make the site slower as it takes time to process the script.

#### Code Snippet - Internal JavaScript

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

#### Code Explained !!
The above code snippet showcases the use of internal JavaScript. In this approach of using JavaScript, codes are directly placed within the HTML document.

Let's break down the JavaScript code step-by-step:

#### HTML Structure

`<!DOCTYPE html>`: This declaration defines the document type and version of HTML. In this case, the version is HTML5. 

`<html lang="en">`: This defines that it is the root element of the HTML document and sets the language to English.

`<head>`: This section contains meta information about the document, such as character set, viewport settings, and page title.


    



