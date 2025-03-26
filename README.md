<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid Assignment</title>
  <style>
    .container {
      display: grid;
      gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Candidate can modify */
    }
    .card {
      background: #3498db;
      color: white;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    /* TODO: Make it 3-column on desktop, 2-column on tablet, 1-column on mobile */
  </style>
</head>
<body>
  <div class="container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>
</body>
</html>
