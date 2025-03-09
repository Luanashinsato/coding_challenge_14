// Task 2: Adding Support Tickets Dynamically
// Writing a function to create a new support ticket
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer"); // Selecting the ticket container where tickets will be added

    // Creating a div element to represent the ticket 
    const ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket-card"); // Setting class attribute 

    // Creating a heading for the customer's name 
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = customerName;

    // Creating a paragraph for the issue description
    const issueParagraph = document.createElement("p");
    issueParagraph.textContent = issueDescription;

    // Creating a label indicating priority level
    const priorityLabel = document.createElement("p");
    priorityLabel.innerHTML = `<strong>Priority:</strong> ${priorityLevel}`; 

    // Creating a resolve button to remove the ticket
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", (event) => {
       ticketContainer.removeChild(ticket); // Adding an event listener for the click event 
       event.stopPropagation(); // Task 4 - Preventing event bubbling to container
    });

    // Task 3 - Applying high-priority styling if applicable
    if (priorityLevel === "High") {
        ticket.classList.add("high-priority");
    }

    ticket.appendChild(nameHeading); // Appending customer's name
    ticket.appendChild(issueParagraph); // Appending issue paragraph 
    ticket.appendChild(priorityLabel); // Appending priority label 
    ticket.appendChild(resolveButton); // Appending resolve button 
    ticketContainer.appendChild(ticket); // Appending ticket to ticket container 
}
addSupportTicket("Bob Williams", "Unable to access account", "High");
addSupportTicket("Elle Davis", "Payment not processing", "Medium");
addSupportTicket("Mike Johnson", "Error message on login", "Low");
addSupportTicket("Emily Cooper", "Password reset not working", "High");


// Task 3: Converting NodeLists to Arrays for Bulk Updates
// Writing a function to highlight high-priority tickets
function highlightHighPriorityTickets() {
    const highPriorityTickets = Array.from(document.querySelectorAll(".high-priority")); // Converting the NodeList into an array
    
    highPriorityTickets.forEach(ticket => {
        ticket.style.border = "2px solid navy";
    }); // Using an array method to update the appearance of high-priority tickets (adding a border)
}
highlightHighPriorityTickets(); // Applying highlight after adding tickets


// Task 4: Implementing Ticket Resolution with Event Bubbling
// Selecting the ticket container 
const ticketContainer = document.getElementById('ticketContainer'); 

// Attaching an event listener to the parent container to log when it is clicked
ticketContainer.addEventListener("click", (event) => {
    let ticket = event.target.closest(".ticket-card");
    if (ticket) {
    console.log("Employee Card clicked");
    }
});
