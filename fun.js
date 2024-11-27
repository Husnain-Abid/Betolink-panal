console.log("hello");

document.querySelectorAll('.pencil-icon').forEach((icon) => {
    icon.addEventListener('click', () => {
        console.log("hello popup");

        document.querySelector('.popup-overlay').style.display = 'block';
        document.querySelector('.popup-box').style.display = 'block';
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup-box').style.display = 'none';
});

document.querySelector('.popup-overlay').addEventListener('click', () => {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup-box').style.display = 'none';
});




document.querySelectorAll('.automation-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            // Uncheck all other checkboxes
            document.querySelectorAll('.automation-checkbox').forEach((cb) => {
                if (cb !== event.target) cb.checked = false;
            });
        }
    });
});




// checks

const allCheckbox = document.getElementById('allCheckbox');
const m1Checkbox = document.getElementById('m1Checkbox');
const m2Checkbox = document.getElementById('m2Checkbox');
const equipmentSection = document.getElementById('equipmentSection');
const controlPanelSection = document.getElementById('controlPanelSection');

function updateVisibility() {
    if (allCheckbox.checked) {
        // Show equipment section and hide control panel
        // equipmentSection.style.display = 'block';
        // controlPanelSection.style.display = 'none';
        // // Hide M1 and M2 checkboxes
        m1Checkbox.parentElement.style.display = 'none';
        m2Checkbox.parentElement.style.display = 'none';
        // Uncheck M1 and M2 checkboxes
        m1Checkbox.checked = true;
        m2Checkbox.checked = false;
    } else {
        // Hide equipment section and show control panel
        // equipmentSection.style.display = 'none';
        // controlPanelSection.style.display = 'block';
        // // Show M1 and M2 checkboxes
        m1Checkbox.parentElement.style.display = 'inline-block';
        m2Checkbox.parentElement.style.display = 'inline-block';
    }
}

// Add event listeners to the checkboxes
allCheckbox.addEventListener('change', updateVisibility);





// Add event listener to toggle visibility
allCheckbox.addEventListener('change', function () {
    if (this.checked) {
        // Show equipment section
        equipmentSection.classList.add('active');
        controlPanelSection.classList.remove('active');
    } else {
        // Show control panel section
        equipmentSection.classList.remove('active');
        controlPanelSection.classList.add('active');
    }
});

// Set default state
if (allCheckbox.checked) {
    equipmentSection.classList.add('active');
    controlPanelSection.classList.remove('active');
} else {
    equipmentSection.classList.remove('active');
    controlPanelSection.classList.add('active');
}



// Get elements
const arrowIcon = document.getElementById('arrowIcon');
const mixDesignDiv = document.getElementById('mixDesignDiv');
const newDiv = document.getElementById('newDiv');

// Add a click event listener to the arrow icon
arrowIcon.addEventListener('click', () => {
    // Rotate the icon
    arrowIcon.classList.toggle('rotate');
    
    // Toggle visibility of the two divs
    if (newDiv.style.display === 'none') {
        newDiv.style.display = 'block';
        mixDesignDiv.style.display = 'none';
    } else {
        newDiv.style.display = 'none';
        mixDesignDiv.style.display = 'block';
    }
});