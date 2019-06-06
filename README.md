## Project setup
```
npm install
```

## Preview in android, works fine
```
ionic cordova run android -l
```

## Build
```
adb uninstall io.ionic.starter
```

```
ionic cordova build android --prod --release
```

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore myApp.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk myApp
```

```
Password for jarsigner: dadada
```

```
adb install platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk 
```