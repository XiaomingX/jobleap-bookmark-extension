// 为第一个按钮添加点击事件，跳转到jobleap.cn
document.getElementById('btn1').addEventListener('click', function() {
    chrome.tabs.create({url: 'https://jobleap.cn'});
  });
  
  // 为第二个按钮添加点击事件，跳转到mp.jobleap4u.com
  document.getElementById('btn2').addEventListener('click', function() {
    chrome.tabs.create({url: 'https://mp.jobleap4u.com'});
  });
  