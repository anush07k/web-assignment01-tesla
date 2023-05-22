function calculateNotes() {
    var amount = parseInt(document.getElementById('amount').value);
    
    var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
    var noteCounts = {};
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        noteCounts[note] = 0;
    }

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        if (amount >= note) {
            noteCounts[note] = Math.floor(amount / note);
            amount = amount % note;
        }
    }

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        document.getElementById('note' + note).textContent = noteCounts[note];
    }

    var totalNotes = Object.values(noteCounts).reduce(function(a, b) {
        return a + b;
    }, 0);
    document.getElementById('totalNotes').textContent = totalNotes;
}
