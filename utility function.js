function convertCard (cardObject) {
  let cardString = '<div class="card">';
      cardString = card1String + '<img class="card-img-top" src="' + cardObject.src +  '" />';
      cardString = card1String + '<div class="card body">';
      cardString = card1String + '<h3 class="card-title">' + cardObject.title + '</h3>';
      cardString = card1String + cardObject.description;
      cardString = card1String + '</div>';
      card1String = card1String + '</div>';
      return card1String;
  }