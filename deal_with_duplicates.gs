function updateForm(){
  // call your form and connect to the drop-down item
  var form = FormApp.openById("1N0Vg_INdTsFAqJFFAH5PDUmK-pwcTvcksqNUaNutAok");
  
  var namesList = form.getItemById("1345015215").asListItem();


// identify the sheet where the data resides needed to populate the drop-down
  var ss = SpreadsheetApp.getActive();
  var names = ss.getSheetByName("Sheet1");

  // grab the values in the first column of the sheet - use 2 to skip header row
  var namesValues = names.getRange(1, 1, names.getMaxRows() - 1).getValues();

  var studentNames = [];
  var i = 0
  var j = 0

  // convert the array ignoring empty cells
  while (i < namesValues.length){
  var row = namesValues[i][0];
  //var duplicate = False
    if(row != "" && studentNames.indexOf(row)==-1){
        studentNames[j] = row;
        j++            
    } 
  i++
  }
  
  // populate the drop-down with the array data
  namesList.setChoiceValues(studentNames);
} 