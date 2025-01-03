// Sample parking slots data
const parkingSlots = [
    { id: 1, location: "Dlf", available: true, price: 100 },
    { id: 2, location: "ghaziabad", available: true, price: 250 },
    { id: 3, location: "noida", available: true, price: 150 },
    { id: 4, location: "crossing", available: true, price: 320 },
];

// Function to search for parking slots based on location
function searchParking() {
    const locationInput = document.getElementById("location").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    
    // Clear previous results
    resultsDiv.innerHTML = '';

    // Filter parking slots based on location
    const filteredSlots = parkingSlots.filter(slot => 
        slot.location.toLowerCase().includes(locationInput) && slot.available
    );

    // Display results
    if (filteredSlots.length > 0) {
        filteredSlots.forEach(slot => {
            const slotDiv = document.createElement("div");
            slotDiv.className = "slot";
            slotDiv.innerHTML = `
                <p>Location: ${slot.location}</p>
                <p>Available: ${slot.available ? "Yes" : "No"}</p>
                <p>Price: Rs${slot.price}</p>
                <button onclick="bookSlot(${slot.id})">Book</button>
            `;
            resultsDiv.appendChild(slotDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No available parking slots found.</p>';
    }
}

// Function to book a parking slot
function bookSlot(slotId) {
    const slot = parkingSlots.find(s => s.id === slotId);
    if (slot && slot.available) {
        slot.available = false; // Mark the slot as booked
        alert(`You have successfully booked the parking slot at ${slot.location}.`);
        
        // Show payment options
        const paymentDiv = document.getElementById("payment");
        paymentDiv.style.display = "block";
        paymentDiv.innerHTML = `
            <h3>Payment Options</h3>
            <p>Total Amount: Rs${slot.price}</p>
            <a href="payment.html" class="payment-button">Proceed to Payment</a>
        `;
        
        searchParking(); // Refresh the search results
    } else {
        alert('This parking slot is no longer available.');
    }
}

// Function to handle payment
function makePayment(PaymentRequest) {
    alert(`Payment made using ${PaymentRequest}. Thank you for your booking!`);
    // Optionally, you can reset the payment section or redirect the user
    
}