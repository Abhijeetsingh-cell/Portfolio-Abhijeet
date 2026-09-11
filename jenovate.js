function playProjectVideo() {
  const container = document.getElementById('mediaSwap');

  container.innerHTML = `
    <video
      src="Jenovate-Video(1).mp4"
      controls
      autoplay
      playsinline
      style="width:100%;">
    </video>
  `;
}
