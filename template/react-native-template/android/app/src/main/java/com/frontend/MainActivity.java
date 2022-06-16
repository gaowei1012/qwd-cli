/*
 * @Author: mingwei
 * @Date: 2022-04-09 19:11:07
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-25 17:32:12
 * @FilePath: /yl-app/frontend/android/app/src/main/java/com/frontend/MainActivity.java
 * @Description: 
 */
package com.frontend;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "frontend";
  };

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
}
