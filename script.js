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

// 回到顶部
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// 自动复制邮箱手机
function copyToClipboard(element, text) {
  // 移除旧的提示（如果存在）
  const oldTooltip = element.querySelector(".copy-tooltip");
  if (oldTooltip) oldTooltip.remove();

  navigator.clipboard
    .writeText(text)
    .then(() => {
      // 创建提示元素
      const tooltip = document.createElement("div");
      tooltip.className = "copy-tooltip";
      tooltip.textContent = "已复制!";

      // 添加到点击元素内部
      element.appendChild(tooltip);

      // 动画结束后移除
      setTimeout(() => {
        tooltip.remove();
      }, 1500);
    })
    .catch((err) => {
      console.error("复制失败: ", err);
      // 错误提示（红色样式）
      const tooltip = document.createElement("div");
      tooltip.className = "copy-tooltip";
      tooltip.textContent = "复制失败!";
      tooltip.style.color = "#ff6b6b";
      element.appendChild(tooltip);

      setTimeout(() => {
        tooltip.remove();
      }, 1500);
    });
}
