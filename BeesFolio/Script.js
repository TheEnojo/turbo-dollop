

  document.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
  
    // Use GSAP for smoother animations
    gsap.to('#shape1', { duration: 0.5, attr: { d: getBlobPath(scrollTop) }, scale: 1 + scrollTop * 0.002 });
    gsap.to('#shape2', { duration: 0.5, attr: { d: getBlobPath(scrollTop + 200) }, scale: 1 + (scrollTop + 200) * 0.002 });
    // Add more animations for additional shapes
  
  });
  
  // Function to generate blob path based on scroll position
  function getBlobPath(scrollTop) {
    // Modify this function to generate different blob shapes
    return `M50 ${10 + scrollTop * 0.1}C63.11 ${10 + scrollTop * 0.1} 74 ${20.89 + scrollTop * 0.1} 74 ${34 + scrollTop * 0.1}S63.11 ${58 + scrollTop * 0.1} 50 ${58 + scrollTop * 0.1}S26 ${47.11 + scrollTop * 0.1} 26 ${34 + scrollTop * 0.1}S36.89 ${10 + scrollTop * 0.1} 50 ${10 + scrollTop * 0.1}z`;
  }
  
// Initialize GSAP
gsap.registerPlugin(MotionPathPlugin);

document.addEventListener('scroll', function () {
  // Use window.requestAnimationFrame for smoother performance
  window.requestAnimationFrame(handleScroll);
});

function handleScroll() {
  let scrollTop = window.scrollY;

  // Use GSAP for smoother animations
  gsap.to('#shape1', { duration: 0.5, motionPath: { path: getBlobPath(scrollTop), align: '#shape1' }, scale: 1 + scrollTop * 0.002 });
  gsap.to('#shape2', { duration: 0.5, motionPath: { path: getBlobPath(scrollTop + 200), align: '#shape2' }, scale: 1 + (scrollTop + 200) * 0.002 });
  // Add more animations for additional shapes
}

// Function to generate blob path based on scroll position
function getBlobPath(scrollTop) {
  // Modify this function to generate different blob shapes
  return `M50 ${10 + scrollTop * 0.1}C63.11 ${10 + scrollTop * 0.1} 74 ${20.89 + scrollTop * 0.1} 74 ${34 + scrollTop * 0.1}S63.11 ${58 + scrollTop * 0.1} 50 ${58 + scrollTop * 0.1}S26 ${47.11 + scrollTop * 0.1} 26 ${34 + scrollTop * 0.1}S36.89 ${10 + scrollTop * 0.1} 50 ${10 + scrollTop * 0.1}z`;
}
