function printToPDF() {
  window.print();
}

// 更新JavaScript部分
document.addEventListener("DOMContentLoaded", function () {
  // 获取视口中心作为初始位置
  const initX = window.innerWidth / 2;
  const initY = window.innerHeight / 2;
  document.body.style.setProperty("--mouse-x", initX + "px");
  document.body.style.setProperty("--mouse-y", initY + "px");

  // 精确跟踪鼠标位置
  const updateMousePosition = function (e) {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty("--mouse-x", x + "px");
    document.body.style.setProperty("--mouse-y", y + "px");
  };

  // 监听整个文档的鼠标移动
  document.addEventListener("mousemove", updateMousePosition);

  // 移动设备处理
  document.addEventListener("touchmove", function (e) {
    const touch = e.touches[0];
    updateMousePosition(touch);
  });

  // 窗口大小变化时重新居中
  window.addEventListener("resize", function () {
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    document.body.style.setProperty("--mouse-x", initX + "px");
    document.body.style.setProperty("--mouse-y", initY + "px");
  });
});
