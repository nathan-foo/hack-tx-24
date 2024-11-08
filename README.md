# Hack Texas 2024 | Indie Studio

### Inspiration

Our inspiration for this project stems from our desire to make a positive impact in the gaming community. We hope to support indie game developers with this AI tool and enable them to continue doing what they love!

### What It Does

Indie Studio is designed to empower indie developers to create unique and visually appealing games. This tool provides developers with AI-generated images including themes, sprites, and assets tailored to their specific needs. Users are able to enter a custom prompt to generate retro assets, as well as specify the number of assets needed. After generation, the tool features a live demo using the generated sprites and provides an option to save the new assets.

### What We Learned

Through this project, we learned to utilize AI and stable diffusion for image generation in a full stack environment. We also learned to implement Python with a Next.js frontend to access powerful tools for backend development, and we improved our front end design skills with horizontal scrolling, falling petal effects, preloader animations, and an aesthetic color palette.

### How We Built It

We opted to build our web application using React and Next.js for fast loading speeds and static site generation. We developed three pages including a user friendly landing page, about section, and generative interface for asset creation, and used Flask to connect our application to our Python backend. We used Python to implement stable diffusion with AI, and we received generation directions from a text input provided by the user.

How does it work? Whenever a user enters a prompt, the input is sent to a generative AI model and intelligently parsed into keywords. Once the keywords are acquired, they are then sent to stable diffusion which returns a set of generated images based on those keywords. The images are then used to create a live demo environment where the user can interact with the sprites as well as an image gallery filled with generated assets. Users are then able to download the assets to implement straight into their development platform

### Challenges We Faced

One challenge we faced was implementing stable diffusion into our project. The main problem we faced was the stable diffusion program taking a long time to generate, but we made our best attempt to increase load speeds.

Another challenge we faced was designing a clean user experience that fit well with the hackathon theme. We went through several theme ideas before deciding on the current version and encountered problems with implementing several design ideas, but in the end we finally came up with a version that we were satisfied with.

Of course, our hardest challenge was sleep deprivation and merge conflicts :)

### What's Next

We see an endless amount of possibilities for this project. In the future, we hope to add additional functionality to our app such as music and color palette generation alongside our image assets. We also plan to remove the background from the main character sprite in the demo and polish up the UI for the asset generation page. We would like to add drag and drop blocks to place assets in the demo, so that users can further visualize how all of their ideas can work together for an indie game. Finally, we hope to rework the AI prompting to provide more relevant results based on user input.

### Project Submission

View our project submission [here](https://youtu.be/LquDhi9tpog).
