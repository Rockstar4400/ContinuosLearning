package com.viewbinding;

import android.os.Bundle;
import android.view.View;
import androidx.fragment.app.Fragment;
import com.viewbinding.databinding.FragmentBlankBinding;

public final class BindFragment extends Fragment {
    private FragmentBlankBinding fragmentBlankBinding;
    public BindFragment() {
        super(R.layout.fragment_blank);
    }
    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        FragmentBlankBinding binding = FragmentBlankBinding.bind(view);
        this.fragmentBlankBinding = binding;
        binding.textViewFragment.setText(getString(R.string.hello_from_vb_bindfragment));
    }
    @Override
    public void onDestroyView() {
        this.fragmentBlankBinding = null;
        super.onDestroyView();
    }
}

