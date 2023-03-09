<!DOCTYPE html>
<html>
  <head>
    <title>Get IPv4 Address</title>
  </head>
  <body>
    <button onclick="getIpAddress()">Get IP Address</button>
    <p id="ipAddress"></p>

    <script>
      function getIpAddress() {
        fetch("https://api.ipify.org/?format=json")
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("ipAddress").innerHTML = "Your IPv4 Address: " + data.ip;
          })
          .catch((error) => {
            console.error("Error fetching IP address:", error);
          });
      }
    </script>
  </body>
</html>