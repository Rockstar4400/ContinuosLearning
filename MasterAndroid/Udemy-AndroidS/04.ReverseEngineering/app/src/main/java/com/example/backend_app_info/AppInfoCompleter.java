package com.example.reverseengineering;

import android.content.Context;

import kotlin.jvm.internal.Intrinsics;

public class AppInfoCompleter extends Thread{
    protected final Context context;
    public AppInfoCompleter(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.context = context;
    }

    public void run() {
    }

    public final void complete() {
        start();
    }
}
