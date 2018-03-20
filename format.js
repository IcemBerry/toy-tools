function formatJSON(data) {
    data = data.Node;
    ////level0
    var json = {};
    json.name = data.name;
    json.value = data.ShortName;
    if (data.Children != null) {
        json.children = [];
        for (var i = 0; i < data.Children.length; i++) {
            //level1
            json.children[i] = {};
            json.children[i].name = data.Children[i].name;
            json.children[i].value = data.Children[i].ShortName;
            if (data.Children[i].Children != null) {
                json.children[i].children = [];
                for (var ii = 0; ii < data.Children[i].Children.length; ii++) {
                    //level2
                    json.children[i].children[ii] = {};
                    json.children[i].children[ii].name = data.Children[i].Children[ii].name;
                    json.children[i].children[ii].value = data.Children[i].Children[ii].ShortName;
                    if (data.Children[i].Children[ii].Children != null) {
                        json.children[i].children[ii].children = [];
                        for (var iii = 0; iii < data.Children[i].Children[ii].Children.length; iii++) {
                            //level3
                            json.children[i].children[ii].children[iii] = {};
                            json.children[i].children[ii].children[iii].name = data.Children[i].Children[ii].Children[iii].name;
                            json.children[i].children[ii].children[iii].value = data.Children[i].Children[ii].Children[iii].ShortName;
                            if (data.Children[i].Children[ii].Children[iii].Children != null) {
                                json.children[i].children[ii].children[iii].children = [];
                                for (var iiii = 0; iiii < data.Children[i].Children[ii].Children[iii].Children.length; iiii++) {
                                    //level4
                                    json.children[i].children[ii].children[iii].children[iiii] = {};
                                    json.children[i].children[ii].children[iii].children[iiii].name = data.Children[i].Children[ii].Children[iii].Children[iiii].name;
                                    json.children[i].children[ii].children[iii].children[iiii].value = data.Children[i].Children[ii].Children[iii].Children[iiii].ShortName;
                                    if (data.Children[i].Children[ii].Children[iii].Children[iiii].Children != null) {
                                        json.children[i].children[ii].children[iii].children[iiii].children = [];
                                        for (var iiiii = 0; iiiii < data.Children[i].Children[ii].Children[iii].Children[iiii].Children.length; iiiii++) {
                                            //level5
                                            json.children[i].children[ii].children[iii].children[iiii].children[iiiii] = {};
                                            json.children[i].children[ii].children[iii].children[iiii].children[iiiii].name = data.Children[i].Children[ii].Children[iii].Children[iiii].Children[iiiii].name;
                                            json.children[i].children[ii].children[iii].children[iiii].children[iiiii].value = data.Children[i].Children[ii].Children[iii].Children[iiii].Children[iiiii].ShortName;
                                            if (data.Children[i].Children[ii].Children[iii].Children[iiii].Children[iiiii].Children != null) {
                                                json.children[i].children[ii].children[iii].children[iiii].children[iiiii].children = [];
                                                for (var iiiiii = 0; iiiiii < data.Children[i].Children[ii].Children[iii].Children[iiii].Children[iiiii].Children.length; iiiiii++) {
                                                    //level6
                                                    json.children[i].children[ii].children[iii].children[iiii].children[iiiii].children[iiiiii] = {};
                                                    json.children[i].children[ii].children[iii].children[iiii].children[iiiii].children[iiiiii].name = data.Children[i].Children[ii].Children[iii].Children[iiii].Children[iiiii].Children[iiiiii].name;
                                                    json.children[i].children[ii].children[iii].children[iiii].children[iiiii].children[iiiiii].value = data.Children[i].Children[ii].Children[iii].Children[iiii].Children[iiiii].Children[iiiiii].ShortName;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log("format: " + JSON.stringify(json));
    return json;
}