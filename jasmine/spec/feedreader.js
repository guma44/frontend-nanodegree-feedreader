/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /** TEST 1
        * Loop over feeds and check that each one has a URL defined
        * and that the URL is not empty (truthy).
         */
        it("URLs are defined and are not empty", function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
            });
        });

        /** TEST 2
         * Loop over feeds and check that each one has a name defined
         * and that the name is not empty (truthy).
         */
         it("names are defined and are not empty", function(){
             allFeeds.forEach(function(feed){
                 expect(feed.name).toBeTruthy();
             });
         });
    });

    /**
     * Testing menu
     */
    describe("The menu", function(){
        /** TEST 3
         * Check if the menu is hidden by default by checking if the body
         * has menu-hidden class.
         */
        it("is hidden by default", function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
        /** TEST 4
         * Test wheter menu is open and hidden again when clicked on the
         * menu icon.
         */
        it("changes visibility when menu icon is clicked", function(){
            $(".menu-icon-link").trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $(".menu-icon-link").trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
