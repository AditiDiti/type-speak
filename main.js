<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    crossorigin="anonymous">

  <style>
    body {
      background: #141414;
    }
  </style>

  <title>Type-N-Speak</title>
</head>

<body class="text-white">
  <div class="container text-center">
    <img src="img/logo.png" alt="" class="mb-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form class="mb-5">
          <div class="form-group">
            <textarea name="" id="text-input" class="form-control form-control-lg" placeholder="Type anything..."></textarea>
          </div>
          <div class="form-group">
            <label for="rate">Rate</label>
            <div id="rate-value" class="badge badge-primary float-right">1</div>
            <input type="range" id="rate" class="custom-range" min="0.5" max="2" value="1" step="0.1">
          </div>
          <div class="form-group">
            <label for="pitch">Pitch</label>
            <div id="pitch-value" class="badge badge-primary float-right">1</div>
            <input type="range" id="pitch" class="custom-range" min="0" max="2" value="1" step="0.1">
          </div>
          <div class="form-group">
            <select id="voice-select" class="form-control form-control-lg"></select>
          </div>
          <button class="btn btn-light btn-lg btn-block">Speak It</button>
        </form>
         
        <p class="text-secondary"> Note: This app uses the Web Speech API which is experimental and may not fully work in some versions of certain browsers</p>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>
  <script src="js/main.js"></script>
</body>

</html>
