document.addEventListener("DOMContentLoaded", () => {
    // kích hoạt hiệu ứng fade-in khi trang được tải xong
    document.body.classList.add('visible');

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const destination = this.href;

            // kích hoạt hiệu ứng fade-out
            // document.body.style.opacity = 0;
            document.body.classList.remove('visible');

            // chờ hiệu ứng hoàn tất rồi mới chuyển trang
            // document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location = destination;
            }, 500);
        });
    });
});