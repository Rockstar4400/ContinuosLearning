package com.magicbytes.main_menu.customUi;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.FrameLayout;

import com.magicbytes.main_menu.databinding.ViewMenuUserProgressBinding;

import kotlin.jvm.internal.Intrinsics;

public class UserProgressView extends FrameLayout {
    private ViewMenuUserProgressBinding binding;
    public UserProgressView(Context context, AttributeSet attrs) {
        super(context, attrs);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attrs, "attrs");
        inflate();
    }

    private final void inflate() {
        ViewMenuUserProgressBinding inflate =
                ViewMenuUserProgressBinding.inflate(
                        LayoutInflater.from(getContext()), this, true);
        Intrinsics.checkNotNullExpressionValue(inflate, "ViewMenuUserProgressBind…rom(context), this, true)");
        this.binding = inflate;
    }
}
