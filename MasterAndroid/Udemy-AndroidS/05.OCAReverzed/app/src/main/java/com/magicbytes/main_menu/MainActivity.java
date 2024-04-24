package com.magicbytes.main_menu;

import android.os.Bundle;
import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import com.example.backend_app_info.AppInfoCompleter;
import com.magicbytes.main_menu.R;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main_menu);
        if (bundle == null) {
            new AppInfoCompleter(this).complete();
        }
    }
}