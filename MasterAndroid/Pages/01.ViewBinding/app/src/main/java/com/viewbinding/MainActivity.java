package com.viewbinding;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.viewbinding.databinding.ActivityMainBinding;
public class MainActivity extends AppCompatActivity {
    private ActivityMainBinding binding;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
    }
    @Override
    public void onStart() {
        super.onStart();
        binding.textViewActivity.setText(getString(R.string.hello_from_vb_activity));
    }
}
