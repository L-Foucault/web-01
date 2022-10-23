function init(t) {
  t /= 10000; //速度，数值越大速度越慢
  let c = document.getElementById("canvas"),
    cc = c.getContext("2d"),
    w = (c.width = window.innerWidth), //窗口宽度
    h = (c.height = window.innerHeight), //窗口高度
    increment = 20; //增量
  //在给定矩形内清空一个矩形
  cc.clearRect(0, 0, w, h);
  //指定在图形重叠的地方，颜色由两种颜色值的相加值来决定
  cc.globalCompositeOperation = "lighter";
  for (let n = 0; n < 3; n++) {
    //设置3中填充颜色
    if (n == 0) {
      cc.fillStyle = "#035ACB";
    }
    if (n == 1) {
      cc.fillStyle = "#1B6E45";
    }
    if (n == 2) {
      cc.fillStyle = "#FD6F10";
    }
    for (let i = 0; i < h; i += increment) {
      for (let j = 0; j < w / 2; j += increment) {
        let index = i * w + j;
        //设置透明度
        // cc.globalAlpha=Math.tan(index*index-t);
        cc.globalAlpha = Math.tan(t + i - j);
        //填充矩形
        cc.fillRect(
          Math.tan(i * j - Math.sin(index + n / 100) + t) * j +
            w / 2 -
            increment / 2,
          i,
          ((Math.tan(index + i / j + t + n / 100) / 2) * increment) / 2,
          (Math.tan(index * index - t) * increment) / 2
        );
      }
    }
  }
  //实现无限循环动画
  requestAnimationFrame(init);
}

//初始化
init();
