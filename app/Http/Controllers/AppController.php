<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class AppController extends Controller
{
    public function init()
    {

        if (DB::connection()->getDatabaseName()) {
            return response()->json(['success' => true, 'message' => 'Conected with db'], 200);
        } else {
            return response()->json(['success' => false, 'message' => 'Conection with db failed'], 500);
        }

    }
}
