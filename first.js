// Function to update the visitor count
function updateVisitorCount() {
    // Check if visitor count is already stored in local storage
    let visitorCount = localStorage.getItem('visitorCount');

    // If not, initialize it to 0
    if (!visitorCount) {
        visitorCount = 0;
    }

    // Increment the visitor count
    visitorCount++;

    // Store the updated count in local storage
    localStorage.setItem('visitorCount', visitorCount);

    // Update the displayed count on the page
    document.getElementById('visitor-count').textContent = visitorCount;
}

// Run the update function when the page loads
window.onload = updateVisitorCount;