function indexfun() {
    var i;
    var j;
    var flag = false;
    var count = 0;
    var word = document.getElementsByName('word');
    var texts = document.getElementsByName('texts');

    //判断有没有完成试卷
    for(var a=0;a<4;a++){
        if(word[a].value == ""){
            flag = true;
        }
    }
    if(flag){
        alert("请完成填空题！！");
        flag = false;
    }

    for(i=0;i<4;i++){
        if($("input[name = 'optionsRadios']")[i].checked){
            flag = true;
        }
    }
    if(!flag){
        alert("请将选择题完成！！");
        flag = false;
    }

    for(j=0;j<4;j++){
        if($("input[name = 'optionsRadioss']").checked){
            flag = true;
        }
    }
    if(!flag){
        alert("请将选择题完成！！");
        flag = false;
    }

    for(var n=0;n<4;n++){
        if($("input[name = 'checkmore1']")[n].checked){
            flag = true;
        }
    }
    if(!flag){
        alert("请将多选题完成！！");
        flag = false;
    }

    for(var m=0;m<4;m++){
        if($("input[name = 'checkmore2']")[m].checked){
            flag = true;
        }
    }
    if(!flag){
        alert("请将多选题完成！！");
        flag = false;
    }

    for(var b=0;b<2;b++){
        if($("input[name = 'choose1']")[b].checked){
            flag = true;
        }
    }
    if(!flag){
        alert("请将判断题完成！！");
        flag = false;
    }

    for(var s=0;s<2;s++){
        if($("input[name = 'choose2']")[s].checked){
            flag = true;
        }
    }
    if(!flag){
        alert("请将判断题完成！！");
        flag = false;
    }

    if(texts[0].value == ""){
        alert("请完成简答题！！");
    }

    //对比答案
    if($("input[id='chi1']").val("统一建模语言")){
        count += 5;
    }
    if($("input[id='chi2']").val("封装性")){
        count += 5;
    }
    if($("input[id='chi1']").val("继承性")){
        count += 5;
    }
    if($("input[id='chi1']").val("多态性")){
        count += 5;
    }

    if($("input[name = 'optionsRadios']")[1].checked){
        count += 10;
    }
    if($("input[name = 'optionsRadioss']")[0].checked){
        count += 10;
    }
    if($("input[name = 'checkmore1']")[0].checked && $("input[name = 'checkmore1']")[1].checked && $("input[name = 'checkmore1']")[3].checked){
        count += 10;
    }
    if($("input[name = 'checkmore2']")[0].checked && $("input[name = 'checkmore2']")[1].checked && $("input[name = 'checkmore2']")[2].checked){
        count += 10;
    }
    if($("input[name='choose1']")[1].checked){
        count += 10;
    }
    if($("input[name='choose2']")[0].checked){
        count += 10;
    }
    if($("textarea[name='texts']").val("模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式，可以是物理实体；可以是某种图形；或者是一种数学表达形式。")){
        count += 20;
    }
    alert(count);


};

