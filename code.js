// Version Two
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('features').addEventListener('change', getOption);

  let features, featuresOption, optionNumber, elements;

  // Grabs feature to be customized
  function getOption() {
    features = document.getElementById('features');
    featuresOption = features.options[features.selectedIndex].value;
    optionNumber = 1;
    elements = document.querySelectorAll(`.${featuresOption}-${optionNumber}`);
  }

  // Setting up so user can click arrows
  const upArrow = document.getElementById('up-arrow');
  const downArrow = document.getElementById('down-arrow');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  upArrow.addEventListener('mouseenter', () => {
    upArrow.style.background = '#184C51';
    upArrow.style.color = '#FFF';
  });
  upArrow.addEventListener('mouseleave', () => {
    upArrow.style.background = 'none';
    upArrow.style.color = '#184C51';
  });
  upArrow.addEventListener('click', () => {
    if (colorsIndex < 12) { // colorIndex is defined under the colors object
      colorsIndex++;
    } else if (colorsIndex === 12) {
      colorsIndex = 0;
    } 
    changeColor();
  }); 

  downArrow.addEventListener('mouseenter', () => {
    downArrow.style.background = '#184C51';
    downArrow.style.color = '#FFF';
  });
  downArrow.addEventListener('mouseleave', () => {
    downArrow.style.background = 'none';
    downArrow.style.color = '#184C51';
  });
  downArrow.addEventListener('click', () => {
    if (colorsIndex > 0) {
      colorsIndex--;
    } else if (colorsIndex === 0) {
      colorsIndex = 12;
    }
    changeColor();
  });

  rightArrow.addEventListener('mouseenter', () => {
    rightArrow.style.background = '#184C51';
    rightArrow.style.color = '#FFF';
  });
  rightArrow.addEventListener('mouseleave', () => {
    rightArrow.style.background = 'none';
    rightArrow.style.color = '#184C51';
  });
  rightArrow.addEventListener('click', () => {
    elements.forEach(div => div.style.display = 'none');
    if (optionNumber < 7) {
      optionNumber++;
    } else if (optionNumber === 7) {
      optionNumber = 1;
    }  
    elements = document.querySelectorAll(`.${featuresOption}-${optionNumber}`);
    elements.forEach(div => div.style.display = 'block');
    changeColor();
  });

  leftArrow.addEventListener('mouseenter', () => {
    leftArrow.style.background = '#184C51';
    leftArrow.style.color = '#FFF';
  });
  leftArrow.addEventListener('mouseleave', () => {
    leftArrow.style.background = 'none';
    leftArrow.style.color = '#184C51';
  });
  leftArrow.addEventListener('click', () => {
    elements.forEach(div => div.style.display = 'none');
    if (optionNumber > 1) {
      optionNumber--;
    } else if (optionNumber === 1) {
      optionNumber = 7;
    }  
    elements = document.querySelectorAll(`.${featuresOption}-${optionNumber}`);
    elements.forEach(div => div.style.display = 'block');
    changeColor();
  });

  // Highlights arrow btns on screen when using arrow keys
  function highlight(obj){
    obj.style.background = '#184C51';
    obj.style.color = '#FFF';
    setTimeout(function(){
        obj.style.background = 'none';
        obj.style.color = '#184C51';
    }, 150);
  }
  
  // Setting up so user can use keyboard
  document.addEventListener('keydown', keyChanges);
  // This controls looping through options
  function keyChanges(e) {
    switch(e.keyCode) {
      // First 2 - up and down - change colors
      case 38:
        e.preventDefault();
        highlight(upArrow);
        if (colorsIndex < 12) { // colorIndex is defined under the colors object
          colorsIndex++;
        } else if (colorsIndex === 12) {
          colorsIndex = 0;
        } 
        changeColor();
        break;

      case 40:
        e.preventDefault();
        highlight(downArrow);
        if (colorsIndex > 0) {
          colorsIndex--;
        } else if (colorsIndex === 0) {
          colorsIndex = 12;
        }
        changeColor();
        break;
      // Second 2 - left and right - change styles  
      case 39:
        e.preventDefault();
        highlight(rightArrow);
        elements.forEach(div => div.style.display = 'none');
        if (optionNumber < 7) {
          optionNumber++;
        } else if (optionNumber === 7) {
          optionNumber = 1;
        }  
        elements = document.querySelectorAll(`.${featuresOption}-${optionNumber}`);
        elements.forEach(div => div.style.display = 'block');
        changeColor();
        break;

      case 37:
        e.preventDefault();
        highlight(leftArrow);
        elements.forEach(div => div.style.display = 'none');
        if (optionNumber > 1) {
          optionNumber--;
        } else if (optionNumber === 1) {
          optionNumber = 7;
        }  
        elements = document.querySelectorAll(`.${featuresOption}-${optionNumber}`);
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

