# Wattup slim jims!
# Welp, u guys somewhat wanted it so here it is, a personal course made by me and for me
# Basically, in this crash course in doing it, you guys will learn the low key basics of Vue so we can get fast clout
# So, follow along as we start making a cool ass mini-project website with Vue-js

# tl;dr making a crash website with Vue

##! 1. Setting it up

    !## Setting up Vue
    
        ~ 1: make a script component that uses the source below
            - https://cdn.jsdelivr.net/npm/vue/dist/vue.js

        # cool, now try checking the console and you should see messages cofirming your in developer mode

        ~ 2: under the vue script tag, add the script magic.js below

        ~ 3: Copy/Paste or type the following code below.
            -Make sure to change the 'el' value to your corresponding root div

            var app = new Vue({
                el: '#app',
                data: {
                    message: 'Clout? EZPZ!',
                    imageSrc: './united.gif'
                },
                methods: {
                    
                }
            });
        
        # with this code you'll be able to store your values as properties in the data object

        # Now your prepared, your ready to complete the task!
        # For the upcoming task, I'll try go over the basics of vue while completing the task

    !## Doing the task

        ~ 1: Task #1
            
            ~ 1: Make a new new property in the data object that is a string of a new image source

            ~ 2: Going back into the html, change the attritbute of the image element 'src' to ' ':src'

            ~ 3: additionally, change the string of the source location to your propertyName

            -ex. <img :src='propertyName' /> 
            
            # Note: with adding the ':' to the beginning of the attribute, it will tell code that a attribute will be 
            accessing a property in your Vue data block, making it a Vue attribute capable of doing that

        ~ 2: Task #2

            ~ 1: set up 2 properties in the data object holding a value of a string to whatever you please

            ~ 2: Back to the HTML, make a block div holding the same elements as the others (e.g h1 & h2 with the respected classes)

            ~ 3: In your H1, access your first property using the mustache syntax

                -ex. <h1> {{firstProperty}} </h1>

            ~ 4: In your H2, access your second property using v-text syntax

                -ex. <h2 v-html="secondProperty"> </h2>

            # These are two ways we can access properties in our HTML, with that to keep note that you can only display
            text with this syntax. More about that later

        ~ 3: Task #3

            ~ 1: In your javascript, add the following code under the 'methods' object :

                addNumbers: function(x,y) {
                    return x + y
                }
            
            ~ 2: Going back to HTML, call this function using the mustache syntax and inputting arguements

                -ex. <h2> {{addNumbers(5,3)}} </h2> <!-- Expected output of 7 on the HTML page -->

            # What methods do is allow you to execute a piece of code that can use the properties in data
            and a lot of others stuff when using modules. Methods can be used in a lot of useful situations such
            as calling HTTP request and sending responses to other components or a event bus

        ~ 4: Task #4 

            ~ 1: In your HTML, add a new 'blox' element with the following attribute called v-for
            
                -ex. <div class=".blox" v-for="index in 10">

                     </div>

            ~2: In this DIV, copy/paste the stated h1 and h2 in the div with the v-for attribute

            # what this did is pretty self explaintory as it pasted the div a X amount of times onto the page

            #to give you a little refresher in pure JS, code would look like this:

                for(var i=0; i < someNumber; i++) {
                    let temp = document.createElement('DIV');
                    temp.className = 'blox';

                    temp.innerHTML = `
                        <h1 class="super-header">Final Task</h1>
                        <h2 class="sub-header">Use a for loop to spam this block</h2>
                    `
                    document.querySelector('#root').appendChild(temp);
                }
            
            #see, much easier if you guys HURRY UP AND LEARN it

#welp, end of the course, I'll add some resources below if you guys want to know More

Resources: 

    -Methods: https://v1.vuejs.org/guide/events.html
    - Properties: https://vuejs.org/v2/guide/components-props.html
    - Attributes for-loop: https://vuejs.org/v2/guide/list.html
    - semicolon data binding: https://v1.vuejs.org/guide/syntax.html