package com.magicbytes.main_menu.feature.menu;

import android.os.Bundle;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.magicbytes.main_menu.databinding.FragmentMainMenuRootPhoneBinding;
import com.example.reverseengineering.R;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import com.magicbytes.main_menu.feature.menu.practice.MainMenuPracticeFragment;

public class MainMenuRootPhoneFragment extends Fragment {
    public static final Companion Companion = new Companion(null);
    private FragmentMainMenuRootPhoneBinding _binding;
    private final FragmentMainMenuRootPhoneBinding getBinding() {
        FragmentMainMenuRootPhoneBinding fragmentMainMenuRootPhoneBinding = this._binding;
        Intrinsics.checkNotNull(fragmentMainMenuRootPhoneBinding);
        return fragmentMainMenuRootPhoneBinding;
    }

    public MainMenuRootPhoneFragment() {
        // Required empty public constructor
    }

    public static MainMenuRootPhoneFragment newInstance(String param1, String param2) {
        MainMenuRootPhoneFragment fragment = new MainMenuRootPhoneFragment();
        Bundle args = new Bundle();

        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {

        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        ViewGroup viewGroup = null;
        this._binding = FragmentMainMenuRootPhoneBinding.inflate(inflater, viewGroup, false);
        ConstraintLayout root = getBinding().getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "binding.root");
        return root;
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewCreated(View view, Bundle bundle) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onViewCreated(view, bundle);
        BottomNavigationView bottomNavigationView = getBinding().bottomNavigationView;
        Intrinsics.checkNotNullExpressionValue(bottomNavigationView, "binding.bottomNavigationView");
        showScreen(bottomNavigationView.getSelectedItemId());
        getBinding().bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() { // from class: com.magicbytes.main_menu.feature.menu.MainMenuRootPhoneFragment$onViewCreated$1
            @Override // com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener
            public final boolean onNavigationItemSelected(MenuItem item) {
                boolean showScreen;
                Intrinsics.checkNotNullParameter(item, "item");
                showScreen = MainMenuRootPhoneFragment.this.showScreen(item.getItemId());
                return showScreen;
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        this._binding = null;
    }
    public final boolean showScreen(int i) {
        if (i == R.id.practice_tab) {
            getChildFragmentManager().beginTransaction().replace(R.id.fragment_container, MainMenuPracticeFragment.Companion.newInstance()).commitAllowingStateLoss();
            return true;
        } else if (i == R.id.progress_tab) {
            //getChildFragmentManager().beginTransaction().replace(R.id.fragment_container, MainMenuProgressFragment.Companion.newInstance()).commitAllowingStateLoss();
            return true;
        } else if (i == R.id.more_tab) {
            //getChildFragmentManager().beginTransaction().replace(R.id.fragment_container, MainMenuMoreFragment.Companion.newInstance()).commitAllowingStateLoss();
            return true;
        } else {
            return false;
        }
    }

    public static final class Companion {
        private Companion() {
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final MainMenuRootPhoneFragment newInstance() {
            return new MainMenuRootPhoneFragment();
        }
    }
}