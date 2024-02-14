document.addEventListener("DOMContentLoaded", function(event) {
    let field = document.getElementById("field");
    let ball = document.getElementById("ball");
    
    field.addEventListener("click", function(event) {
        let ballSize = ball.offsetWidth;
        let fieldRect = field.getBoundingClientRect();

        let clickX = event.clientX - fieldRect.left - ballSize/2;
        let clickY = event.clientY - fieldRect.top - ballSize/2;

        clickX = Math.min(Math.max(clickX, 0), fieldRect.width - ballSize);
        clickY = Math.min(Math.max(clickY, 0), fieldRect.height - ballSize);

        ball.style.left = clickX + "px";
        ball.style.top = clickY + "px";
    });
});