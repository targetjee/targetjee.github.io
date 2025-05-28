html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Target JEE Resources HUB</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    body {
      background: linear-gradient(to right, #fceabb, #f8b500);
      color: #333;
      line-height: 1.6;
      transition: background 0.4s ease;
    }

    header {
      background: linear-gradient(to right, #00c6ff, #0072ff);
      padding: 1.5rem 2rem;
      color: white;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    header:hover {
      transform: scale(1.02);
    }

    .container {
      max-width: 1100px;
      margin: auto;
      padding: 2rem;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .btn {
      display: inline-block;
      padding: 0.8rem 1.6rem;
      background: #ff6f61;
      color: white;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
      transition: background 0.3s ease, transform 0.3s ease;
    }

    .btn:hover {
      background: #ff3d2e;
      transform: translateY(-3px);
    }

    .section {
      background: white;
      padding: 2rem;
      margin-top: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .section:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }

    .section h2 {
      color: #0072ff;
      margin-bottom: 0.5rem;
    }

    footer {
      text-align: center;
      padding: 1.5rem;
      font-size: 0.95rem;
      background: #333;
      color: #eee;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>Target JEE</h1>
    <p>by DEBADITYA ACHARYA</p>
  </header>

  <div class="container">
    <div class="section">
      <h2>Welcome!</h2>
      <p>Our mission is to provide free, high-quality educational videos and notes to every child who needs them. Join us on this journey to make education accessible for all.</p>
      <a href="#videos" class="btn">Start Learning</a>
    </div>

    <div class="section">
      <h2>Subjects Offered</h2>
      <p>We cover a wide range of topics including Math, Science, English, and Life Skills. More subjects are coming soon!</p>
      <a href="#notes" class="btn">View Resources</a>
    </div>

    <div class="section">
      <h2>Join Our Cause</h2>
      <p>Interested in contributing content or supporting the mission? Reach out to us and become part of this educational movement.</p>
      <a href="#contact" class="btn">Get Involved</a>
    </div>
  </div>

  <footer>
    &copy; 2025 Learn With Us | Built with purpose and passion for free education.
  </footer>
</body>
</html>
