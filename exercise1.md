## Exercise 11.1
### Scenario - Application is in active development by a team of 6 people, written in Java and is soon to be released.

#### Common Steps in CI
Linting tools are useful when programming and important part of CI because they can help spot issues before any code is even ran. For Java, most of the popular IDEs such as Intellij already have these tools built in. If that isn't enough, 3rd party tools are avaiable also such as Checkstyle and Spotless.

Testing is also a key part of CI. JBehave is one of the most popular Java testing frameworks, it supports BDD and uses a semi formal language. JUnit is a regression testing framework that is used by many developers for unit testing,  mainly used to test small bunchs of code but can also carry out automated tests with the use of Selenium WebDriver. 

Build tools is another staple of CI. Gradle is one of the most popular for Java, it is the default build system for Google's Android operating system, its good for its flexiblity, ease of use and speed. Apache Maven is another popular tool, is has been around longer than Gradles and has more strict conventions that come with the price of being less flexible than something like Gradle.

#### CI Options
Besides Jenkins and GitHub Actions, their are many other options for CI. Some are focused on people new to CI, like "Buddy", designed to lower the entry threshold to DevOps, pipelines are created with over 100 ready-to-use actions and integrate with many popular 3rd party services such as AWS and Shopify. Others like CircleCI target users already familar with CI, they recommend to "Make the switch from Jenkins" on their website! As a result, platforms like CircleCI generally offer a lot more advanced features than their simplified counterparts.

#### Self Hosted or Cloud
For a small team e.g. 1-10 people, cloud is likely to be best option in most cases. Its cheap, simple to use and enough features like running process on all Pull Requests, build packages for production etc. A self hosted setup is generally only needed for large projects that require more resources and more prone to error due bigger teams and testing required. When figuring out best soultion for your team its important to at least consider the budget, resources required, team size and risk/cost of error.