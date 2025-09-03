<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Variables Example</title>
</head>
<body>
    <h2>JavaScript Variables Demo</h2>
    <button onclick="showVariables()">Show Variables</button>
    <div id="output"></div>

    <script>
        function showVariables() {
            // var variable
            var varVariable = "This is a var variable";
            // let variable
            let letVariable = "This is a let variable";
            // const variable
            const constVariable = "This is a const variable";
            // Number variable
            let numberVariable = 42;
            // String variable
            let stringVariable = "Hello, World!";
            // Boolean variable
            let booleanVariable = true;
            // Array variable
            let arrayVariable = [1, 2, 3];
            // Object variable
            let objectVariable = { name: "Karan", age: 25 };

            let output = `
                <strong>var:</strong> ${varVariable}<br>
                <strong>let:</strong> ${letVariable}<br>
                <strong>const:</strong> ${constVariable}<br>
                <strong>Number:</strong> ${numberVariable}<br>
                <strong>String:</strong> ${stringVariable}<br>
                <strong>Boolean:</strong> ${booleanVariable}<br>
                <strong>Array:</strong> ${JSON.stringify(arrayVariable)}<br>
                <strong>Object:</strong> ${JSON.stringify(objectVariable)}<br>
            `;
            document.getElementById('output').innerHTML = output;
        }
    </script>
</body>
</html>