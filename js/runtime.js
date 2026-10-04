function updateRuntime() {
  // 博客上线时间：2026-10-04 19:05:28
  const createTime = new Date(2026, 9, 4, 19, 5, 28).getTime();

  const now = new Date().getTime();
  let totalSeconds = Math.floor((now - createTime) / 1000);

  // 防止时间设成未来导致负数
  if (totalSeconds < 0) totalSeconds = 0;

  const daysInYear = 365;
  const years = Math.floor(totalSeconds / (daysInYear * 24 * 3600));
  totalSeconds %= daysInYear * 24 * 3600;

  const days = Math.floor(totalSeconds / (24 * 3600));
  totalSeconds %= 24 * 3600;

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formatZero = (num) => (num > 9 ? num : '0' + num);

  const currentHour = new Date().getHours();
  const statusHtml = currentHour >= 8 && currentHour < 22 ? '小窝营业中 — ' : '小窝打烊了 — ';

  const timeHtml = `已度过 ${years} 年 ${days} 天 ${formatZero(hours)} : ${formatZero(minutes)} : ${formatZero(seconds)}`;

  const workboard = document.getElementById('runtime');
  if (workboard) {
    workboard.innerHTML = statusHtml + timeHtml;
  }
}

updateRuntime();
setInterval(updateRuntime, 1000);