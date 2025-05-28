<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Course Hub - Learn Anywhere</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Free Course Hub</h1>
    <p>Empowering learners with free, high-quality education.</p>
    <a href="#courses" class="btn">Start Learning</a>
  </header>

  <section class="container">
    <div class="section">
      <h2>About Us</h2>
      <p>We provide free educational videos across various subjects to help students excel.</p>
      <a href="#about" class="btn">Learn More</a>
    </div>

    <div class="section">
      <h2>Available Courses</h2>
      <p>Explore lessons in Mathematics, Science, English, and more.</p>
      <a href="#courses" class="btn">View Courses</a>
    </div>

    <div class="section">
      <h2>Join Us</h2>
      <p>Want to contribute or support our cause? Be a part of the learning movement.</p>
      <a href="#contact" class="btn">Get Involved</a>
    </div>
  </section>

  <footer>
    &copy; 2025 Free Course Hub | Learn without limits.
  </footer>
</body>
</html>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: linear-gradient(to right, #ff9966, #ff5e62);
  color: #333;
  line-height: 1.6;
  text-align: center;
}

header {
  padding: 2rem;
  color: white;
  background: linear-gradient(to right, #1d2b64, #f8cdda);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
}

h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #ff6f61;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
}

.btn:hover {
  background: #e63946;
  transform: translateY(-5px);
}

.container {
  max-width: 90%;
  margin: auto;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.section {
  background: white;
  padding: 2rem;
  margin: 1rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  flex: 1;
  min-width: 300px;
}

.section:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

footer {
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  background: #333;
  color: white;
  margin-top: 2rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  .container { flex-direction: column; }
}
