// ===== 等待DOM加载完成后执行 =====
// DOMContentLoaded：确保HTML文档完全加载和解析后再执行JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 按钮点击事件 =====
    // getElementById：通过ID获取元素
    const warningBtn = document.getElementById('warningBtn');
    
    // 如果按钮存在，添加点击事件监听器
    if (warningBtn) {
        // addEventListener：添加事件监听器
        warningBtn.addEventListener('click', function() {
            // alert：弹出警告框
            alert('让你别点还点是吧');
        });
    }
    
    // ===== 控制台输出欢迎信息 =====
    // console.log：在浏览器控制台输出信息（按F12查看）
    console.log('🌸 欢迎来到gwc的个人主页！');
    console.log('💖 页面加载完成');
    
    // ===== 可以添加更多交互功能 =====
    
    // 示例1：为所有链接添加点击统计
    const links = document.querySelectorAll('.links-section a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('用户点击了链接：' + this.textContent);
        });
    });
    
    // 示例2：表单提交处理
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // preventDefault：阻止表单默认提交行为
            e.preventDefault();
            
            // 获取输入框的值
            const username = this.querySelector('input[name="name"]').value;
            const password = this.querySelector('input[name="password"]').value;
            
            // 简单验证
            if (username === '' || password === '') {
                alert('❌ 请填写完整信息！');
            } else {
                alert('✅ 登录成功！\n用户名：' + username);
                console.log('用户尝试登录，用户名：' + username);
            }
        });
    }
    
    // 示例3：为视频添加播放统计
    const videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.addEventListener('play', function() {
            console.log('📹 用户开始播放视频');
        });
    });
    
    // 示例4：为音频添加播放统计
    const audios = document.querySelectorAll('audio');
    audios.forEach(function(audio, index) {
        audio.addEventListener('play', function() {
            console.log('🎵 用户开始播放音频 ' + (index + 1));
        });
    });
    
});

// ===== 页面滚动特效（可选） =====
window.addEventListener('scroll', function() {
    // scrollY：获取页面垂直滚动距离
    const scrolled = window.scrollY;
    
    // 可以根据滚动距离做一些效果
    // 例如：改变头部透明度
    const header = document.querySelector('header');
    if (header && scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.25)';
    } else if (header) {
        header.style.background = 'rgba(255, 255, 255, 0.15)';
    }
});