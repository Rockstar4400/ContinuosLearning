package com.example.firstapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity  implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toast.makeText(this,"Oncreate is Called",
                Toast.LENGTH_SHORT).show();

        findViewById(R.id.button3).setOnClickListener(view -> {
            view.setBackgroundColor(Color.BLUE);
            findViewById(R.id.myLinearLayout).setBackgroundColor(Color.YELLOW);
        });
    }

    @Override
    public void onClick(View view) {
        view.setBackgroundColor(Color.BLUE);
    }

}