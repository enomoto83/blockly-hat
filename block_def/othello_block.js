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
    "previousStatement": null,
    "nextStatement": null,
    "colour": 165,
    "tooltip": "中央(2×2)に並べられている情報を持つ配列",
    "helpUrl": ""
  }]
);

Blockly.Hat['startothello'] = function(block) {
  var dropdown_boardnum = block.getFieldValue('boardnum');
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript' + '"' + '(function(num)';
  code += '{ hatStart('+ dropdown_boardnum +');})"\n';
  code += 'num ^()'

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


//指定した盤面を出力　オセロ盤面の修正が必要
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "positionprint",
    "message0": "盤面 : %1 を出力する %2 出力後の手番 : %3",
    "args0": [
      {
        "type": "input_statement",
        "name": "position"
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
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
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['positionprint'] = function(block) {
  var statements_position = Blockly.Hat.statementToCode(block, 'position');
  var dropdown_next = block.getFieldValue('next');
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript' + '"' + '(function(position, color)';
  code += '{ reflectBoard('+ statements_position +','+dropdown_next+');})"\n';
  code += 'position color ^()'
  console.log(code);
  return code;
};



//moves定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "moves",
    "message0": "moves : position -> listof position %1 引数 :  %2",// 戻り値 : %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "list_name",
        "check": "Array"
      // },
      // {
      //   "type": "input_statement",
      //   "name": "returnlist",
      //   "check": "Array"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "output": null,
    "colour": 230,
    "tooltip": "次に取り得る盤面のリストを返す",
    "helpUrl": ""
  }]
);
Blockly.Hat['moves'] = function(block) {
  var statements_list_name = Blockly.Hat.statementToCode(block, 'list_name');
  var statements_returnlist = Blockly.Hat.statementToCode(block, 'returnlist');
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript' + '"' + '(function(position)';
  code += '{ canPut('+ statements_list_name +');})"\n';
  code += 'position ^(' + statements_returnlist + ')'
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
Blockly.Hat['position'] = function(block) {
  let code = 'JavaScript' + '"' + '(function()';
  code += '{ returnPosition();})"\n';
  code += '^()'
  return code;
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
Blockly.Hat['map'] = function(block) {
  var statements_map_function = Blockly.Hat.statementToCode(block, 'map_function');
  // TODO: Assemble Hat into code variable.
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
Blockly.Hat['static'] = function(block) {
  var statements_arg = Blockly.Hat.statementToCode(block, 'arg');
  var statements_return = Blockly.Hat.statementToCode(block, 'return');
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript' + '"' + '(function(position num)';
  code += '{ staticBoard('+ statements_arg +');})"\n';
  code += 'position ^(' + statements_return +')'
  return code;
};


//max定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "max",
    "message0": "max : リストの最大値を返す %1 引数 :  %2",// 戻り値 :  %3
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "list_arg",
        "check": "Array"
       },
      // {
      //   "type": "input_statement",
      //   "name": "list_return",
      //   "check": "Number"
      // }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "受け取ったリストの最大値を返す",
    "helpUrl": ""
  }]
);
Blockly.Hat['max'] = function(block) {
  var statements_list_arg = Blockly.Hat.statementToCode(block, 'list_arg');
  var statements_list_return = Blockly.Hat.statementToCode(block, 'list_return');
  // TODO: Assemble Hat into code variable.
  var code = '...;\n';
  return code;
};


//min定義
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "min",
    "message0": "min : リストの最小値を返す %1 引数 :  %2",// 戻り値 :  %3
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "list_arg",
        "check": "Array"
      }
      // ,
      // {
      //   "type": "input_statement",
      //   "name": "list_return",
      //   "check": "Number"
      // }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['min'] = function(block) {
  var statements_list_arg = Blockly.Hat.statementToCode(block, 'list_arg');
  var statements_list_return = Blockly.Hat.statementToCode(block, 'list_return');
  // TODO: Assemble Hat into code variable.
  var code = '...;\n';
  return code;
};

//合成関数ブロック
Blockly.defineBlocksWithJsonArray(
  /* ここにJSONファイルの内容をコピー */
  [{
    "type": "function_composition",
    "message0": "合成関数  %1 f : %2 g : %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "arg1",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "arg2",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "output": null,
    "colour": 230,
    "tooltip": "合成関数 : (f . g) h = f (g . h) ",
    "helpUrl": ""
  }]
);
Blockly.Hat['function_composition'] = function(block) {
  var value_arg1 = Blockly.Hat.statementToCode(block, 'arg1');
  var value_arg2 = Blockly.Hat.statementToCode(block, 'arg2');
  // TODO: Assemble Hat into code variable.
  var code = "";
  code += '(^(h) (' + value_arg2 + ') ' + 'h ^(gh) \n';
  code += '(' +value_arg1 + ') gh)'
  // TODO: Change ORDER_NONE to the correct strength.
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
Blockly.Hat['node'] = function(block) {
  // TODO: Assemble Hat into code variable.
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

Blockly.Hat['start'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_turn = Blockly.Hat.statementToCode(block, 'turn');
  // TODO: Assemble Hat into code variable.
  var code = '...;\n';
  return code;
};

//ノード生成
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

Blockly.Hat['node_create'] = function(block) {
  var statements_nodep = Blockly.Hat.statementToCode(block, 'nodeP');
  var statements_nodel = Blockly.Hat.statementToCode(block, 'nodeL');
  var statements_returnnode = Blockly.Hat.statementToCode(block, 'returnNode');
  // TODO: Assemble Hat into code variable.
  let code = 'node' + statements_nodep + statements_nodel + statements_returnnode + '\n';
  return code;
};

//nodeのpを取り出す
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
//ゼミ確認
Blockly.Hat['return_nodep'] = function(block) {
  var statements_arg_node = Blockly.Hat.statementToCode(block, 'arg_node');
  var statements_returnpos = Blockly.Hat.statementToCode(block, 'returnPos');
  // TODO: Assemble Hat into code variable.
  let code = 'getp' + statements_arg_node + statements_returnpos + '\n';
  return code;
};


//nodeのlを取り出す
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

//ゼミ確認
Blockly.Hat['return_nodel'] = function(block) {
  var statements_arg_node = Blockly.Hat.statementToCode(block, 'arg_node');
  var statements_return_list = Blockly.Hat.statementToCode(block, 'return_list');
  // TODO: Assemble Hat into code variable.
  let code = 'getl' + statements_arg_node + statements_return_list + '\n';
  return code;
};