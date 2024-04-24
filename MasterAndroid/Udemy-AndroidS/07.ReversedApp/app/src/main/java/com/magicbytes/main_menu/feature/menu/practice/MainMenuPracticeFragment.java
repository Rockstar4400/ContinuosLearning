package com.magicbytes.main_menu.feature.menu.practice;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.fragment.app.Fragment;

import com.magicbytes.main_menu.databinding.FragmentMainMenuPracticeBinding;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
public final class MainMenuPracticeFragment extends Fragment {
    public static final Companion Companion = new Companion(null);
    private FragmentMainMenuPracticeBinding _binding;

    public final FragmentMainMenuPracticeBinding getBinding() {
        FragmentMainMenuPracticeBinding fragmentMainMenuPracticeBinding = this._binding;
        Intrinsics.checkNotNull(fragmentMainMenuPracticeBinding);
        return fragmentMainMenuPracticeBinding;
    }
    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        this._binding = FragmentMainMenuPracticeBinding.inflate(inflater, viewGroup, false);
        LinearLayout root = getBinding().getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "binding.root");
        return root;
    }

    public static final class Companion {
        private Companion() {
        }
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
        public final MainMenuPracticeFragment newInstance() {
            return new MainMenuPracticeFragment();
        }
    }
}
