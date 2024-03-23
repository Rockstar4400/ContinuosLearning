package com.example.firstapplication;

import android.graphics.Color;
import android.view.View;

public class MyClickListener implements View.OnClickListener {
    @Override
    public void onClick(View view) {

        view.setBackgroundColor(Color.YELLOW);

    }
}
