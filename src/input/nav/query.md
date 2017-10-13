---
title: Query Expressions
layout: blank-two.html
date: 2017-09-20 10:00
collection: nav
---


## Query Expressions

<div id="text_warn">
This tutorial page continues directly from the [SELECTION](../select/) tutorial, so you will need to complete that first in order to have the data layers described below.
</div>

<div class="plain-text">
 <ul>
  <li>[Column Filter](#col)</li>
  <li>[Query Builder](#qry)</li>
  <li>[Expression Tool](#exp)</li>
  <li>[Regular Expressions](#regex) </li>
 </ul>
</div>

<div class="text_anchor"><strong>Column Filter</strong><a id="col"></a></div>

```
Continuing from the previous section on SELECTING FEATURES, we have three layers of data added to our current QGIS project, and have done a spatial select to find 153 features.
```

<div class="maps"><img src="../../assets/graf/select_pts.jpg"></div>

```
Right click on the active points layer, with the selected features, and OPEN THE ATTRIBUTE TABLE. Then scroll to the right until you can see the FULL_NAME_1 column.
```

<div class="maps"><img src="../../assets/graf/attribute_table_arabic.jpg"></div>

```
The simplest way to search for a word (or string) in QGIS 2.0 is to use Column Filter. From the bottom left drop-down menu, select COLUMN FILTER. Scroll right to the Columns List, then select the FIELD NAME you want to search in. 
```

<div class="maps"><img src="../../assets/graf/attribute_table_filter.jpg">
</div>

```
1. You will see a blank form where you can type in the string to be searched for

2. In this example, we are filtering for Passage and have left the case sensitive option checked

3. Click APPLY to run the search
```
<div class="maps"><img src="../../assets/graf/attribute_table_filter_apply.jpg">
</div>

```
Only two records were found that contained the string Passage. If you change the query string to Pass and hit APPLY again, an additional row will be found, Daiqa Pass. This means that the search is essentially allowing for any characters to precede or to follow the search term (the equivalent of a wildcard like %Pass% )
```

<div class="text_anchor"><strong>Query Builder</strong><a id="qry"></a></div>

```
Another way to run queries in QGIS is QUERY BUILDER. First DESELECT ALL the features, then Right-click on the points layer (egypt_gns) and go to PROPERTIES, then the GENERAL TAB. You may need to scroll down to the lower right to launch QUERY BUILDER.
```
<div class="maps"><img src="../../assets/graf/qry_1.jpg">
</div>

```
1. In the FIELDS form, scroll down and double-click on FULL_NAME_1

2. The Field Name should appear in the expression form near the bottom of the window

3. Click once on the operator button LIKE, which should appear in the expression form

4. Move your cursor to click after the word LIKE in the expression window

5. Type in your search string wrapped by SINGLE QUOTES and the wildcard %, for example: '%Pass%'

6. Click TEST which will validate the expression and show number of rows found when run
```

<div class="maps"><img src="../../assets/graf/qry_2.jpg">
</div>

```
Clicking OK will close the TEST results, then click OK. You will be back on the GENERAL tab, with your Query Shown in the Provider Feature Filter.  Click APPLY to run the query, and OK to close the Layer Properties.  Now take a look at your map view and attribute table, which will show the rows selected using QUERY BUILDER.
```

<div class="maps"><img src="../../assets/graf/qry_3.jpg">
</div>

```
Note that the Query Builder has HIDDEN all the remaining features.   You can always right click on the Layer and go to Properties | General | Query Builder and click the CLEAR button, which will restore your complete layer of features.
```

<div class="text_anchor"><strong>Expression Tool</strong><a id="exp"></a></div>

```
The COLUMN FILTER and QUERY BUILDER are essential User Interfaces that provide limited subsets of the querying and filtering functionality of QGIS. You can also make use of QGIS finer grained querying power, using the EXPRESSION tool user interface, or by running your own custom Python scripts with the same operators and functions. Let's see how the same query can select features using EXPRESSION. First, reset your attribute table on the lower left drop-down menu to SHOW ALL FEATURES. Then click on the EXPRESSION button to open the SQL Expression window.
```

<div class="maps"><img src="../../assets/graf/attribute_table_exp.jpg"></div>

```
If you know which query operator, conditional or function you want to use, you can type it into the search bar above the FUNCTION LIST. For example, we can try typing LIKE. When you type LIKE into the search box, the term will be shown under it's parent group, OPERATORS.

Double-click on LIKE in the FUNCTION LIST to add it to your Expression form. You will see that a warning appears below the Expression form, indicating that the Expression is Invalid. This is very useful to see if you are constructing valid query expressions. Now move the cursor to the beginning of the Expression form, before LIKE, so we can add the FIELD NAME to be searched in.
```
<div class="maps"><img src="../../assets/graf/exp_1.jpg">
</div>

```
First, be sure to REMOVE or DELETE the word LIKE from the Search Box above the function list! (Otherwise the Function groups will not be expandable trees because they do not contain the term LIKE.)

Next expand the list of FIELDS AND VALUES in the Function List. Scroll down to find the field called FULL_NAME_1 and double-click on it. The Field Name should be added to the beginning of the Expression Form.
```

<div class="maps"><img src="../../assets/graf/exp_2.jpg">
</div>

```
Now move the cursor to the right side of LIKE and type the search term within SINGLE QUOTES, and with the wildcard % before and after the term: '%Passage%'. Your expression should read: "FULL_NAME_1" LIKE '%Passage%' The Expression validation warning will disappear if this query expression is valid.

```

<div class="maps"><img src="../../assets/graf/exp_3.jpg">
</div>

```
Click SELECT to run the query. 

Return to the Attribute Table and use the drop-down on the lower left to SHOW SELECTED FEATURES.  In this example only two records matched the string 'Passage' in the FULL_NAME_1 field. 

Now click the DESELECT ALL button.  Return to the EXPRESSION tool to search for 'Pass' and you should find three rows selected.
```


<div class="text_anchor"><strong>Regular Expressions</strong><a id="regex"></a></div>

<div class="plain-text">
**Use Regex in QGIS following the [Python Regex rules](http://docs.python.org/2/library/re.html)**.
</div>

````
QGIS provides the full extent of REGEX functionality, including the ability to run complex queries, maths, and search-replace operations. Just to get started, let's run a similar query with the regex function.

  1. Click on the EXPRESSION button to open the tool

  2. Type regex in the search box, then double-click on regexp_match
  
  3. Delete the term regex from the search box, then expand the Fields and Values tree
Scroll down and double-click on the field to be searched, FULL_NAME_1

 4. Move your cursor to click after "FULL_NAME_1" in the expression window
Type in the rest of the regex phrase, for example: ,'Pass$')

 5. The syntax is:  regexp_match("FIELDNAME",'regex')

in this case:
regexp_match("FULL_NAME_1",'Pass$')

 6. Click SELECT to run the query

Note, the sample query above will find only ONE record, because the term Pass is followed by the $ flag, which indicates it is the END of the text being searched for. 

If you DESELECT and try 'Pass' you should find three records, etc. 
```

<div class="maps"><img src="../../assets/graf/exp_4.jpg">
</div>

<div class="plain-text">
See the documentation on **[QGIS Expressions](https://docs.qgis.org/2.18/en/docs/user_manual/working_with_vector/expression.html)** for lots of great functions!  For example, the geometry functions will calculate the area of all polygons using the $area function.
</div>


<hr>
<div class="plain-text">
**Proceed to the [IMPORTING DATA](../../import) section**
</div>