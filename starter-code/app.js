$(() => {
 
    // GIVEN TODOS ARRAY - DO NOT ERASE!
   const givenToDos = [
     'buy some sand',
     'comb the unicorn',
     'brush my fang',
     'water the hardwoods'
   ]
  
  // const $toDoItem = $('.to-do-item');
  // const $toDoDiv = ('<div class = "to-do-item" >');

  //Part 1
  const presentToDos =() => {
    for (let i= 0; i < givenToDos.length; i++){
      //print text of i in a button 
      //GivenTo-Dos should each be in a new div and need to be separate from button (add h3 property)
      //the below constants didn't work out of function so have to add to the input function too
      const $toDoDiv = $('<div>').addClass("to-do-item");
      const $item = $('<h3>').text(givenToDos[i])
      const $button = $('<button>').text("completed");
      $('#to-do-list').append($toDoDiv);
      $toDoDiv.append($item);
      $button.insertAfter($item);
      // $toDoDiv += givenToDos[i]; -- didn't work
      // $toDoItemClass.append($button); -- didn't work
      // console.log($toDoDiv);
    }
  }
  presentToDos()
  //Part 2
  //need a new constant for the add Button (with ID property of #submit)
  //need a new constant for the input text (scope - in function) - this needs to show the value of whatever was typed into the box

  const $addButton = $('#submit')
  const addToDo = (evt) => {
    //from internet to prevent input text from disapearing
    evt.preventDefault();
    const $input = $('#input-box').val()
    //add input value as text to the $item (had to restate variables below)
    const $toDoDiv = $('<div>').addClass("to-do-item");
    const $itemNew = $('<h3>').text($input)
    const $button = $('<button>').addClass('completeButton').text("completed");
    $('#to-do-list').append($toDoDiv);
    $toDoDiv.append($itemNew);
    $button.insertAfter($itemNew);
  }
  $addButton.on('click', addToDo)

  //Part 3
  //need to move items to 'done' column
  //include event listener for the 'completed button' to do this

  //button was scoped in functions so created a new variable outside (so it could be called)
  const $button = $('<button>').addClass('completeButton').text("completed");

  // const $input = $('#input-box').val()
  // // //add input value as text to the $item (had to restate variables below)
  const $toDoDiv = $('<div>').addClass("to-do-item");
  // const $itemNew = $('<h3>').text($input)
  // $('#to-do-list').append($toDoDiv);
  // $toDoDiv.append($itemNew); - didn't work out of scope
  // $button.insertAfter($itemNew); - didn't work out of scope
  const $completeButton = $('.completeButton')
  const $completeId = $('#completed')

  // });
//didn't work when I tried it with the same method as the $addToDo function above.
//Therefore, I tried it a different way for the 2 functions below.
$(document).on('click', '.completeButton', function(event){
    $(this).removeClass('completeButton');
    $(this).addClass('done');
    $(this).text('remove');
    const $toDoDiv = $(event.currentTarget).parent();
    $toDoDiv.detach().appendTo($completeId);
    // presentToDos() = $(event.currentTarget).parent();
    // presentToDos.detach().appendTo($completeId); - cant push array to new column
  })

const $removeButton = $('.done')
const $itemNew = $('<h3>').text()

$(document).on('click', '.done', function(event){
  const $itemNew = $(event.currentTarget).parent();
  $(this).remove();
  $itemNew.remove();
})

// the one below didnt work
// const removeItem = (event) =>{
//   const $toDoDiv = $(event.currentTarget).parent();
//   $toDoDiv.remove()
// }
// $removeButton.on('click', removeItem)
  });

