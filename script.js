document.addEventListener("mousemove", (event) => {
    const glow = document.getElementById("glow");
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
});

// Hide glow when hovering over buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        document.getElementById("glow").style.opacity = "0";
    });
    button.addEventListener('mouseleave', () => {
        document.getElementById("glow").style.opacity = "1";
    });
});
