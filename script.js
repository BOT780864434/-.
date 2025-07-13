function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function showSection(sectionId) {
    document.getElementById("files").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

function search() {
    const query = document.getElementById("searchInput").value;
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = `<p>نتائج البحث عن: <strong>${query}</strong></p>`;
}

function updateVideos() {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = "<p>تم تحديث قائمة الفيديوهات.</p>";
}

function downloadAudio() {
    alert("سيتم تحميل الصوت فقط (نموذج).");
}

function downloadVideo() {
    alert("سيتم تحميل الفيديو (نموذج).");
}
