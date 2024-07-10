<?php
app()->cors();

app()->config('debug', false);

db()->autoConnect();

app()->get('/notes/view', function () {
    inertia('Notes');
});

app()->get('/notes', function () {
    $notes = db()->select('notes')->all();

    response()->json([
        'status' => 'success',
        'data' => $notes,
    ]);
});

app()->delete('/notes/{id}', function ($id) {
    db()->delete("notes")->where("id", $id)->execute();
    response()->json([
        'status' => 'success',
        'noteid' => $id,
    ]);
  });

app()->get('/notes/delete/all', function () {
    db()->delete("notes")->execute();
    db()->query("ALTER TABLE notes AUTO_INCREMENT = 1")->execute();
    response()->json([
        'status' => 'success',
    ]);
  });

app()->post('/notes/new', function() {
    $item = request()->get(['note']);

    db()->insert('notes')->params($item)->execute();

    response()->json([
        'status' => 'success',
        'data' => $item,
        'message' => 'Notes saved',
    ]);
});

