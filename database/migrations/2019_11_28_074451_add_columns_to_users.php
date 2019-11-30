<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('address',255)->after('password');
            $table->string("city",100)->after('password');
            $table->string('state',100)->after('password');
            $table->string('country',100)->after('password');
            $table->string('pincode',100)->after('password');
            $table->string("mobile",100)->after('password');
            $table->tinyInteger('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->drop('address');
            $table->drop('city');
            $table->drop('state');
            $table->drop('country');
            $table->drop('pincode');
            $table->drop('mobile');
            $table->drop('status');
        });
    }
}
