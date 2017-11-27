---
title: Add KML Layer
layout: blank-two.html
date: 2017-09-20 18:00
collection: import
---

## Add KML Layer (Google KML Data)
<br><br>
KML and KMZ files ([Keyhole Markup Language](https://en.wikipedia.org/wiki/Keyhole_Markup_Language)) are stored in an XML notation designed for visualizing and annotating geographic information.   

KML is a "flat text" format which can be read and edited with an ordinary text editor.  KMZ is a compressed version of the KML to save disk space and transfer time.  In our exercise, we will prefer the KML format, which we can view and manipulate as needed.
<br><br>
The KML technology was purchased by Google in 2004, and became the main format used by the Google Earth application.  Since KML files can be created using the free (and relatively easy to use) Google Earth software, it has become quite popular. <br><br>
However, there are some particular aspects of the KML notation that make it less than optimal for data entry, especially for the annotation of spatial features (aka "placemarks") with attributes, as we expect to do in GIS.
<br><br>In this module we will demonstrate the basic use of KML  in QGIS and a few tricks that will make it possible to store attributes (in a separate spreadsheet) and join them to the correct spatial features.
<br><br>

```
A quick search for KML of Egypt found some layers of Egyptian Pyramids.   Opening the KML file with GOOGLE EARTH shows the typical placemark symbols (pushpins) scattered along the Nile River
```
<div class="maps"><img 
src="../../assets/graf/kml_pyramids.jpg"></div>

```
Clicking on one of the placemarks brings up the "Name" and "Description" associated with that spatial feature.   For example, the placemark for Pyramid of Djoser, has a snippet of the Wikipedia entry.
```
<div class="maps"><img 
src="../../assets/graf/kml_pyramids_info.jpg"></div>

```
This looks fine, and works perfectly in the context of Google Earth, but if you right-click on the Pyramid of Djoser feature in the Places list, and go to Properties, you will see the actual code that is stored in the two FIELDS
1.  Name "Pyramid of Djoser"
2.  Description  [all the embedded HTML from the Wikipedia page]
```

<div class="maps"><img 
src="../../assets/graf/kml_pyramids_properties.jpg"></div>

```
If we were to look at the actual KML file, in other words the XML document, we see that the situation is further complicated by the "Description" section being encapsulated within CDATA
```

[CDATA in XML](https://en.wikipedia.org/wiki/CDATA)

<div class="maps"><img 
src="../../assets/graf/kml_cdata.jpg"></div>

```
From this example, we can see that the <name> section is fairly straightforward, but that the <description> is problematic because it includes a great deal of <div> or <span> or other elements within the CDATA section.   It turns out that parsing this CDATA, without having an exact schema of the contents is not trivial.   

Essentially these are the only free-text fields containing attributes related to the placemrk.  NAME, which is a simple string, and DESCRIPTION, which is also a text string, but is wrapped within CDATA section.

Later in this module, we will make use of the NAME and DESCRIPTION fields in a way that makes them actually functional when importing into GIS. 

But first, let's simply open the Pyramids file in QGIS to take a look at it.

KML is considered a regular Vector format, so go to ADD VECTOR DATA and browse to your KML file, then change the encoding to UTF-8 and after you click BROWSE change the file format (on the lower right) to either Keyhole Markup, or All Files, in order to see your .kml file listed.  Then click OPEN and OPEN again.
```

<div class="maps"><img 
src="../../assets/graf/add_vector_kml.jpg"></div>

```
You should now have the KML file opened, and you can adjust the symbolization, for example to red stars, by right-clicking on the KML layer and going to PROPERTIES - STYLE and setting the Marker Symbol and Color.
```
<div class="maps"><img 
src="../../assets/graf/kml_symbols.jpg"></div>

```
Now right-click on the kml file in the Layers Panel and OPEN ATTRIBUTE TABLE.  You can see that the NAME field looks okay, but the DESCRIPTION field contains the entire text string that was found within the CDATA section.
```
<div class="maps"><img 
src="../../assets/graf/kml_attributes.jpg"></div>

```
Basically, the purpose of examining the KML format and importing it into QGIS here, was to demonstrate that there is no reliable way to convert attributes that are stored in the DESCRIPTION field of KML into normalized fields in the QGIS attribute table.

There is a trick, though!

It is not to hard to see that the NAME field being stored with the placemark in KML is not being wrapped in CDATA, nor is it being parsed out of the CDATA section into text string when importing to QGIS.   

Therefore, it is expedient to use the NAME field for Unique Identifiers, such as UNIQUE ID NUMBERS, and only put in a simple feature description in the DESCRIPTION field, such as the placename of the feature.  

This is may seem counter-intuitive, but the method is simply something like:

Name =  128
Description =  Great Pyramid of Giza

If we edit a version of the KML file this way, the Properties of the placemark will be quite readable.
```
<div class="maps"><img 
src="../../assets/graf/kml_revised.jpg"></div>

```
Opening the revised KML in QGIS we can examine the ATTRIBUTE TABLE and see that use of DESCRIPTION field was fine for a SINGLE attribute, the Name of the place, and the NAME field preserved the UNIQUE ID NUMBER as a string.
```

<div class="maps"><img 
src="../../assets/graf/kml_revised_table.jpg"></div>

```
If we were to store other attributes and variables related to these spatial features in a table (Calc, CSV, etc), we could join them using the following steps;

1. save the KML to Shapefile
2. open the tabular data in QGIS using Add Vector Layer
3. go to the Shapefile layer PROPERTIES - JOINS tab, and run the join, using the KML.Name field as the Unique Identifier for the Join.

Jump ahead to the JOINS module for complete guide to Joins in QGIS.

To sum up, the import of KML into QGIS is very simple, but the import will not be able to parse out multiple attributes saved into the "Description" field.

Therefore, the recommended use of KML as a data entry tool is to store UNIQUE IDENTIFIERS in the "Name" field, and one textual attribute in the "Description" field.  

Any additional attributes or variables related to specific Placemarks should be stored in a separate spreadsheet, using one UNIQUE IDENTIFIER for each row.  Finally the tabular data can be JOINED to the spatial features in QGIS.
```

<br>

See also:
1. [Connect](http://www.northrivergeographic.com/qgiswms "") to WMS in National Map.
2. [WMS tutorial](http://www.qgistutorials.com/en/docs/working_with_wms.html "") from Ujaval Gandhi.

**Proceed to [Georeferencing A Scanned Map](../georef) Instructions**