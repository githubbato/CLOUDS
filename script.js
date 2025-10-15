document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('registrationForm');
            const submitBtn = document.getElementById('submitBtn');
            const resultsContent = document.getElementById('resultsContent');
            const resultContainer = document.getElementById('results');

            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                resultContainer.style.display = 'block';
                resultsContent.style.opacity = 0;

                setTimeout(() => {
                    displayResults();
                    resultsContent.style.opacity = 1;

                    
                    setTimeout(() => {
                        alert('Sign up successful! Redirecting to Home Page...');
                        window.location.href = './home.html'; 
                    }, 2000);

                    form.reset();
                }, 300);
            });

            function displayResults() {
                const formData = new FormData(form);
                let html = '';

                for (let [key, value] of formData.entries()) {
                    if (value) {
                        html += `
                            <div class="result-item">
                                <div class="result-label">${formatLabel(key)}</div>
                                <div class="result-value">${value}</div>
                            </div>
                        `;
                    }
                }

                resultsContent.innerHTML = html;
            }

            function formatLabel(text) {
                return text
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase())
                    .trim();
            }
        });