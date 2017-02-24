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
    
    /**
     * Testing initial entries
     */
    describe("Initial Entries", function(){
        /**
         * Test async with done
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });
        
        /** TEST 5
         * Test when the loadFeed function completes its work there is at
         * least one .entry in the .feed.
         */
        it("contain at least one element", function(){
            expect($(".feed").find(".entry").length).toBeGreaterThan(0);
        });
        
    });

    describe("New Feed Selection", function(){
        var feed,
            newFeed;
        /**
         * Test async with done
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                feed = $(".feed").find(".entry > h2");
                loadFeed(1, function(){
                    newFeed = $(".feed").find(".entry > h2");
                    done();
                });
            });
        });
        /** TEST 6
         * Check if the loadFeed function is called with another feed the
         * content of the page actually changes. To do this we compare
         * the headers of each entry. Assuming the arrays could be of different
         * length (???) we take the smallest number of elements.
         */
        it("changes the content of the website", function(){
            // Test for headers equaliy (take the shorter list)
            var entryLength = feed.length > newFeed.length ? newFeed.length : feed.length;
            for (var i = 0; i < entryLength; i++) {
                expect($(feed[i]).text()).not.toBe($(newFeed[i]).text());
            }
        });
    });
}());
