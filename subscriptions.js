document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var plan = document.getElementById("plan").value;
    alert(`Підписку оновлено на ${plan}`);
});
