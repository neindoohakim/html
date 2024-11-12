document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const preferences = {
        content: formData.get('content'),
        learningMethod: formData.get('learning-method')
    };

    // Here, you would typically send this data to your server or process it
    // For demonstration, we will just log it and show a simple recommendation
    console.log(preferences);

    // Display recommendations based on user preferences   
     const recommendationsDiv = document.getElementById('recommended-courses');
    recommendationsDiv.innerHTML = <p>Recommended Courses for ${preferences.content} learners:</p>;
    
    // Add more logic to generate course recommendations based on preferences
});
