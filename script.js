/**
 * Gerald Studio - 智能項目加載器
 */

function openProject(src) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    // 1. 隱藏父頁面按鈕 (與你原本邏輯一致)
    if (window.parent && window.parent.document.querySelector('#content-overlay .close-btn')) {
        window.parent.document.querySelector('#content-overlay .close-btn').style.display = 'none';
    }

    // 2. 判斷文件類型並注入內容
    if (src.endsWith('.mp4')) {
        // 如果是影片，顯示全屏播放器
        modalBody.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:center; height:100%; background:rgba(0,0,0,0.95);">
                <video style="max-width:90%; max-height:85vh; border: 2px solid #00d2ff; box-shadow:0 0 50px rgba(0,210,255,0.3);" controls autoplay>
                    <source src="${src}" type="video/mp4">
                    您的瀏覽器不支持影片播放。
                </video>
            </div>`;
    } else {
        // 如果是網頁，顯示 iframe
        modalBody.innerHTML = `<iframe src="${src}" style="width:100%; height:100%; border:none; background:#000;" allowfullscreen></iframe>`;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closeProject() {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modal.style.display = 'none';
    modalBody.innerHTML = ''; 
    document.body.style.overflow = 'auto';

    if (window.parent && window.parent.document.querySelector('#content-overlay .close-btn')) {
        window.parent.document.querySelector('#content-overlay .close-btn').style.display = 'block';
    }
}