# Rendering PDF using react components

As the objective of the assignment is to write functional code to render intern diary pdf, I have made the following simplifications.

As I don’t have API/backend server, I created a json file with all four weeks data and I read the data from this json file inside the react component and rendered the page and pdf. 

I have not used real data time. Instead I stored given date and time in string format. 

I used footer information directly without adding it to json data file.

In real case, we can fetch the user data from database, store it in a state and it can be passed to different components using useContext hook.

