<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            background-color: #f4f4f4;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 20px 0;
        }
        main {
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 20px auto;
        }
        footer {
            background-color: #f1f1f1;
            color: #555;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Hi! 👋 What's up?</h1>
    </header>
    <main id="content"></main>
    <footer>
        <p>&copy; 2024 Lucas Paineli</p>
    </footer>

    <script>
        const content = document.getElementById('content');
        content.innerHTML = `
            <p>My name is Lucas! A passionate Data Science and Software Architect student from Brazil.</p>
            <p>✨ I've been integrating systems since 2020.</p>
            <p>📚 I'm currently studying Python and SQL.</p>
        `;
    </script>
</body>
</html>
