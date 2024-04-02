document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('scanner');

  const scanner = new Instascan.Scanner({ video });
  scanner.addListener('scan', function(content) {
    console.log('QR code detected:', content);
    // Redirect to the URL detected by the QR code
    window.location.href = content;
  });

  Instascan.Camera.getCameras()
    .then(function(cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
        alert('No cameras found. Please ensure that your device has a camera.');
      }
    })
    .catch(function(error) {
      console.error('Error accessing cameras:', error);
      alert('Error accessing cameras. Please ensure that your device supports camera access and you have granted necessary permissions.');
    });
});
