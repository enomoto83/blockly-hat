//作成、変更ファイル

//call_def_func,call_func_andarg->call_def_func2,call_func_andarg2に統合

// // // 定義した関数を有効化
// Blockly.Blocks.call_def_func = {
//     init() {
//         this.jsonInit({
//             type: "variables_set_number",
//             message0: "1呼び出し %1 戻り値 %2 %3",
//             args0: [{
//                     type: "input_value",
//                     name: "call"
//                 },
//                 {
//                     type: "input_statement",
//                     name: "return"
//                 },
//                 {
//                     type: "field_input",
//                     name: "yield",
//                     text: ""
//                 }
//             ],
//             previousStatement: null,
//             nextStatement: null,
//             colour: 250,
//             tooltip: "",
//             helpUrl: "",
//             extensions: ["contextMenu_variableSetterGetter"]
//         });
//     },
// };

// Blockly.Hat.call_def_func = function (block) {
//     let period = "";
//     const call = Blockly.Hat.statementToCode(block, 'call', Blockly.Hat.ORDER_FUNCTION_CALL);
//     const order_return = Blockly.Hat.statementToCode(block, 'return', Blockly.Hat.ORDER_FUNCTION_CALL);
//     if (order_return != "")
//         period = " ";
//     return call + period + order_return + ")";
// };



// 関数の呼び出し
Blockly.Blocks.call_def_func2 = {
    init() {
        this.jsonInit({
            type: "variables_set_number",
            message0: "2呼び出し %1 戻り値 %2 %3",
            args0: [{
                    type: "input_value",
                    name: "call"
                },
                {
                    type: "input_statement",
                    name: "return"
                },
                {
                    type: "field_input",
                    name: "return",
                    text: ""
                }
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 250,
            tooltip: "",
            helpUrl: "",
            extensions: ["contextMenu_variableSetterGetter"]
        });
    },
};

Blockly.Hat.call_def_func2 = function (block) {
    const call = Blockly.Hat.statementToCode(block, 'call', Blockly.Hat.ORDER_FUNCTION_CALL);
    const order_return = Blockly.Hat.statementToCode(block, 'return', Blockly.Hat.ORDER_FUNCTION_CALL);
    let return_code = order_return;
    if (order_return != ""){
        return_code = "^(";
        return_code += order_return;
        return_code += ")";
    }
    return call + return_code + "\n";
};
// f head_list x ^(x2)


// // //関数と引数
// Blockly.Blocks.call_func_andarg = {
//     init() {
//         this.jsonInit({
//             type: "print",
//             message0: "1関数名 %1 %2 引数 %3",
//             args0: [{
//                     type: "field_input",
//                     name: "func_name",
//                     text: "func",
//                 },
//                 {
//                     type: "input_dummy"
//                 },
//                 {
//                     type: "input_statement",
//                     name: "arg"
//                 }
//             ],
//             output: null,
//             colour: 250,
//             tooltip: "",
//             helpUrl: ""
//         });
//     },
// };

// Blockly.Hat.call_func_andarg = function (block) {
//     const func_name = block.getFieldValue('func_name');
//     const arg = Blockly.Hat.statementToCode(block, 'arg', Blockly.Hat.ORDER_FUNCTION_CALL)

//     // 数値の長さを判定し、配列に分割した後にHat形式で出力
//     const nums = arg.split(' ');
//     const nums_length = nums.length

//     // 入力された数値の整列
//     let temporary_num = '';
//     let n = 0;
//     while (n <= nums_length - 2) { // 配列の最後のメモリが空白になるので-1で調整
//         temporary_num += nums[n] + " ";
//         n++;
//     }

//     let OPERATOR = "(defineCPS "
//     OPERATOR += func_name;
//     OPERATOR += " ^(";
//     OPERATOR += temporary_num
//     return OPERATOR;
// };



Blockly.Blocks.call_func_andarg2 = {
    init() {
        this.jsonInit({
            type: "print",
            message0: "2関数名 %1 %2 引数 %3",
            args0: [{
                    type: "field_input",
                    name: "func_name",
                    text: "func",
                },
                {
                    type: "input_dummy"
                },
                {
                    type: "input_statement",
                    name: "arg"
                }
            ],
            output: null,
            colour: 250,
            tooltip: "",
            helpUrl: ""
        });
    },
};

Blockly.Hat.call_func_andarg2 = function (block) {
    const func_name = block.getFieldValue('func_name');
    const arg = Blockly.Hat.statementToCode(block, 'arg', Blockly.Hat.ORDER_FUNCTION_CALL)

    // 数値の長さを判定し、配列に分割した後にHat形式で出力
    const nums = arg.split(' ');
    const nums_length = nums.length

    // 入力された数値の整列
    let temporary_num = '';
    let n = 0;
    while (n <= nums_length - 2) { // 配列の最後のメモリが空白になるので-1で調整
        temporary_num += nums[n] + " ";
        n++;
    }

    let OPERATOR = func_name;
    switch(mode){
    case 1: // call
        return OPERATOR + temporary_num;
    case 2: // define
        return OPERATOR + " ^(" + temporary_num +")\n"
    }
    /*
    OPERATOR += temporary_num
    return OPERATOR;
    */
};