<?php

namespace App\Http\Controllers\Api\Settings;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{

    public function __construct()
    {
        $this->middleware(['role:Super Admin']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Permission::orderByDesc('id')->with('roles')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $roles = $request['roleIds'];
        $crud = ['', '-create', '-store', '-edit', '-update', '-destroy'];

        $in['name'] = $request->input('name');
        $in['guard_name'] = 'api';
        if (request('crud') == true) {
            $base = $in['name'];
            foreach ($crud as $c) {
                $in['name'] = $base . $c;
                $permission = Permission::create($in);
                $this->giveRolePermission($permission, $roles);
            }
        } else {
            $permission = Permission::create($in);
            $this->giveRolePermission($permission, $roles);
        }

        $user = Auth::user();
        $permissions = $user->getAllPermissions()->pluck('name');

        return response()->json(['permissions' => $permissions], 200);

    }

    /**
     * @param $permission
     * @param $roles
     */
    public function giveRolePermission($permission, $roles)
    {
        foreach ($roles as $role) {
            $r = Role::where('id', '=', $role)->firstOrFail(); //Match input role to db record
            $r->givePermissionTo($permission);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $permission = Permission::findOrFail($id);
        $request->validate([
            'name' => 'required|unique:permissions,name,' . $id,
        ]);

        $in = $request->except(['roleIds']);
        $in['guard_name'] = 'api';
        $permission->update($in);

        if (!empty($request['roleIds'])) {
            $permission->syncRoles($request['roleIds']);
        }

        $user = Auth::user();
        $permissions = $user->getAllPermissions()->pluck('name');

        return response()->json(['permissions' => $permissions], 200);
    }

    /**
     * @param $id
     */
    public function destroy($id)
    {
        $permission = Permission::findById($id, 'api');
        $permission->delete();

        $user = Auth::user();
        $permissions = $user->getAllPermissions()->pluck('name');

        return response()->json(['permissions' => $permissions], 200);
    }
}
