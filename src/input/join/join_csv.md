---
title: Join CSV
layout: blank-two.html
date: 2017-09-20 18:00
collection: join
---



## Join Tabular Data from CSV File

<p>
[![Join CSV Video 18m6s](../../assets/graf/YouTube_icon_sm.jpg "Join CSV Video 18m6s")](https://www.youtube.com/watch?v=yjLA7D2ghZ4)

<div class="plain-text">
 <ul>
  <li>[Overview](#ovr)</li>
  <li>[Prepare Join IDs](#prep_id)</li>
  <li>[Prepare Spatial Data](#prep_sp)</li>
  <li>[Join Operation](#join)</li>
  <li>[Check Join Results](#chk)</li>
  <li>[Save to Shapefile](#shp)</li>  
 </ul>
</div>

<div class="text_anchor"><strong>Overview</strong><a id="ovr"></a></div>

```
QGIS joins are temporary relationships between layers, or between tabular data (in .dbf or .csv formats) and spatial data layers. In this exercise we discuss preparation of the tabular data and the join process.
```

<div class="text_anchor"><strong>Prepare Join IDs</strong><a id="prep_id"></a></div>
<div id="text_warn">
Before considering any table joins, the most vital aspect to consider is the JOIN FIELD. The join field must contain matching values (in the same format, such as STRING or INTEGER) in both the source table and the target layer. Placenames are usually NOT the best choice, because duplicates, capitalization, blank spaces, or other variations in the exact spelling used in either table will introduce many errors. Ideally, you want to use UNIQUE IDENTIFIERS for the values in the join field rather than placenames. For geospatial data, there are many standardized encoding systems that we can use for identifiers related to administrative divisions, such as <a href="https://en.wikipedia.org/wiki/FIPS_county_code" target="_blank">FIPS</a> Codes, or Chinese <a href="https://en.wikipedia.org/wiki/Administrative_division_codes_of_the_People%27s_Republic_of_China" target="_blank">GBCODES</a>, European <a href="https://en.wikipedia.org/wiki/Nomenclature_of_Territorial_Units_for_Statistics" target="_blank">NUTS</a> codes, Japanese <a href="http://www.tt.rim.or.jp/~ishato/tiri/code/code.htm" target="_blank">JCODES</a>, and various other administrative coding systems.
<br><br><a href="http://www.geonames.org/" target="_blank">Geonames</a> has also become a de-facto standard for encoding points of interest [POI] world-wide.  For example, the ID <a href="http://www.geonames.org/4944413" target="_blank">4944413</a> is permanently associated with the place: Montague, MA, USA. 
<br><br>
If you find that existing geographic codes do not work for your data, create your own set of UNIQUE IDs and don't alter them. Persistence of IDENTIFIERS help to keep your data organized and consistent.
</div>
<div class="gray-text">
The following exercise uses data from:
<br>
1. [Workshop Data 2016-02-26 PART TWO](http://maps.cga.harvard.edu/qgis/data/older_data/workshop_data_2016-02-26.zip) Taiwan
</div>

<div class="maps"><img src="../../assets/graf/join_csv_1.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Use ADD VECTOR LAYER button to open the sample file <strong> /TW_pop_BIG5.csv </strong> in QGIS (with Encoding = BIG5)</li>
  <li>Right-click on the layer in Layers Panel to Open Attribute Table</li>
  <li>Inspect contents to see if they look correct (readable characters, and no mixed data types in columns)</li>
  <li>Sort the intended JOIN FIELD (COUN_CODE) by Clicking on the Field Name (COUN_CODE) to make sure it does NOT have NULL values or blank cells</li>
  <li>Close the Attribute Table and right click on the Layer, then go to PROPERTIES | FIELDS</li>
  <li>Note the data TYPE for the JOIN FIELD (in this case QGIS imported the field as = String)</li>
  <li>If STRING is not the desired format for the field, you can assign a specific data type to each field when using the CSVT (see the following section on CSVT files)</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_2.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Now we will use a CSVT file to define field formats for a .csv file </li>
  <li>In a text editor open the tutorial file: /TW_pop_BIG5.csvt</li>
  <li>You should see a single line in the file, like the following:<br><strong>"String(12)","String(20)","String(20)","String(40)","Integer(12)","Integer(12)","Integer(12)"</strong></li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_3.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Note that some fields are defined as STRING and others as INTEGER </li>
  <li>These can be modified to match the order and data types as they occur in any .csv file you want to import. In QGIS, when you add a .csv file that has an accompanying .csvt, it honors the formats defined in the .csvt! </li>
  <li>Also note that each field definition is wrapped in double-quotes and separated by commas. No comma after the last field definition!</li>
  <li>Make sure that the CSVT file is saved using the SAME FILENAME as the .csv file being defined.</li>
  <li>In this example, we saved the file as -> TW_pop_BIG5.csvt</li>
  <li>Make sure the file extension is .csvt, not .txt or some other default extension.</li>
   <li>More info on using csvt files <a href="http://goo.gl/vZmfp" target="_blank">here</a>.</li>
    </ol>
</div>

<div id="text_warn">
You may be tempted to open and view the .CSV table in EXCEL. Note, EXCEL may wreck the character set encoding of your files. An all-around excellent tabular data & spreadsheet application is <a href="http://www.libreoffice.org/" target="_blank">LibreOffice</a> Calc, which is freeware and runs on Windows, Linux and Mac.  Like QGIS, the <strong>LibreOffice programs enable the selection of a codepage</strong>, both at the time of OPENING the file, and at the time of SAVING the file.</div>

<div class="text_anchor"><strong>Prepare Spatial Data for the Join</strong><a id="prep_sp"></a></div>
<div class="gray-text">
Open the sample file: TW_pop_xian80.shp in QGIS (with Encoding = BIG5)</li>
</div>
<div class="maps"><img 
src="../../assets/graf/join_csv_4.jpg"></div>
<div class="gray-text">
 <ol>
   <li>Right-click on the layer in the Layer List and go to PROPERTIES | FIELDS</li>
   <li>Note that there is only one field in the Shapefile, and that it is STRING data type</li>
   <li>If both the tabular data in .CSV and the target spatial data layer have the same DATA TYPE for the JOIN FIED, then you can close the Attribute Table and proceed to the Join. </li>
   <li>If the DATA TYPES are NOT the same, you can REMOVE the .csv table form the Layers List, RESET the field type in the CSVT file for the specific field, then re-open the .csv table in QGIS.   Changes in the CSVT should be seen in the Attribute Table of the .csv PROPERTIES | FIELDS.</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_5.jpg"></div>

<div class="text_anchor"><strong>Join Operation</strong><a id="join"></a></div>
<div class="gray-text">
 <ol>
  <li>The TARGET layer is the spatial data layer:  TW_pop_xian80 </li>
  <li>The SOURCE DATA file is the tabular data layer: TW_pop_BIG5.csv, which contains attributes that we want to join to the spatial objects </li>
  <li>Click on the TARGET Layer in the Layers Panel (TW_pop_xian80) to make it active, then right-click on that layer and select PROPERTIES</li>
  <li>In the Properties window, click on the JOIN tab, then the PLUS Sign button to ADD a JOIN</li>
  <li>For the JOIN LAYER, we select the SOURCE DATA .csv file (if you have many layers open, you will be able to select from the drop-down menu):  TW_pop_BIG5</li>
  <li>For the JOIN FIELD, you choose the Field Name containing the JOIN ID in the JOIN LAYER, in this case COUN_CODE</li>
  <li>For the TARGET FIELD, you choose the Field Name with the JOIN ID in the Spatial Data file, in this case also called COUN_CODE</li>
  <li>Click OK, the APPLY to create the Join</li>
 </ol>
</div>
<div class="maps"><img 
src="../../assets/graf/join_csv_6.jpg"></div>

<div class="text_anchor"><strong>Check Join Results</strong><a id="chk"></a></div>
<div class="gray-text">
 <ol>
  <li>Right-click on the Target Layer (TW_pop_xian80) and Open Attribute Table</li>
  <li>The table should now contain all the joined attributes </li>
  <li>In addition the COUN_CODE field, the table now shows the columns joined from the .csv file</li>
 </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_7.jpg"></div>

<div class="gray-text">
 <ol>
  <li><b>But there is a problem!</b></li>
  <li>The Field Names generated by the join contain the Entire Filename of the SOURCE FILE, concatenated with the Source File Field Names.  So, we ended up with many fields that are quite long.  They can be seen if you drag the column width in the ATTRIBUTE TABLE view to expand each column horizontally </li> 
   <li>Also, if you close the ATTRIBUTE TABLE, and go to examine the PROPERTIES | FIELDS of the Target Layer, you will see that the complete Field Names are there, such as:  TW_pop_BIG5_POP_2000</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_8.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Note that ArcGIS Shapefiles have a defined FIELD NAME limit of ten characters.  Longer names can be held as an "alias" of the Field Name.  But when saving to Shapefile these may not be preserved.</li>
  <li>One trick to get around this issue, is to RENAME both the .csv and the .csvt to a single letter filename.   For example:
<br>TW_pop_BIG5.csv -> renamed -> J.csv
<br>TW_pop_BIG5.csv -> renamed -> J.csvt
</li> 
   <li>To proceed with this operation, we first need to REMOVE THE JOIN by going to the target layer's PROPERTIES | JOINS tab and clicking the RED MINUS sign </li>
  <li>Then click OK</li> 
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_9.jpg"></div>

<div class="gray-text">
 <ol>
  <li>With the temporary Join removed in our QGIS Project, we can rename or save new copies of the .csv and .csvt files, as described above</li>
  <li>Now add the new versions of the .csv SOURCE LAYER using the ADD VECTOR LAYER button</li> 
   <li>Now you should have the tabular file in the Layers Panel:  J</li>
  <li>Check the PROPERTIES | FIELDS of the J table to make sure the .csvt data type of STRING was correctly defined</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_10.jpg"></div>

<div class="gray-text">
 <ol>
  <li>Using the renamed J.csv file as the SOURCE LAYER, rerun the JOIN process</li>
  <li>The newly joined Attribute Table will have the concatenation of the Filename, for example:  J_POP_2000
</li> 
   <li>Even within the constraints of 10 characters, this Field Name will not be truncated when saving to Shapefile</li>
  </ol>
</div>

<div class="maps"><img 
src="../../assets/graf/join_csv_11.jpg"></div>

<div class="text_anchor"><strong>Save to Shapefile</strong><a id="shp"></a></div>
<div class="gray-text">
 <ol>
<li>Note:  the JOIN is only a temporary relationship in QGIS.  You should SAVE THE JOINED LAYER to a new Shapefile before proceeding</li>
  <li>Right-click on the TARGET LAYER in the Layers Panel, in the is case <b>tw_XIAN80</b>, then click SAVE AS
</li> 
  </ol>
</div>
<div class="maps"><img 
src="../../assets/graf/join_csv_12.jpg"></div>

<div class="gray-text">
 <ol>
<li>In the SAVE VECTOR LAYER AS window, make sure you have the Format set to ESRI Shapefile</li>
  <li>Click on BROWSE and select a Folder and Filename, in this case I typed in the Filename: tw_XIAN80_JOIN</li>
  <li>CRS allows you to define the CRS for the new Shapefile.  In this case we can keep the original CRS, EPSG 2333</li> 
  <li>Encoding allows you to custom define an encoding for the data layer Character Set, in this case we will keep the Chinese BIG5 encoding</li>
  <li>Click OK to Save the new Shapefile</li>
 </ol>
</div>
<div class="maps"><img 
src="../../assets/graf/join_csv_13.jpg"></div>

<div class="gray-text">
 <ol>
<li>By default the New SAVED Shapefile should be added to the Layers Panel</li>
  <li>Right-click on the new Layer tw_XIAN80_JOIN and check the Attribute Table</li>
  <li>Now all the columns from the .csv file are part of the Shapefile, and not held in a temporary join</li> 
  <li><b>Note:  It is important to save joins to Shapefiles in order to run many Spatial Analysis tools</b>.  Many processes will not work if you attempt to run them on data held in a temporary Join</li>
 </ol>
</div>
<div class="maps"><img 
src="../../assets/graf/join_csv_14.jpg"></div>

<div class="gray-text">
 <ol>
<li>Close the ATTRIBUTE TABLE and Right-click on the new Layer tw_XIAN80_JOIN to view the PROPERTIES | FIELDS tab</li>
  <li>You will see that, indeed, when we SAVED TO SHAPEFILE, the Field Names were truncated to ten characters!</li> 
  <li><b>Our expedient of renaming the .csv file to J worked!</b>.</li>
  <li>If we had NOT taken that step, when saving the Joined tabular data to a new Shapefile, the resulting field names would have been:  TW_pop_BIG for ALL of the Joined Columns.  Not very useful.  Hope you appreciate the trick of renaming the .csv file to ONE LETTER.</li>
 </ol>
</div>
<div class="maps"><img 
src="../../assets/graf/join_csv_15.jpg"></div>

<div class="plain-text">
**Proceed to [Spaital Join](../join_spatial) Instructions**</div>