
  function playProjectVideo(){
    const container = document.getElementById('mediaSwap');
    container.innerHTML = `
      <video src="jenovate-video.mp4" controls autoplay playsinline style="width:100%;"></video>
    `;
  }
