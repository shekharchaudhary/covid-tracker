# Covid Compass Project Overview

# Objective

    Develop "Covid Compass" a web-based application to visualize COVID-19 data from The COVID Tracking Project API. The interactive application would provide users an informative experience exploring statistics. Leveraging the API, it would retrieve the latest data on cases, tests, hospitalizations and metrics. The interface would allow filtering and exploring data by state, county and date. Visualizations may include charts, maps and time-series plots. An easy-to-use responsive design would ensure accessibility on any device. The goal is to serve as an effective, user-friendly tool for exploring historical COVID-19 data. The focus should be on clarity of information, ease of navigation, and adhering to high standards in development practices and data presentation.

# Key Requirements

    1. Data Source
        - Integrate with [The COVID Tracking Project API](https://covidtracking.com/data/api/version-1) to  retrieve COVID-19 data.
        -Acknowledge that the API stopped collecting new data as of March 7, 2021, but still serves the existing data.

    2. Form Design and Functionality

        - State/Territory Selection
            * Include a dropdown menu to select a state or territory.
            * Default option can be 'All States' for national data.

        - Data Filters
            * Provide checkboxes or similar controls for selecting data types: cases, tests, and outcomes.
            * Consider optional additional filters like age groups, hospitalization rates, or death rates.

        - Dynamic Endpoint Selection
            * Construct API endpoint URLs dynamically based on user selections in the form.

        - Data Fetching and Error Handling
            * Implement robust data fetching with proper error handling and user feedback mechanisms.


    3. Data Rendering and Visualization
        - Graphical Representations
            * Present the ingested data in a meaningful and accessible format.
            * Implement various data visualization techniques (e.g., charts, graphs) for an engaging user experience.
            * Include interactive elements like tooltips and clickable legends in the visualizations.
            * Ensure that the data visualizations are responsive and accessible on various devices.
            * Add buffer during pending data (e.g., Lodder )
        - Tables:
            Display detailed data in a tabular format with sorting and filtering capabilities.

    4. User Interface and Experience

        - Layout and Design
            * Ensure a clean, intuitive layout. Prioritize ease of use and logical flow of information.

        - Accessibility
            * Adhere to web accessibility standards to cater to all users.
        - Performance
            * Optimize for performance, especially in data loading and rendering.

    5. Code Quality and Standards

        - Best Practices
            * Adhere to production-level coding standards, including readable and maintainable code.
        - Documentation
            * Include comprehensive documentation for setup, usage, and maintenance.
        - Version Control
            * Use version control (e.g., Git) for code management and collaboration.

    6. Testing and Quality Assurance

        - Automated Testing
            * Implement automated tests (unit, integration, and end-to-end tests) to ensure functionality and reliability.
        - Test Coverage
            * Aim for high test coverage to maintain code quality.

    7. Deployment and Continuous Integration

        - CI/CD Pipeline
            * Set up a continuous integration/continuous deployment (CI/CD) pipeline for automated testing and deployment.
        - Cloud Deployment (Optional)
            * Optionally, prepare the application for deployment on a cloud platform, ensuring scalability and reliability.

    8. Additional Features and Considerations

        - User Feedback and Interaction
            * Allow users to provide feedback or report issues within the application.
        - Data Update Notifications
            * Since the data is historical, inform users of the last data update date for transparency.
        - Scalability
            * Design the application with scalability in mind, considering potential future expansions or API changes.
