package com.magicbytes.main_menu.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import com.example.reverseengineering.R;

import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.fragment.app.FragmentContainerView;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public final class FragmentMainMenuRootPhoneBinding implements ViewBinding {
    public final BottomNavigationView bottomNavigationView;
    public final FragmentContainerView fragmentContainer;
    public final ConstraintLayout rootLayout;
    private final ConstraintLayout rootView;
    private FragmentMainMenuRootPhoneBinding(ConstraintLayout constraintLayout, BottomNavigationView bottomNavigationView, FragmentContainerView fragmentContainerView, ConstraintLayout constraintLayout2) {
        this.rootView = constraintLayout;
        this.bottomNavigationView = bottomNavigationView;
        this.fragmentContainer = fragmentContainerView;
        this.rootLayout = constraintLayout2;
    }

    @Override
    public ConstraintLayout getRoot() {
        return this.rootView;
    }

    public static FragmentMainMenuRootPhoneBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }
    public static FragmentMainMenuRootPhoneBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        View inflate = layoutInflater.inflate(R.layout.fragment_main_menu_root_phone, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    public static FragmentMainMenuRootPhoneBinding bind(View view) {
        int i = R.id.bottom_navigation_view;
        BottomNavigationView bottomNavigationView = (BottomNavigationView) view.findViewById(i);
        if (bottomNavigationView != null) {
            i = R.id.fragment_container;
            FragmentContainerView fragmentContainerView = (FragmentContainerView) view.findViewById(i);
            if (fragmentContainerView != null) {
                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                return new FragmentMainMenuRootPhoneBinding(constraintLayout, bottomNavigationView, fragmentContainerView, constraintLayout);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i)));
    }
}
