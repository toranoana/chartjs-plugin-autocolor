# chartjs-plugin-autocolor
[Chart.js](https://www.chartjs.org/)で自動色付けを行うプラグインです。

## 導入方法
### バンドルされたJavaScriptから利用する
GitHub releasesから取得できます。
### npmから利用する
```javascript
npm install chartjs-plugin-autocolor --save
```

## 使用方法
```javascript
import 'chartjs-plugin-autocolor';
```
※Goolgle Chrome(version:79.0.3945.117)のみで動作確認を行っております。

## 設定
|名前|型|初期値|詳細|
|:--|:--|:--|:--|
|disabled|boolean|false|trueが設定された場合、自動色付けを行いません。|
|saturation|文字列|100%|彩度を設定します。0%〜100%で設定を行います。|
|lightness|文字列|50%|輝度を設定します。0%〜100%で設定を行います。|

設定可能なChart typeは`line`と`bar`のみとなります。
