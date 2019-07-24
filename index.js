function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet >= 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  case 'generous':
    response = 'Thank you so much." if the tip is generous';
    break;
  case 'not as generous':
    response = 'Thank you.';
    break;
  default:
    response = 'Bye.';
}
