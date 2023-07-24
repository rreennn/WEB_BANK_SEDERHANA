<?php

namespace App\Http\Controllers;

use App\Http\Resources\HomeCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
       return Inertia::render("Home");
    }

    public function about() {
        return Inertia::render("About");
    }

    public function tabungan() {
        return Inertia::render("Tabungan");
    }

    public function store() {
        return Inertia::render('Nabung');
    }

    public function ambil() {
        return Inertia::render('Ambil');
    }

    public function get(Request $request, string $id) {
        $user = User::all()->where('id', $id);
        $tabungan = User::where('id', $id)->pluck('tabungan')->first();
        $tabungan -= $request->tabungan;
        $user->firstOrFail()->update([
            'tabungan' => $tabungan,
        ]);
        return to_route('tabungan');
    }

    public function nabung(Request $request, string $id) {
        $user = User::all()->where('id', $id);
        $tabungan = User::where('id', $id)->pluck('tabungan')->first();
        $tabungan += $request->tabungan;
        $user->firstOrFail()->update([
            'tabungan' => $tabungan,
        ]);
        return to_route('tabungan');
    }
}
