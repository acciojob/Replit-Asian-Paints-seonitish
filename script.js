//your JS code here. If required.
  // Function to reset all grid items to transparent
        function resetGrid() {
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(item => item.style.backgroundColor = 'transparent');
        }

        // Function to change the color of a specific grid item
        document.getElementById('change_button').addEventListener('click', function () {
            resetGrid(); // Reset all items before applying new color

            const blockId = document.getElementById('block_id').value;
            const color = document.getElementById('colour_id').value;
            const targetItem = document.getElementById(blockId);

            if (targetItem && color) {
                targetItem.style.backgroundColor = color;
            } else {
                alert("Please enter a valid Block ID (1-9) and color.");
            }
        });

        // Event listener for the Reset button
        document.getElementById('Reset').addEventListener('click', resetGrid);