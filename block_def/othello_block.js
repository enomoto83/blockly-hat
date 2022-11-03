//ブロック追加時
// Blockly.defineBlocksWithJsonArray(
//   /* ここにJSONファイルの内容をコピー */
// );

//オセロの初期状態配列情報
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "startothello",
    "message0": "オセロ : %1 %2 %3 の初期状態",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "boardnum",
        "options": [
          [
            "4×4",
            "board4"
          ],
          [
            "6×6",
            "board6"
          ],
          [
            "8×8",
            "board8"
          ]
        ]
      },
      {
        "type": "input_dummy"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 165,
    "tooltip": "中央(2×2)に並べられている情報を持つ配列",
    "helpUrl": ""
  }]
);

Blockly.JavaScript['startothello'] = function(block) {
  var dropdown_boardnum = block.getFieldValue('boardnum');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//指定した盤面を出力　オセロ盤面の修正が必要
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "positionprint",
    "message0": "盤面 : %1 を出力する",
    "args0": [
      {
        "type": "input_value",
        "name": "tree",
        "check": "Array"
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
Blockly.JavaScript['positionprint'] = function(block) {
  var value_tree = Blockly.JavaScript.valueToCode(block, 'tree', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


//moves定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "moves",
    "message0": "moves : position -> listof position %1 引数 :  %2 戻り値 : %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "list_name",
        "check": "Array"
      },
      {
        "type": "input_statement",
        "name": "returnlist",
        "check": "Array"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "次に取り得る盤面のリストを返す",
    "helpUrl": ""
  }]
);
Blockly.JavaScript['moves'] = function(block) {
  var statements_list_name = Blockly.JavaScript.statementToCode(block, 'list_name');
  var statements_returnlist = Blockly.JavaScript.statementToCode(block, 'returnlist');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


//position定義　othello.jsのdataに該当
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
[{
  "type": "position",
  "message0": "現在の盤面",
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "現在の盤面の状態を表す配列を返す",
  "helpUrl": ""
}]
);
Blockly.JavaScript['position'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//map定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
[{
  "type": "map",
  "message0": "map :  %1 引数 :  %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "map_function"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]
);
Blockly.JavaScript['map'] = function(block) {
  var statements_map_function = Blockly.JavaScript.statementToCode(block, 'map_function');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//static定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "static",
    "message0": "static : position -> number %1 引数 :  %2 戻り値 :  %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "arg",
        "check": "Array"
      },
      {
        "type": "input_statement",
        "name": "return",
        "check": "Number"
      }
    ],
    "colour": 230,
    "tooltip": "盤面の情報を受け取り受け取り受け取り評価値を返す",
    "helpUrl": ""
  }]
);
Blockly.JavaScript['static'] = function(block) {
  var statements_arg = Blockly.JavaScript.statementToCode(block, 'arg');
  var statements_return = Blockly.JavaScript.statementToCode(block, 'return');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


//max定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "max",
    "message0": "max : リストの最大値を返す %1 引数 :  %2 戻り値 :  %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "list_arg",
        "check": "Array"
      },
      {
        "type": "input_statement",
        "name": "list_return",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "受け取ったリストの最大値を返す",
    "helpUrl": ""
  }]
);
Blockly.JavaScript['max'] = function(block) {
  var statements_list_arg = Blockly.JavaScript.statementToCode(block, 'list_arg');
  var statements_list_return = Blockly.JavaScript.statementToCode(block, 'list_return');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


//min定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "min",
    "message0": "min : リストの最小値を返す %1 引数 :  %2 戻り値 :  %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "list_arg",
        "check": "Array"
      },
      {
        "type": "input_statement",
        "name": "list_return",
        "check": "Number"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.JavaScript['min'] = function(block) {
  var statements_list_arg = Blockly.JavaScript.statementToCode(block, 'list_arg');
  var statements_list_return = Blockly.JavaScript.statementToCode(block, 'list_return');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "function_composition",
    "message0": "%1 . %2 %3",
    "args0": [
      {
        "type": "input_statement",
        "name": "arg1"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "arg2"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "合成関数 : (f . g) h = f (g . h) ",
    "helpUrl": ""
  }]
);
Blockly.JavaScript['function_composition'] = function(block) {
  var value_arg1 = Blockly.JavaScript.statementToCode(block, 'arg1');
  var value_arg2 = Blockly.JavaScript.statementToCode(block, 'arg2');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};