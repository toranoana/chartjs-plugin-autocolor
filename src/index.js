const autoColorConfig = {
  saturation: '100%',
  lightness: '50%',
};
const targetChartType = ['bar', 'line'];
const autoColorPlugin = {
  id: 'autocolor',
  beforeInit(chart, options) {
    // 使用しない設定の場合、そのまま表示する
    if (options.disabled) {
      return;
    }
    // 想定したグラフのタイプ以外の場合、そのまま表示する
    if (targetChartType.indexOf(chart.config.type) === -1) {
      return;
    }
    // 設定があった場合のみ、デフォルト値から変更する
    if (options.saturation) {
      autoColorConfig.saturation = options.saturation;
    }
    if (options.lightness) {
      autoColorConfig.lightness = options.lightness;
    }
    const { datasets } = chart.data;
    const targetData = [];
    let iteratorCount = 0;
    datasets.forEach(t => {
      // 色が未設定のデータを取得する
      if (!t.borderColor) {
        targetData[iteratorCount] = t;
        iteratorCount += 1;
      }
    });
    targetData.forEach((t, index) => {
      const target = t;
      // 色相を計算する
      const hue = (360 / iteratorCount) * index;
      target.borderColor = `hsl(${hue},${autoColorConfig.saturation},${autoColorConfig.lightness})`;
      // 塗り潰しを使用する場合、同色で塗りつぶす
      if (
        (typeof target.fill === 'undefined' || target.fill) &&
        !target.backgroundColor
      ) {
        if (chart.config.type === 'bar') {
          target.backgroundColor = `hsl(${hue},${autoColorConfig.saturation},${autoColorConfig.lightness})`;
        } else if (chart.config.type === 'line') {
          target.backgroundColor = `hsla(${hue},${autoColorConfig.saturation},${autoColorConfig.lightness},.1)`;
        }
      }
    });
  },
};

Chart.plugins.register(autoColorPlugin);

export default autoColorPlugin;
