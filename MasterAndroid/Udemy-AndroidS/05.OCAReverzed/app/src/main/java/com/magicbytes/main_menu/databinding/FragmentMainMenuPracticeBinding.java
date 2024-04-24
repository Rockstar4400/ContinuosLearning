package com.magicbytes.main_menu.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.example.reverseengineering.R;

public final class FragmentMainMenuPracticeBinding implements ViewBinding {
    private final LinearLayout rootView;

    private FragmentMainMenuPracticeBinding(LinearLayout linearLayout) {
        this.rootView = linearLayout;
    }
    public static FragmentMainMenuPracticeBinding inflate(LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    public static FragmentMainMenuPracticeBinding inflate(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z) {
        View inflate = layoutInflater.inflate(R.layout.fragment_main_menu_practice, viewGroup, false);
        if (z) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    public static FragmentMainMenuPracticeBinding bind(View view) {
//        int i = R.id.bannerSelfAds;
//        BannerUpgradeProView bannerUpgradeProView = (BannerUpgradeProView) view.findViewById(i);
//        if (bannerUpgradeProView != null) {
//            i = R.id.menuButtons;
//            RecyclerView recyclerView = (RecyclerView) view.findViewById(i);
//            if (recyclerView != null) {
                LinearLayout linearLayout = (LinearLayout) view;
//                i = R.id.swipeToRefreshLayout;
//                SwipeRefreshLayout swipeRefreshLayout = (SwipeRefreshLayout) view.findViewById(i);
//                if (swipeRefreshLayout != null) {
//                    i = R.id.toolbar;
//                    MaterialToolbar materialToolbar = (MaterialToolbar) view.findViewById(i);
//                    if (materialToolbar != null) {
//                        i = R.id.userProgress;
//                        UserProgressView userProgressView = (UserProgressView) view.findViewById(i);
//                        if (userProgressView != null) {
                            return new FragmentMainMenuPracticeBinding(linearLayout);
//                        }
//                    }
//                }
//            }
//        }
//        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i)));
    }
    public LinearLayout getRoot() {
        return this.rootView;
    }
}
