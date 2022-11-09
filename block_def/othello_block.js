//ブロック追加時
// Blockly.defineBlocksWithJsonArray([
//   /* ここにJSONファイルの内容をコピー */
// ]);

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
            "4"
          ],
          [
            "6×6",
            "6"
          ],
          [
            "8×8",
            "8"
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

Blockly.Hat['startothello'] = function(block) {
  var dropdown_boardnum = block.getFieldValue('boardnum');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_boardnum === 4){
    var code = [];
    code[0] = [0, 0, 0, 0];
    code[1] = [0, -1, 1, 0];
    code[2] = [0, 1, -1, 0];
    code[3] = [0, 0, 0, 0];
  }else if(dropdown_boardnum === 6){
    var code = [];
    code[0] = [0, 0, 0, 0, 0, 0];
    code[1] = [0, 0, 0, 0, 0, 0];
    code[2] = [0, 0, -1, 1, 0, 0];
    code[3] = [0, 0, 1, -1, 0, 0];
    code[4] = [0, 0, 0, 0, 0, 0];
    code[5] = [0, 0, 0, 0, 0, 0];
  }else if(dropdown_boardnum === 8){
    var code = [];
    code[0] = [0, 0, 0, 0, 0, 0, 0, 0];
    code[1] = [0, 0, 0, 0, 0, 0, 0, 0];
    code[2] = [0, 0, 0, 0, 0, 0, 0, 0];
    code[3] = [0, 0, 0, -1, 1, 0, 0, 0];
    code[4] = [0, 0, 0, 1, -1, 0, 0, 0];
    code[5] = [0, 0, 0, 0, 0, 0, 0, 0];
    code[6] = [0, 0, 0, 0, 0, 0, 0, 0];
    code[7] = [0, 0, 0, 0, 0, 0, 0, 0];
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


//指定した盤面を出力　オセロ盤面の修正が必要
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "positionprint",
    "message0": "盤面 : %1 の状態を出力する %2 出力後の手番 : %3",
    "args0": [
      {
        "type": "input_value",
        "name": "position",
        "check": "Array"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "next",
        "options": [
          [
            "黒",
            "BLACK"
          ],
          [
            "白",
            "WHITE"
          ]
        ]
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
  var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_next = block.getFieldValue('next');
  // TODO: Assemble JavaScript into code variable.
  let code = 'JavaScript' + '"' + '(function(position, color)';
  code += '{ reflectBoard('+value_position+','+dropdown_next+');})"\n';
  code += 'position color ^()'
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
  "previousStatement": null,
  "nextStatement": null,
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

//node
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "node",
    "message0": "node",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "盤面状態とサブノードのリストを持つ",
    "helpUrl": ""
  }]
);
Blockly.JavaScript['node'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//ゲームスタート
Blockly.defineBlocksWithJsonArray([
  /* ここにJSONファイルの内容をコピー */
  {
    "type": "start",
    "message0": "もし %1 ならば %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "黒の番",
            "true"
          ],
          [
            "白の番",
            "false"
          ]
        ]
      },
      {
        "type": "input_statement",
        "name": "turn"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['start'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_turn = Blockly.JavaScript.statementToCode(block, 'turn');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
  /* ここにJSONファイルの内容をコピー */
  {
    "type": "node_create",
    "message0": "ノード生成 %1 position :  %2 listOfPosition :  %3 return node : %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "nodeP",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "nodeL",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "returnNode",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "盤面状態とサブノードのリストを持つノードを生成する",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['node_create'] = function(block) {
  var statements_nodep = Blockly.JavaScript.statementToCode(block, 'nodeP');
  var statements_nodel = Blockly.JavaScript.statementToCode(block, 'nodeL');
  var statements_returnnode = Blockly.JavaScript.statementToCode(block, 'returnNode');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
  /* ここにJSONファイルの内容をコピー */
  {
    "type": "return_nodep",
    "message0": "return node position %1 node :  %2 return position :  %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "arg_node",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "returnPos",
        "align": "RIGHT"
      }
    ],
    "colour": 230,
    "tooltip": "受け取ったノードのpositionを返す",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['return_nodep'] = function(block) {
  var statements_arg_node = Blockly.JavaScript.statementToCode(block, 'arg_node');
  var statements_returnpos = Blockly.JavaScript.statementToCode(block, 'returnPos');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.defineBlocksWithJsonArray([
  /* ここにJSONファイルの内容をコピー */
  {
    "type": "return_nodel",
    "message0": "return node list %1 node :  %2 return list : %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "arg_node",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "return_list",
        "align": "RIGHT"
      }
    ],
    "colour": 230,
    "tooltip": "受け取ったノードのリストを返す",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['return_nodel'] = function(block) {
  var statements_arg_node = Blockly.JavaScript.statementToCode(block, 'arg_node');
  var statements_return_list = Blockly.JavaScript.statementToCode(block, 'return_list');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};