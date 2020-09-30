function updateForm(){
  // call your form and connect to your desired drop-down item
  var form = FormApp.openById("YOUR FORM ID");
  var itemList = form.getItemById("YOUR ITEM ID").asListItem();


  // identify the sheet where the data resides 
  var ss = SpreadsheetApp.getActive();
  var items = ss.getSheetByName("SHEET NAME");

  // grab the values from the first column of the sheet (set the first parameter to 2 to skip header row)
  var itemValues = items.getRange(1, 1, names.getMaxRows() - 1).getValues();

  var itemNames = [];

  // convert the array ignoring empty cells
  for(var i = 0; i < itemValues.length; i++)   
    if(itemValues[i][0] != "")
      itemNames[i] = itemValues[i][0];

  // populate form with the array data
  itemList.setChoiceValues(itemNames);
 }
