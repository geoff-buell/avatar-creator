// Version One
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('select-btn').addEventListener('click', getOption);

  let features, featuresOption, optionNumber, elements;

  // Grabs feature to be customized
  function getOption(e) {
    e.preventDefault(); // Don't want button to submit
    features = document.getElementById('features');
    featuresOption = features.options[features.selectedIndex].value;
    optionNumber = 1;
    elements = document.querySelectorAll('.'+featuresOption+'-'+optionNumber);
    const output = document.querySelector('.output');
    // Corrects output to proper format/grammar
    if (featuresOption.charAt(featuresOption.length - 1) === 's') {
      output.innerHTML = featuresOption.charAt(0).toUpperCase() +
      featuresOption.slice(1) + ' are currently selected.';
    } else {
      output.innerHTML = featuresOption.charAt(0).toUpperCase() +
      featuresOption.slice(1) + ' is currently selected.';
    }
  }
  // Setting up so user can click arrow divs or just use arrow keys
  // const upArrow = document.getElementById('up-arrow');
  // const downArrow = document.getElementById('down-arrow');
  // const leftArrow = document.getElementById('left-arrow');
  // const rightArrow = document.getElementById('right-arrow');

  // upArrow.addEventListener('click', clickChanges); 
  // downArrow.addEventListener('click', clickChanges);
  // leftArrow.addEventListener('click', clickChanges);
  // rightArrow.addEventListener('click', clickChanges);

  // // const arrows = document.querySelectorAll('.arrow');
  // // for (i = 0; i < arrows.length; i++) {
  // //   arrows[i].addEventListener('click', clickChanges);
  // // }

  // function clickChanges() {
  //   switch(arrowsArray) {
  //     case [0]:
  //       console.log('huh');
  //       break;
  //   }
  // }

  document.addEventListener('keyup', keyChanges);

  // This controls looping through options
  // 2 things I want to change: first is setting up code so it doesn't matter how many
  // options or colors there are. Second is stopping the glitch when going back to a 
  // feature after you've already messed with it.
  function keyChanges(e) {
    switch(e.keyCode) {
      // First 2 - up and down - change colors
      case 38:
        if (colorsIndex < 12) { // colorIndex is defined under the colors object
          colorsIndex++;
        } else if (colorsIndex === 12) {
          colorsIndex = 0;
        } 
        changeColor();
        break;

      case 40:
        if (colorsIndex > 0) {
          colorsIndex--;
        } else if (colorsIndex === 0) {
          colorsIndex = 12;
        }
        changeColor();
        break;
      // Second 2 - left and right - change styles  
      case 39:
        elements.forEach(div => div.style.display = 'none');
        if (optionNumber < 7) {
          optionNumber++;
        } else if (optionNumber === 7) {
          optionNumber = 1;
        }  
        elements = document.querySelectorAll('.'+featuresOption+'-'+optionNumber);
        elements.forEach(div => div.style.display = 'block');
        changeColor();
        break;

      case 37:
        elements.forEach(div => div.style.display = 'none');
        if (optionNumber > 1) {
          optionNumber--;
        } else if (optionNumber === 1) {
          optionNumber = 7;
        }  
        elements = document.querySelectorAll('.'+featuresOption+'-'+optionNumber);
        elements.forEach(div => div.style.display = 'block');
        changeColor();
        break;
    }
  }
  // Color object containing hex color options for different features
  const colors = {
    hair: [
      '#263238', '#546E7A', '#4E342E', '#BF360C', '#E65100', 
      '#FDD835', '#FFEE58', '#E0E0E0', '#FAFAFA', '#FF4081', 
      '#00B0FF', '#00C853', '#D500F9'
    ],
    face: [ 
      '#FDEFE5', '#FDE7DD', '#FBDDCF', '#FBD4C5', '#FDC5B1', 
      '#F1DCB7', '#ECCEA2', '#ECBE83', '#D19556', '#925743', 
      '#7F4B3C', '#6B3F34', '#523530', 
    ],
    glasses: [
      '#212121', '#4E342E', '#FF5722', '#FFA726', '#FFEB3B', 
      '#4CAF50', '#00B0FF', '#304FFE', '#651FFF', '#D500F9', 
      '#E91E63', '#D50000', '#795548'
    ],
    eyes: [
      '#263228', '#546E7A', '#4E342E', '#33691E', '#006064', 
      '#0D47A1', '#2196F3', '#D500F9', '#F50057', '#D50000', 
      '#FFC107', '#00E676', '#CFD8DC'
    ],
    nose: [ 
      '#F1AF99', '#F2C1AD', '#FCE1D5', '#F6D1BE', '#F1B3A4', 
      '#F19D9A', '#A8896D', '#9A7863', '#8C6B57', '#7D5D4B', 
      '#6B4F42', '#5E453C', '#AA6666'
    ],
    mouth: [ 
      '#AA6666', '#995566', '#804040', ' #50161A', '#2C0000',
      '#880E4F', '#311B92', '#0D47A1', '#B71C1C', '#004D40',
      '#33691E', '#4A148C', '#212121'
    ],
    jewelry: [
      '#A67D01', '#CFAB38', '#F8F0C9', '#F6F9FC', '#C8CACA',
      '#A9AAAE', '#CD8E97', '#E3AEB1', '#B76B79', '#A85D6E',
      '#033F63', '#028090', '#02C39A'
    ],
    body: [
      '#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE',
      '#2962FF', '#00B8D4', '#00BFA5', '#64DD17', '#FFD600', 
      '#FF6D00', '#212121', '#607D8B'
    ]
  };
  // Set color index at the beginning - used in changeColor()
  let colorsIndex = 0;
  // Specific features that need to be altered differently from elements variable current value
  const face = document.getElementById('face-one');
  const ears = document.querySelectorAll('.ears');
  const neck = document.getElementById('neck');
  const glassesBridge = document.querySelectorAll('.bridge');
  const tongue = document.querySelectorAll('.tongue');
  const teeth = document.querySelectorAll('.teeth');
  const sclera = document.querySelectorAll('.sclera');
  const earrings = document.querySelectorAll('.earrings');
  const earringHoops = document.querySelectorAll('.earrings-hoop');
  const earringGauges = document.querySelectorAll('.earrings-gauge');
  const necklace = document.querySelectorAll('.necklace');
  const necklaceLeft = document.querySelectorAll('.left-necklace');
  const necklaceRight = document.querySelectorAll('.right-necklace');
  const necklaceShapes = document.querySelectorAll('.necklace-shape');
  const necklaceTriangles = document.querySelectorAll('.necklace-triangle');
  const clothingStripes = document.getElementById('stripes');
  const clothingGradient = document.getElementById('gradient');
  const businessJacket = document.querySelectorAll('.jacket');
  const cape = document.querySelectorAll('.cape');

  // Called in keyChanges()
  function changeColor() {
    switch(featuresOption) {

      case 'hair':
        elements.forEach(div => div.style.backgroundColor = colors.hair[colorsIndex]);
        break;

      case 'face':
        elements.forEach(div => div.style.backgroundColor = colors.face[colorsIndex]);
        ears.forEach(div => div.style.backgroundColor = colors.face[colorsIndex]);
        neck.style.backgroundColor = colors.face[colorsIndex];
        break;

      case 'glasses':
        elements.forEach(div => div.style.borderColor = colors.glasses[colorsIndex]);
        glassesBridge.forEach(div => div.style.backgroundColor = colors.glasses[colorsIndex]);
        break;

      case 'eyebrows':
        elements.forEach(div => div.style.backgroundColor = colors.hair[colorsIndex]);
        break;   

      case 'eyes':
        elements.forEach(div => div.style.backgroundColor = colors.eyes[colorsIndex]);
        sclera.forEach(div => div.style.backgroundColor = '#FFFFFF');
        break; 

      case 'ears':
        elements.forEach(div => div.style.backgroundColor = colors.face[colorsIndex]);
        face.style.backgroundColor = colors.face[colorsIndex];
        neck.style.backgroundColor = colors.face[colorsIndex];
        break;

      case 'nose':
        elements.forEach(div => div.style.backgroundColor = colors.nose[colorsIndex]);
        break;

      case 'mouth':
        elements.forEach(div => div.style.backgroundColor = colors.mouth[colorsIndex]);
        tongue.forEach(div => div.style.backgroundColor = '#F48FB1');
        teeth.forEach(div => div.style.backgroundColor = '#FFFFFF');
        break;

      case 'blush':
        elements.forEach(div => div.style.backgroundColor = colors.nose[colorsIndex]);
        break;

      case 'facial-hair':
        elements.forEach(div => div.style.backgroundColor = colors.hair[colorsIndex]);
        break; 

      case 'earrings':
        earrings.forEach(div => div.style.backgroundColor = colors.jewelry[colorsIndex]); 
        
        earringHoops.forEach(div => div.style.boxShadow = '0px -2px' + 
          colors.jewelry[colorsIndex]);
        
        earringGauges.forEach(div => div.style.boxShadow = '0px 0px 0px 2px inset' + 
          colors.jewelry[colorsIndex]);
        
        break;

      case 'necklace':
        necklace.forEach(div => div.style.boxShadow = '0px 1px' + 
          colors.jewelry[colorsIndex]);
        
        necklaceLeft.forEach(div => div.style.boxShadow = '-1px 0px' + 
          colors.jewelry[colorsIndex]);
        
        necklaceRight.forEach(div => div.style.boxShadow = '1px 0px' + 
          colors.jewelry[colorsIndex]);
        
        necklaceShapes.forEach(div => div.style.backgroundColor = colors.jewelry[colorsIndex]);
        
        necklaceTriangles.forEach(div => div.style.borderTop = '7px solid' + 
          colors.jewelry[colorsIndex]);
        
        break; 

      case 'body':
        elements.forEach(div => div.style.backgroundColor = colors.body[colorsIndex]);

        businessJacket.forEach(div => div.style.backgroundColor = '#000000');
        
        cape.forEach(div => div.style.backgroundColor = '#000000');
        
        clothingGradient.style.background = 'linear-gradient(65deg,' + 
          colors.body[colorsIndex] + ',' + 
          colors.body[colorsIndex + 1] + ')';

        break;                
    }
  }
});

