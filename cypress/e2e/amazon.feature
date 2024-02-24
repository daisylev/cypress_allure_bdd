Feature: Amazon

    Scenario: Amazon test
        Given User navigate to Amazon page 

        # Verify functionality of login with invalid account
        When Click to 'Sign In' link on header
        And Type "daisy.leviet123@gmail.com" to 'Email or mobile phone number' textbox
        And Click to Continue button
        Then User can see alert message "There was a problem"
        And User can see message "We cannot find an account with that email address"

        # Verify user can login to amazon with a valid account
        When Type "daisy.leviet@gmail.com" to 'Email or mobile phone number' textbox
        And Click to Continue button
        Then User can see Password textbox appears
        
        When Type "Daisy881225!" to Password textbox
        And Click to Login button
        Then User can see Hello User text

        # Verify result list is paginated if there are more than 16 items
        When Select "EN" from Language dropdown
        And Select "Books" from Department dropdown
        And Search with keyword "apple"
        Then Verify the result displays "16" items per page if it has pagination

        # Verify result list can be sorted on demand
        When Select Sort by "Publication Date"
        Then Verify the result is sorted by Publication Date in descending order
        