# UFO Finder Website

## Overview
The purpose of this analysis/project is to create a website that allows users to filter UFO sightings data based on certain factors. The factors are: date, city, satte, country, and shape of the UFO. At onset, the javascript data file is imported and used to create a immutable dataset that can be manipulated by the javascript app.js. The website contains filter fields that allow users to put in their search parameters which the app.js uses d3 to "listen" for. When new variables are added, the app.js file will update the new filter parameters into the data filter and present only the rows that meet the new parameters. This way, the site's users may find the sightings they are looking for. 

## Results
When using this website, the process of searching for specific sightings is easy. Simply load the page and scroll down until you find the empty filter fields.
![empty filter parameters](https://github.com/ghynox/UFOs/blob/main/empty%20filters.png)

After finding the filter fields, you are free to add in the specific parameters related to date, city, state, country, and craft shape and after you click your mouse outside the filter fields, the webpage will automatically update the table on the right side of the page to show your search findings. If a blank field is present, no data entries could be found using your selectd filters. You should remove them and search again. Make sure to only use lower case letters when filtering. 
![search filters showing data](https://github.com/ghynox/UFOs/blob/main/with%20search%20parameters.png)

## Summary

### A Drawback
This particular filtering design does have a draw back in related to  instructions and feedback related to the use of the filters. For instance, when no entries match the filter selections, only a blank field is presented as compared to a kind note saying that no data meets these requirements. Also, the table updates after the person clicks their mouse outside of the filter fields, so perhaps instructions to do so or adding a button would streamline this and improve user expereince. 

### Improvements
Given the way this site is designed, reimplementing the button to determine that the filters are correct and finished would be a good way to ensure ease of user experience and prevent confusion related to the interface. Also having dropdown menus that are populated with the known values in the data set would make searching for only data in the given dataset much easier as opposed to having to randomly guess what the options are, such as the shape of the UFO or dates of sightings. 
