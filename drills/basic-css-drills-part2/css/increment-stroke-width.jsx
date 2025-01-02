var doc = app.activeDocument;
var sel = doc.selection;

if (sel.length > 0) {
    for (var i = 0; i < sel.length; i++) {
        var item = sel[i];
        if (item.stroked) {
            item.strokeWidth = item.strokeWidth + 1; // Increment stroke by 1
        }
    }
} else {
    alert("Please select an object.");
}