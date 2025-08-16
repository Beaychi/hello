# 3D Rotating Cube

This project showcases a responsive 3D rotating cube animation implemented using HTML, CSS, and JavaScript with the GSAP animation library.

## Table of Contents

  * Features
  * Technologies Used
  * Setup Instructions
  * Project Structure
  * Animation Details
  * Responsiveness
  * Contact

-----

## Features

  * **Interactive 3D Cube**: A visually engaging 3D cube that continuously rotates.
  * **GSAP Powered Animation**: Smooth and performant animations handled by the GreenSock Animation Platform.
  * **Responsive Design**: The layout and cube size adapt to different screen sizes for an optimal viewing experience on various devices.
  * **Dynamic Text Animation**: The heading text features an engaging character-by-character animation.
  * **Smooth Scrolling**: "Find Out" button scrolls smoothly to a target section (though the target section's content isn't fully defined in the provided code, the functionality is present).
  * **Social Media Links**: Integration with Twitter, LinkedIn, and Instagram for easy access.

-----

## Technologies Used

  * **HTML5**: Structure of the web page.
  * **CSS3**: Styling and layout, including responsive adjustments.
  * **JavaScript**: Interactivity and dynamic content manipulation.
  * **GSAP (GreenSock Animation Platform)**: For advanced JavaScript animations, particularly the 3D cube rotation.
  * **jQuery**: Simplifies DOM manipulation and event handling.
  * **Bootstrap 4.1.3**: For responsive grid system and basic styling.
  * **Boxicons**: For social media icons.
  * **Google Fonts (Poppins)**: Custom font for improved typography.

-----

## Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository (or download the files)**:
    If you have Git installed, you can clone the repository:

    ```bash
    git clone <repository-url>
    ```

    (Replace `<repository-url>` with the actual URL of your repository if applicable).
    Otherwise, simply download the `index.html`, `style.css`, `3d.css`, `script.js`, and `3d.js` files into a single directory.

2.  **Open `index.html`**:
    Navigate to the directory where you saved the files and open the `index.html` file in your web browser.

No special server setup or build process is required.

-----

## Project Structure

  * `index.html`: The main HTML file that structures the content and links all the CSS and JavaScript files.
  * `css/style.css`: Contains general styling for the body, headings, paragraphs, buttons, and responsive adjustments.
  * `css/3d.css`: Specifically handles the styling and positioning of the 3D cube and its faces.
  * `javascript/script.js`: Contains JavaScript for header scroll effects, menu hover effects, and smooth scrolling for the "Find Out" button.
  * `javascript/3d.js`: Implements the GSAP animations for the 3D cube's rotation.

-----

## Animation Details

The 3D cube animation is driven by the `3d.js` file, utilizing the GSAP library.

  * **Face Initialization**: Each face of the cube is initially positioned and rotated using `gsap.set()` to form a cube structure. The `transformOrigin` is set to "50% 50% -150px" and `z` to 150, which helps in the 3D projection.
  * **Rotation Sequence**: A GSAP timeline is used to define a continuous rotation sequence for the cube. It endlessly (`repeat: -1`) cycles through various `rotateX` and `rotateY` values, creating the illusion of a constantly spinning cube. The `ease: "expo.inOut"` provides a smooth acceleration and deceleration effect to the rotations.

The text animation on the heading `<h1>` is controlled by `style.css` and `script.js`. When the `body` has the `hero-anime` class, the individual `<span>` elements (each character of the heading) are animated with a delay to appear as if they are dropping into place. The `script.js` removes the `hero-anime` class on document ready, triggering this animation.

-----

## Responsiveness

The project is designed to be responsive, adapting to different screen sizes using CSS media queries:

  * **`@media screen and (max-width: 1000px)`**: Adjusts the `margin-top` of the absolute-center div and reduces the font size of `h1`.
  * **`@media (max-width: 800px)`**: Centers the `h1` and `p` text, and adjusts the positioning and display of the `btn-box` and `home-sci` elements to stack vertically. The cube also adjusts its size.
  * **`@media screen and (max-width: 500px)`**: Further reduces the `h1` font size and fine-tunes the cube's size and margin.
  * **`@media screen and (max-width:425px)`**: Adjusts the cube's width, height, and right margin.
  * **`@media screen and (max-width:378px)`**: Further reduces the cube's width, height, and right margin, and changes the `perspective` value for a different 3D effect.

-----

## Contact

For any inquiries, you can reach out through the provided social media links:

  * [Twitter](https://x.com/beaychi)
  * [LinkedIn](https://www.linkedin.com/in/awonuga-oluwadamilola-8641b2269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZCsYwKkSTOCZKrM9%2BoyiCA%3D%3D)
  * [Instagram](https://www.instagram.com/da_mmy.a/)
