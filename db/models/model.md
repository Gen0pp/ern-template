The Model is the data and the rules applying to that data, which represent concepts that the application manages. 
In any software system, everything is modeled as data that we handle in a certain way.
What is a user, a message or a book for an application? 
Only data that must be handled according to specific rules
(date can not be in the future, e-mail must have a specific format, name cannot be more than x characters long, etc).
The model gives the controller a data representation of whatever the user requested (a message, a list of books, a photo album, etc).
This data model will be the same no matter how we may want to present it to the user, that's why we can choose any available view to render it.
The model contains the most important part of our application logic, the logic that applies to the problem we are dealing with (a forum, a shop, a bank, etc).
The controller contains a more internal-organizational logic for the application itself (more like housekeeping).