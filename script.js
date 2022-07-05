// progressBar
let progressCircle = document.querySelector('#progress-circle');
let currentTextLength = document.querySelector('#current-text-length').innerText;

let progressValue = 0;
let progressEndVlue = 65;
let speed = 5;

progressCircle.style.background = ''+
'conic-gradient(' +
    '#000 ' + (currentTextLength * 3.6) + 'deg,' + // 360° 中の 3.6° とは、つまり 1/100(1%)
    '#fff ' + (currentTextLength * 3.6) + 'deg ' + // 360° 中の 3.6° とは、つまり 1/100(1%)
')'

// let progress = setInterval(() => {
//   progressValue++;

//   progressCircle.style.background = ''+
//     'conic-gradient(' +
//         '#4d5bf9 ' + (progressValue * 3.6) + 'deg,' + // 360° 中の 3.6° とは、つまり 1/100(1%)
//         '#cadcff ' + (progressValue * 3.6) + 'deg ' + // 360° 中の 3.6° とは、つまり 1/100(1%)
//     ')'

//   if(progressValue == progressEndVlue) {
//     clearInterval(progress);
//   }
// }, 2000)