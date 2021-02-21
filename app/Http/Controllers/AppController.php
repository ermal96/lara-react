<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class AppController extends Controller
{
    public function init()
    {

        try {
            DB::connection()->getPdo();
            return response()->json(['status' => true, 'success' => 'Conected with db'], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'failed' => 'Conection with db failed'], 500);
            die();
        }

    }
}
