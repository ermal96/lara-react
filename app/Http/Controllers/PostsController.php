<?php

namespace App\Http\Controllers;

class PostsController extends Controller
{
    public function index()
    {
        $posts = [
            ['title' => 'What is Lorem Ipsum?', 'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '],
            ['title' => 'Why do we use it?', 'body' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'],
            ['title' => 'Where does it come from?', 'body' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical'],
            ['title' => 'Where can I get some?', 'body' => 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'],
        ];

        return $posts;
    }
}
