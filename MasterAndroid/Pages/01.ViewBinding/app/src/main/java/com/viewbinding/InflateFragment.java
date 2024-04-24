package com.viewbinding;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import com.viewbinding.databinding.FragmentBlankBinding;
public final class InflateFragment extends Fragment {
    private FragmentBlankBinding fragmentBlankBinding;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        FragmentBlankBinding binding = FragmentBlankBinding.inflate(inflater, container, false);
        this.fragmentBlankBinding = binding;
        binding.textViewFragment.setText(getString(R.string.hello_from_vb_inflatefragment));
        return binding.getRoot();
    }
    @Override
    public void onDestroyView() {
        this.fragmentBlankBinding = null;
        super.onDestroyView();
    }
}
