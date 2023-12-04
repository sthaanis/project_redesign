# Ways to Use Javascript

There are a couple of ways to use JavaScript inside your HTML documents. These include the use of **Internal JavaScript** and **External JavaScript**.
    
## Internal or Inline JavaScript

In this approach to use JavaScript, the JavaScript code is  written between the `<script></script>` tag within the HTML document. The script is placed in the `<body>` or `<head>` section of an HTML page.

    Note: It is always a good practice to place scripts at the bottom of the <body> as it enhances the loading speed. 
    Placing a script inside the <head> can make the site slower as it takes time to process the script.

### Code Snippet

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal or Inline JavaScript</title>
</head>
<body>
    <p id="demo">Click on the button to change the text.</p>
    <button onclick="changeText()">Click Me!</button>

    <script>
        function changeText(){
            document.getElementById('demo').innerHTML = "All the codes are written inside the script tag within the html document";
        }
    </script>
   
</body>
</html>

```
    
**External JavaScript**

In this approach of using JavaScript, all the JavaScript code is placed inside a separate file with a `.js` extension and the file is linked to the HTML document using the `<script>` tag with the `src` attribute.

An external script can be referenced in 3 different ways:
1. With a full URL (a full web address) 
   ```<script src="https://www.yoursite.com/js/script.js"></script>```
2. With a file path (like /js/)
   ```<script src="/js/script.js"></script>```
3. Without any path
   ```<script src="script.js"></script>```
    
**Why to us External JavaScript?**

Using external JavaScript has several advantages:
        1. Separation of Concerns: Keeps your HTML clean and separates the structure (HTML), presentation (CSS), and behavior          (JavaScript).
        2. Code Reusability: The same JavaScript file can be linked to multiple HTML files, promoting code reusability.
        3. Caching: External files can be cached by the browser, leading to potential performance benefits for returning visitors.
        4. Readability: It makes HTML and JavaScript easier to read and maintain.

## Your First "Hello World" Program in JavaScript

## JavaScript Statements 
    In simplers terms, Statements are pieces of code that instruct the computer to perform specific actions.
    Let's consider the following example.

    console.log("Hello, World");

    In the above statements you are telling your computer to log the message "Hello, World" to the console. So here you are instructing your computer to perform some action. 

    Statements are composed of values, operators and statements. Javascript programs contain many statements and these statements are written on separate lines separated by a semicolon.

    expressions are pieces of code that produce a value.

    example, 
    a = 5;
    b = 4;
    c = a + b ;  

## Comments 

    Comments in JavaScript are notes that explains what your code does. It's a way to help yourself and others understand the purpose of different parts of the code. They're just for humans to read. 
    
    Comments are ignored by the JavaScript interpreter during the execution. Comments in JavaScript are written mainly in two ways.

    1. Single-Line Comments : Single line comments start with two forward slash character `//`. The single-line comment effects the entire line.

    2. Multi-line Commenets : Multi-line comments begin with `/*` and end with `*/`. Everything between these markers is considered a comment.

    Comments to Prevent Code Execution

    Comments are also handy to disable a part of code as it prevent execution and suitable for code testing. Adding `//` in-front of the code will change the piece of code to a comment.

    



