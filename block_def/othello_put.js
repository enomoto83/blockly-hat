Blockly.defineBlocksWithJsonArray(
  //ここにJSONファイルの内容をコピー 
  [{
    "type": "othello_put",
    "message0": "オセロ盤面 : ( %1 %2 , %3 %4 ) に %5 %6 %7 を置く",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "board_x",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "board_y",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "color",
        "options": [
          [
            "黒",
            "black"
          ],
          [
            "白",
            "white"
          ]
        ]
      },
      {
        "type": "input_dummy"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);


Blockly.JavaScript['othello_put'] = function(block) {
  var value_board_x = Blockly.JavaScript.valueToCode(block, 'board_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_board_y = Blockly.JavaScript.valueToCode(block, 'board_y', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = 'firstCheck(value_board_x,value_board_y,dropdown_color);\n';
  return code;
};