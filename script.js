document.addEventListener('DOMContentLoaded', function() {
    const sgpaInput = document.getElementById('sgpa');
    const percentageInput = document.getElementById('percentage');
    const sgpaToPercentageBtn = document.getElementById('sgpa-to-percentage');
    const percentageToSgpaBtn = document.getElementById('percentage-to-sgpa');
    const resultDiv = document.getElementById('result');
    
    // SGPA to Percentage Conversion
    sgpaToPercentageBtn.addEventListener('click', function() {
        const sgpa = parseFloat(sgpaInput.value);
        
        // Validate input
        if (isNaN(sgpa)) {
            showResult('Please enter a valid SGPA', 'error');
            return;
        }
        
        if (sgpa < 0 || sgpa > 10) {
            showResult('SGPA must be between 0 and 10', 'error');
            return;
        }
        
        // Calculate percentage
        const percentage = (sgpa - 0.75) * 10;
        
        // Update percentage field and show result
        percentageInput.value = percentage < 0 ? 0 : percentage.toFixed(2);
        showResult(Converted: SGPA ${sgpa} = ${percentage < 0 ? 0 : percentage.toFixed(2)}%, 'success');
    });
    
    // Percentage to SGPA Conversion
    percentageToSgpaBtn.addEventListener('click', function() {
        const percentage = parseFloat(percentageInput.value);
        
        // Validate input
      if (isNaN(percentage)) {
            showResult('Please enter a valid percentage', 'error');
            return;
        }
        
        if (percentage < 0 || percentage > 100) {
            showResult('Percentage must be between 0 and 100', 'error');
            return;
        }
        
        // Calculate SGPA
        const sgpa = (percentage / 10) + 0.75;
        
        // Update SGPA field and show result
        sgpaInput.value = sgpa > 10 ? 10 : sgpa.toFixed(2);
        showResult(Converted: ${percentage}% = SGPA ${sgpa > 10 ? 10 : sgpa.toFixed(2)}, 'success');
    });
    
    // Helper function to show results
    function showResult(message, type) {
        resultDiv.textContent = message;
        resultDiv.className = result $ {type};
        resultDiv.style.display = 'block';
    }
    
    // Allow pressing Enter in input fields to trigger conversion
    sgpaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sgpaToPercentageBtn.click();
        }
    });
    percentageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            percentageToSgpaBtn.click();
        }
    });
});